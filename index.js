const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const TOKEN = process.env['TOKEN']

//Keep the server online
const keepAlive = require('./server');
const Monitor = require('ping-monitor');
 
keepAlive();
const monitor = new Monitor({
    website: 'https://Morty-Discord.cabreraevil.repl.co',
    title: 'Main',
    interval: 30 // minutes
});

monitor.on('up', (res) => console.log(`${res.website} server online.`));
monitor.on('down', (res) => console.log(`${res.website} server down - ${res.statusMessage}`));
monitor.on('stop', (website) => console.log(`${website} server stopped.`) );
monitor.on('error', (error) => console.log(error));

client.on('ready', () =>{
    console.log(`Bot ready as: ${client.user.tag}`);
    client.user.setStatus("online");
    console.log(`Bot Status: ${client.user.presence.status}`);
});

//Get message
client.on('message', message => {
    console.log(message.content)

    if(message.content === '!morty'){
        message.channel.send(`Hello ${message.author}!`);
    }

    if(message.content === '!git'){
        message.channel.send('https://github.com/cabrera-evil/Morty-Discord');
    }

});

client.login(TOKEN);
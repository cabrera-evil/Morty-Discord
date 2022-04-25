const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const TOKEN = process.env['TOKEN']

//Keep the server online
const keepAlive = require('./server');
const Monitor = require('ping-monitor');
 
keepAlive();
const monitor = new Monitor({
    website: 'https://Discord-Server.cabreraevil.repl.run',
    title: 'Secondary',
    interval: 30 // minutes
});

monitor.on('up', (res) => console.log(`${res.website} está encedido.`));
monitor.on('down', (res) => console.log(`${res.website} se ha caído - ${res.statusMessage}`));
monitor.on('stop', (website) => console.log(`${website} se ha parado.`) );
monitor.on('error', (error) => console.log(error));

client.on('ready', () =>{
    console.log(`Bot ready as: ${client.user.tag}`);
    client.user.setStatus("online");
    console.log(`Bot Status: ${client.user.presence.status}`);
});

//Get message
client.on('message', message => {
    console.log(message.content)

    if(message.content === '!hi'){
        message.channel.send(`Hello ${message.author}!`);
    }

    if(message.content.includes('!test')){
        message.channel.send('Glad you are testing');
    }

    if(message.content === '!git'){
        message.channel.send('https://github.com/cabrera-evil/Morty-Discord-Server');
    }

});

client.login(TOKEN);
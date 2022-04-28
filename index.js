const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const TOKEN = process.env['TOKEN']

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
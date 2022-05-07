const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const config = require("./config.json");
const TOKEN = config.BOT_TOKEN;

client.on('ready', () =>{
    console.log(`Bot ready as: ${client.user.tag}`);
    client.user.setStatus("online");
    console.log(`Bot Status: ${client.user.presence.status}`);
});

//Get message
client.on('message', message => {
    console.log("User:", message.author.username," Message:", message.content)
    command(message);

    function command(message){
        switch (message.content){
            case '!help':
                message.channel.send('Commands');
                break;
            case '!morty':
                message.channel.send(`Hello ${message.author}!`);
                break;
            case '!git':
                message.channel.send('https://github.com/cabrera-evil/Morty-Discord');
                break;
            default:
                break;
        }
    }
});

client.login(TOKEN);
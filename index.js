const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Bot is online, logged in as ${client.user.tag}`);
    client.user.setPresence({
        status: "online",
        game: {
            name: "Prefix: tb!",
            type: "STREAMING"
        }
    })
})

client.on("messageCreate", (message) => {
    if (message.content == "tb!ping"){
        message.reply("Pong!");
    }
})

client.login(process.env.TOKEN);
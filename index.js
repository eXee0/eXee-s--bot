const Discord = require('discord.js');
require("dotenv").config()

const client = new Discord.Client({
  intents: [
        "GUILDS",
        "GUILD_MESSAGES"
  ]
})

client.on('ready', () =>{
    console.log(`Logged in as ${client.user.tag}`);

})

client.on('message', async msg => {
  // This block will prevent the bot from responding to itself and other bots
  if(msg.author.bot) {
    return
  }

  // Check if the message starts with '!hello' and respond with 'world!' if it does.
  if(msg.content.startsWith("Hello")) {
    msg.channel.send("World!")
  }

});

client.login(process.env.TOKEN);
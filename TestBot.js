const Discord = require("discord.js");
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I'M UP!!! sheesh...");
});

client.on("message", (message) => {
  if (message.content.startsWith(`${prefix}ping`)) {
    message.channel.send("pong!");
  }
  if (message.content.startsWith(`${prefix}info`)) {
    message.channel.send("Created by GingkathFox#3335! **In Development**");
  }
  if (message.content.startsWith(`${prefix}givetoken`)) {
    message.channel.send("Nope! *you Failed!*");
  }
});

client.login(token);

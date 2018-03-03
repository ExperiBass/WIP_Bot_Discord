const fs = require('fs');
const Discord = require("discord.js");
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands');

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on("ready", () => {
  console.log("I'M UP!!! sheesh...");
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.channel.send('Pong.');
    }
  else if (command === 'info') {
        message.channel.send('Created by GingkathFox#3335! **In Devolopment**');
    }
  else if (command === 'givetoken') {
        message.channel.send('Nope! *You failed!*');
    }
});

client.login(token);

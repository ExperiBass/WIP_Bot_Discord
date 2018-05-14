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
    client.user.setActivity('CUDDLE TIME! :3');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) {
return;
}

process.on('unhandledRejection', error => console.error(`Uncaught Promise Rejection:\n${error}`));

function parseArgs (argString, argCount, allowSingleQuote = true) {
  // Replace smart quotes (i.e. “ ” ‘ ’ ) with straight double quotes " "
  argString = argString.replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"')
  const re = allowSingleQuote ? /\s*(?:("|')([^]*?)\1|(\S+))\s*/g : /\s*(?:(")([^]*?)"|(\S+))\s*/g
  const result = []
  let match = []
  // Large enough to get all items
  argCount = argCount || argString.length
  // Get match and push the capture group that is not null to the result
  while (--argCount && (match = re.exec(argString))) result.push(match[2] || match[3])
  // If text remains, push it to the array as-is (except for wrapping quotes, which are removed)
  if (match && re.lastIndex < argString.length) {
    const re2 = allowSingleQuote ? /^("|')([^]*)\1$/g : /^(")([^]*)"$/g
    result.push(argString.substr(re.lastIndex).replace(re2, '$2'))
  }
  return result
}

    const args = parseArgs(message.content.slice(prefix.length));
    const command = args.shift().toLowerCase();

   if (!client.commands.has(command)) {
return;
}

try {
    client.commands.get(command).execute(message, args);
}
catch (error) {
    console.error(error);
    message.reply('There was an error trying to execute that command!');
}
});

client.login(token);

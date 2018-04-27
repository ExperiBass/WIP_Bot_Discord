module.exports = {
       name: `nickname`, //what the user would type to activate the command, like "ping"
       description: `changes your nickname to one of 53 possible names!`, //description of the command, used in the help DM
       execute(message, args) {
             randNick()
             message.channel.send(`Your nickname has been changed to ` + randNick + `!`) //what you want the bot to say when the user uses the command
      },
};

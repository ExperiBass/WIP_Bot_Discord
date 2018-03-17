//use this template to create a new command!
module.exports = {
       name: `command-name`, //what the user would type to activate the command, like "ping"
       description: `command-desc`, //description of the command, used in the help DM
       execute(message, args) {
             message.channel.send(`command-response`) //what you want the bot to say when the user uses the command
      },
};
//remeber, ALWAYS add ".js" to the end of the file name, otherwise it wont work!

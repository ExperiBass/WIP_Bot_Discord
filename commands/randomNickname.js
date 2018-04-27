module.exports = {
       name: `nickname`,
       description: `changes your nickname to one of 53 possible names!`,
       execute(message, args) {
             randNick()
             message.channel.send(`Your nickname has been changed to ` + randNick + `!`)
      },
};

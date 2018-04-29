module.exports = {
      name: `nickname`,
      description: `Changes your nickname to one of 99 possible names!`,
      execute(message, args) {
            var randNick = require('./randNick.js')
            let newNick = randNick(message)
            if (newNick) message.channel.send(`Your nickname has been changed to ` + newNick + `!`)
     },
};
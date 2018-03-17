module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(message, args) {
       console.log("Ping was used!");
        message.channel.send('Pong!');
    },
};

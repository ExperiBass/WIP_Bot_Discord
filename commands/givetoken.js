module.exports = {
    name: 'givetoken',
    description: 'No description >:3',
    execute(message, args) {
        console.log("Someone got pranked!");
        message.channel.send('Nope! *You failed!*');
    },
};

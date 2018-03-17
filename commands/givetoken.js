module.exports = {
    name: 'givetoken',
    description: 'Prank your friends!',
    execute(message, args) {
        console.log("Someone got pranked!");
        message.channel.send('Nope! *You failed!*');
    },
};

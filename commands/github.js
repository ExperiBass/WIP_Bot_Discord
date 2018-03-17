module.exports = {
    name: 'github',
    description: 'Want to help develop?',
    execute(message, args) {
        console.log("oooo, someone might want to help!");
        message.channel.send('Want to help develop? \nClick this link! https://goo.gl/Hu1gF1');
    },
};

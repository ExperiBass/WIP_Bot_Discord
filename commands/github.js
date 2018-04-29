module.exports = {
    name: 'github',
    description: 'The link to the GitHub repo!',
    execute(message, args) {
        console.log("Someone might want to help develop!");
        message.channel.send('Want to help develop? \nClick this link! https://goo.gl/Hu1gF1');
    },
};

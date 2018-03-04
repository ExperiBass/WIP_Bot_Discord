module.exports = {
    name: 'serverinfo',
    description: 'Info about the server!',
    execute(message, args) {
        message.channel.send('${user}\n**SERVERINFO**\n Name: ${message.guild.name}\n Total members: ${message.guild.memberCount}, includng bots!\n Date created on: ${message.guild.createdAt}');
    },
};

module.exports = {
    name: 'serverinfo',
    description: 'Info about the server!',
    execute(message, args) {
    const Humans = `${message.guild.memberCount}` - 4
message.channel.send(`**SERVER INFO:**\nName: ${message.guild.name}\nTotal members: ` + Humans + `, includng bots!\nDate created on: ${message.guild.createdAt}`);
    },
};

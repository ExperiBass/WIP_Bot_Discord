module.exports = {
    name: 'serverinfo',
    description: 'Info about the server!',
    execute(message, args) {
    const Humans = message.guild.memberCount - 2 //Adjust this number for how many bots you have on the server
message.channel.send(`**SERVER INFO:**\nName: *${message.guild.name}*\nTotal Members: **` + Humans + `**\nDate Created: *${message.guild.createdAt}*`);
    },
};

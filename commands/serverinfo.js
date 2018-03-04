module.exports = {
    name: 'serverinfo',
    description: 'Info about the server!',
    execute(message, args) {
        
message.channel.send(`**SERVERINFO**\nName: ${message.guild.name}\nTotal members: ${message.guild.memberCount}, includng bots!\nDate created on: ${message.guild.createdAt}`);
    },
};

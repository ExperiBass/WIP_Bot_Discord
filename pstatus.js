module.exports = {
    name: 'pstatus',
    description: 'Changes my playing status!',
    execute(message, args) {
        
if (!args.length) {
message.channel.reply('You didn\'t give me a new game! ;w;');
    }

let newGame = args[0, 1, 2, 3]
let activityType= args[4]
const activityTypes = [PLAYING, STREAMING, LISTENING, WATCHING]

if (!activityTypes.includes(args[4]) ) {
message.channel.send('You didn’t send an activity type! The types are: ' + activityTypes);

client.user.setActivity(newGame);
message.channel.send('Playing status has been set to "' + newGame + '"!');

console.log("Playing status was changed to " + newGame);

if (args[0] == ‘help’) {
message.channel.reply(‘**HOW TO USE:** /nThe first four words after the command will be the game! The fifth will be what I am doing with it (Listening, Watching, Playing, Streaming)! /nPlease type the fifth word in ALL CAPS, otherwise it won’t work!’);
    },
};

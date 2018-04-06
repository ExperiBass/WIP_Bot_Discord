module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(message, args) {
       console.log("Ping was used!");
        message.channel.send("Pong! Getting latency...").then(m => m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API latency is ${Math.trunc(message.client.ping)}ms!`));
    },
};

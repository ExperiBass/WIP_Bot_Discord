module.exports = {
       name: `say`,
       description: `The bot will delete your message, then repeat what you said.`,
       execute(message, args) { 
    const sayMessage = args.join(" ");
    
    message.delete().catch(O_o=>{}); 
    
    message.channel.send(sayMessage);
  
      },
};

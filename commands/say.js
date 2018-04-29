module.exports = {
       name: `say`,
       description: `The bot will delete your message, then repeat what you said.`,
       execute(message, args) { 
   if (message.author.id !== '399447908237180939') {
          channel.message.send("You don\'t have permission to use this command!");
          return;
   }
             
   const sayMessage = args.join(" ");
    
    message.delete().catch(O_o=>{}); 
    
    message.channel.send(sayMessage);
  
      },
};

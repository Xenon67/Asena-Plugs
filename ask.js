
const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'ask', fromMe: true}, (async (message, match) => {
    
    await message.sendMessage('*Seni*'); 

setTimeout(ask, 2); 
 
    await message.sendMessage('*Çok*') 

setTimeout(ask, 2); 

    await message.sendMessage('*Seviyorum*')
    
}));

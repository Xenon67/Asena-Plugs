
const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'sevgi', fromMe: true}, (async (message, match) => {
    
    await message.sendMessage('_Seni_'); 

setTimeout(myfonction, 5000); 
 
    await message.sendMessage('_Çok_') 

setTimeout(myfonction, 5000); 

    await message.sendMessage('_Seviyorum_')
    
}));

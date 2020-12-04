
const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'sevgi', fromMe: true}, (async (message, match) => {
    return await message.sendMessage('_Seni_');
    
    function myfonction() { ... }

setTimeout(myfonction, 5000); 

    await message.sendMessage('_Çok_')
    
    function myfonction() { ... }

setTimeout(myfonction, 5000); 

    await message.sendMessage('_Seviyorum_')
    
}));

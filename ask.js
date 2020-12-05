const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'ask', fromMe: true}, (async (message, match) => {
    
    await message.sendMessage('*Seni*'); 

    var delayInMilliseconds = 1000;
    setTimeout(function() {
    await message.sendMessage('*Çok*')

}, delayInMilliseconds);

    setTimeout(function() {
    await message.sendMessage('*Seviyorum*')
}, delayInMillisecondz);
}));

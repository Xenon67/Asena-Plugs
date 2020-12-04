
const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'xalive', fromMe: true}, (async (message, match) => {
    return await message.sendMessage('_Emrindeyim sahip_ ⚝ _Asena DevXenon için çalışıyor!_\n\n```Codded by DevXenon```\n\n*Projeler:*\n\nhttps://github.com/Xenon67');
}));

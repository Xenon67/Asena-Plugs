/* Copyright (C) 2020 Yusuf Usta.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsena - Yusuf Usta
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'xalive', fromMe: true}, (async (message, match) => {
    return await message.sendMessage('_Emrindeyim sahip_ ⚝ _Asena DevXenon için çalışıyor!_\n\n```Codded by DevXenon```\n\n*Projeler:*\n\nhttps://github.com/Xenon67');
}));

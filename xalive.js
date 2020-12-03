const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');

const Language = require('../language');

Asena.addCommand({pattern: 'xalive', fromMe: true, (async (message, match) => {
    await message.sendMessage(
        '```Emrindeyim sahip ⚝ Asena DevXenon için çalışıyor!```\n\n*Version:* ```'+Config.VERSION+'```\n*Moderatör:* https://github.com/Xenon67\n*Codded by Xenon*' , MessageType.text
    );
}));

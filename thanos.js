const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'thanos', fromMe: true}, (async (message, match) => {

    var myArray = [

  "İşim bittiğinde, insanlığın yarısı hala var olacak. Her şeyin olması gerektiği gibi mükemmel dengelenmiş. Umarım seni hatırlarlar.",

  "Tüm fetih, şiddet, katliam yıllarımda asla kişisel değildi. Ama şimdi size anlatacağım, inatçı, sinir bozucu küçük gezegeninize ne yapmak üzereyim… Zevk alacağım. Çok çok fazla.",

  "Küçük olan, basit bir hesap. Bu evren sonludur, kaynakları sınırlıdır. Hayat kontrolsüz bırakılırsa, yaşam sona erecektir. Düzeltilmesi gerekiyor."

];

const randomElement = array[Math.floor(Math.random() * array.length)];

await message.sendMessage(myArray);

})));

const {Client, MessageAttachment } = require('discord.js')

const bot = new Client();

const token = 'ODIxOTA1MDQwNTMyMTc2OTE2.YFKgtw.BYUdbgexxu6Ut1X2Hj1GiPcdUF0'

bot.login(token)

bot.on('ready', () => {
  console.log("Estou pronto");
})

bot.on('message', msg => {
  if(msg.content == '!boas'){
    msg.reply('Falaa, meu querido!! seja muito bem vindo! tmj. Se precisar de algo, não peça para mim..')
  }
  if (msg.content === '!avatar') {
    // Send the user's avatar URL
    msg.reply(msg.author.displayAvatarURL());
  }
  if (msg.content === '!rip') {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
    // Send the attachment in the message channel
    msg.channel.send(attachment);
  }
})
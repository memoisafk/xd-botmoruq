const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
exports.run = (client, message) => {
  const AsreaperEmbed = new AsreaperDiscord.MessageEmbed();
  AsreaperEmbed.setColor(0x36393F)
  AsreaperEmbed.setDescription(` Destek sunucusuna oy vermek için [buraya](https://top.gg/servers/821074134930292746) tıkla! \n Botumuz Daha Top.gg Ye Eklenmedi`)

  message.channel.send(AsreaperEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'oyver',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
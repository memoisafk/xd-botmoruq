const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
exports.run = (client, message) => {
  const AsreaperEmbed = new AsreaperDiscord.MessageEmbed();
  AsreaperEmbed.setColor(0x36393F)
  AsreaperEmbed.setTitle("Davet Linkleri")
  AsreaperEmbed.setDescription(`\<a:emoji_7:837714383064399872> XD? davet etmek için [buraya](https://discordapp.com/oauth2/authorize?client_id=829608607540314124&scope=bot&permissions=8) tıkla! \n \<a:emoji_7:837714383064399872> XD? Destek Sunucusuna Gelmek İçin [buraya](https://discord.gg/qPdGsfMpzT) Tıkla`)
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
  name: 'davet',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
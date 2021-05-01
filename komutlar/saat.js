const Discord = require("discord.js");
exports.run = (client, message, args) => {
  const saat = new Discord.MessageEmbed()
      .setDescription("Saat şu an")
    .setColor("RANDOM")
    .setTimestamp()
  message.channel.send(saat);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name:"saat"
}
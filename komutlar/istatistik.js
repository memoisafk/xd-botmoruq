const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const seksizaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter("XD?", client.user.avatarURL())
    .addField("\<a:cassadas1:837622549730951178> **Botun Sahibi**", "<@758043811627925575>")
    
    
    .addField("\<a:emoji_12:837714495559827498> **Çalışma süresi**", seksizaman, true)
    .addField("\<a:emoji_12:837714495559827498> **Kullanıcılar**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("\<a:emoji_12:837714495559827498> **Sunucular**", client.guilds.cache.size.toLocaleString(), true)
    .addField("\<a:emoji_12:837714495559827498> **Kanallar**", client.channels.cache.size.toLocaleString(), true)
    
    
  
    
    
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i", "istatistik"],
  permLevel: 0
};

exports.help = {
  name: ["istatistik", "i"],
  description: "Botun istatistiklerini gösterir",
  usage: ["istatistik", "i"]
};

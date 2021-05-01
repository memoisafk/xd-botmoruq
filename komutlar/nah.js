const Discord = require("discord.js");

exports.run = function(client, message, args) {
const botclub = message.mentions.users.first();

if (!botclub) return message.reply("Lütfen Nah Çekeceğin Kişiyi Etiketle");

const GamerWolf = new Discord.MessageEmbed()

    .setDescription(`${botclub} ` + `ve **${message.author.username}** Nah Çekti` )
    .setImage("https://im0-tub-tr.yandex.net/i?id=83e02fba6aa9f395260421b080cc4895&n=13")
    .setFooter(client.user.username + " Sundu", client.user.avatarURL)
  
 return message.channel.send(GamerWolf);
};
exports.conf = {
  aliases: ["nah-çek"]
};
exports.help = {
  name: "nah",
  usage: "nah"
};
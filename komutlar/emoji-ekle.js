const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
    let emojiname = args[0];
    const emoji = (message.guild.emojis.cache.find(blody => blody.name == `${emojiname}`))
    if (!emojiname) return message.channel.send("Emoji İsmi Belirtmediniz")
    const Yankee = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField("Emojinin ismi", `${emojiname}`)
    .addField("Emoji ID", `${emoji.id}`)
    .addField("Link", `${emoji.url}`)
   
    message.channel.send(Yankee)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["emojibilgi"],
    permLevel: 0

}
exports.help = {
    name: 'emoji-bilgi',
}
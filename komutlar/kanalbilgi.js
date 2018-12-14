const Discord = require('discord.js')

exports.run = (bot, message) => {
  const ok = message.client.emojis.get("441922608720510987");
           var embed = new Discord.RichEmbed()
                .setAuthor('#' + message.channel.name, message.guild.iconURL)
                .addField("ID", message.channel.id)
                if (message.channel.nsfw) {
                    embed.addField(" Uygunsuz İçerik", "Evet", true)
                }
                else {
                    embed.addField(" Uygunsuz İçerik", "Hayır", true)
                }
                embed.addField(" Oluşturulduğu Tarih", message.channel.createdAt, true)
                .setColor(3447003)
                .setThumbnail(message.guild.iconURL)

            message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kanalbilgi',
  description: 'Kanal Bilgisi Verir! ',
  usage: 'kanalbilgi'
};
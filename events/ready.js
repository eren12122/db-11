const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

    var Games = [

    "Botumuzu Sunucunuza Eklemeyi Unutmayın",
    
    "pop!yardim İle Komutlara Göz Atınız!",
      
    "DBL den Oy Vermeyi Unutmayın!"
      

    ];


module.exports = client => {
 
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: 7/24 Aktif, Komutlar Yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} İsmi İle Giriş Yapıldı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun İsmi Ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu Anda ` + client.guilds.size + ` Adet Sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` Kullanıcıya Hizmet Veriliyor!`);

      setInterval(function() {

        var random = Math.floor(Math.random()*(Games.length-0+1)+0);

        client.user.setActivity(Games[random], { type: "STREAMING", url: "https://www.twitch.tv/popbottw"});
        client.user.setStatus("online")
        }, 2 * 2500);
};
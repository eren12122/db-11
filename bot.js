const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};



bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'hosgeldiniz-log');
  if (!channel) return;
  if(!channel) return message.channel.send(" `hosgeldiniz-log` İsminde Yazı Kanalı Bulamıyorum.!");
  
  channel.send(`Sunucuya hoşgeldiniz, ${member}`);
  const sunucubilgi = new Discord.RichEmbed()
  .setAuthor(`Aramıza Hoşgeldin ${member}`)
  .setColor(3447003)
  .setTimestamp()
  .setDescription('')
  .setImage(`http://clawbot.tk/img/hg.png`)
  return message.channel.sendEmbed(sunucubilgi);
});




client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(process.env.BOT_TOKEN);

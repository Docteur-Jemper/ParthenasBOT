const { MessageEmbed } = require("discord.js");
const { Guild } = require("../models/main");

module.exports = async (bot, member) => {
  const data = await bot.getGuild(member.guild);
  const position = data.users.map(e => e.id).indexOf(member.id);
  const userInfo = data.users[position];
  const embed = new MessageEmbed()
    .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
    .setColor("#630042")
    .setFooter("Un utilisateur à quitté")
    .setTimestamp();

  bot.channels.cache.get("654756085877702656").send(embed);
  await Guild.updateOne({ guildID: member.guild.id }, {  $pull :  {  users:  position | member.id }});
};

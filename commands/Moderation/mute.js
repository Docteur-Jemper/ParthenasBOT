const ms = require("ms");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const user = message.guild.member(message.mentions.users.first());
  const muteRole = message.guild.roles.cache.find(r => r.name === "muted");
  const muteTime = args[1] || "60s";

  await user.roles.add(muteRole.id);
  message.channel.send(`<@${user.id}> est muté pour ${ms(ms(muteTime))}`)
    .then(msg => msg.delete({ timeout: ms(muteTime) }))
    .catch(console.error);
  setTimeout(() => {
    user.roles.remove(muteRole.id);
    message.delete();
  }, ms(muteTime));

  const embed = new MessageEmbed()
    .setAuthor(`${user.user.username} (${user.id})`, user.user.avatarURL())
    .setColor("#0194ad")
    .setDescription(`**Action**: mute\n**Temps**: ${ms(ms(muteTime))}`)
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());

  bot.channels.cache.get("654756085877702656").send(embed);
};

module.exports.help = {
  name: "mute",
  aliases: "",
  category: "moderation",
  description: "Mute un utilisateur pour une certaine durée\n**(réservé au staff)**",
  usage: "<mention> <Temps>",
  isUserAdmin: true,
  permissions: true,
  args: true
};

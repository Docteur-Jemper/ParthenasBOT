/* eslint-disable multiline-ternary */
const { MessageEmbed } = require("discord.js");

module.exports.run = (bot, message, args) => {
  const user = message.mentions.users.first();
  const reason = args.splice(1).join(" ") || "Aucune raison spécifié";
  user ? message.guild.member(user).ban(reason) : message.channel.send("L'utilisateur n'existe pas !")
    .then(msg => msg.delete({ timeout: 5000 }))
    .catch(console.error);

  const embed = new MessageEmbed()
    .setAuthor(`${user.username} (${user.id})`)
    .setColor("#dc143c")
    .setDescription(`**Action**: ban\n**Raison**: ${reason}`)
    .setThumbnail(user.avatarURL())
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());

  bot.channels.cache.get("654756085877702656").send(embed);
};

module.exports.help = {
  name: "ban",
  aliases: "",
  category: "moderation",
  description: "Ban un utilisateur\n**(réservé au staff)**",
  usage: "<mention> <Raison>",
  isUserAdmin: true,
  permissions: true,
  args: true
};

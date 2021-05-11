/* eslint-disable multiline-ternary */
const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const user = await bot.users.fetch(args[0]);
  function Delete() {
    message.delete();
  }
  if (!user) {
    setTimeout(Delete, 5000);
    return message.channel.reply("l'utilisateur n'existe pas !")
      .then(msg => msg.delete({ timeout: 5000 }))
      .catch(console.error);
  }
  message.guild.members.unban(user);
  setTimeout(Delete, 10000);

  const embed = new MessageEmbed()
    .setAuthor(`${user.username} (${user.id})`, user.avatarURL())
    .setColor("#070")
    .setDescription("**Action**: unban")
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());

  bot.channels.cache.get("654756085877702656").send(embed);
};

module.exports.help = {
  name: "unban",
  aliases: "",
  category: "moderation",
  description: "Unban un utilisateur\n**(réservé au staff)**",
  usage: "<user_id>",
  isUserAdmin: false,
  permissions: true,
  args: true
};

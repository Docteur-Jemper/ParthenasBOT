const { MessageEmbed } = require("discord.js");

module.exports.run = (bot, message) => {
  const user = message.guild.member(message.mentions.users.first());
  const muteRole = message.guild.roles.cache.find(r => r.name === "muted");
  function Delete() {
    message.delete();
  }
  if (!user.roles.cache.has(muteRole.id)) {
    setTimeout(Delete, 5000);
    return message.channel.send("L'utilisateur mentionner n'est pas muté !")
      .then(msg => msg.delete({ timeout: 5000 }))
      .catch(console.error);
  }

  user.roles.remove(muteRole.id);
  message.channel.send(`<@${user.id}> n'est plus muté !`)
    .then(msg => msg.delete({ timeout: 10000 }))
    .catch(console.error);
  setTimeout(Delete, 10000);

  const embed = new MessageEmbed()
    .setAuthor(`${user.user.username} (${user.id})`, user.user.avatarURL())
    .setColor("#0194")
    .setDescription("**Action**: unmute")
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());

  bot.channels.cache.get("654756085877702656").send(embed);
};

module.exports.help = {
  name: "unmute",
  aliases: "",
  category: "moderation",
  description: "Unmute un utilisateur\n**(réservé au staff)**",
  usage: "<mention>",
  isUserAdmin: true,
  permissions: true,
  args: true
};

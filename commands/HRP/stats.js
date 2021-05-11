const { MessageEmbed } = require("discord.js");
const moment = require("moment");

module.exports.run = (bot, message, args) => {
  const guild = message.guild;
  let member = message.member;
  let user = member.user;
  let Join = `**· Il a rejoint le serveur le** ${moment(member.joinedAt).format("DD/MM/YYYY à hh:mm A")}`;
  if (args[0] && guild.member(message.mentions.users.first())) {
    member = guild.member(message.mentions.users.first());
    user = member.user;
    Join += `\n**· Bot:** ${user.bot ? "Il s'agit d'un bot" : "Il ne s'agit pas d'un bot"}`;
  }
  message.delete();
  if (message.channel.parent.name === "Parthénas" ||
      message.channel.parent.name === "»»»»»『áthiktos』«««««" ||
      message.channel.parent.name === "»»»»»『ypsós』«««««" ||
      message.channel.parent.name === "»»»『kryfó-chorió』«««" ||
      message.channel.parent.name === "»»»»»『ifaísteio』«««««") {
    return message.channel.send(`(:x: Ne faites pas cette commande dans un channel RP ${message.author} !!)`)
      .then(msg => msg.delete({ timeout: 6000 }))
      .catch(console.error);
  }
  const online = guild.members.cache.filter(member => member.user.presence.status === 'online');
  const idle = guild.members.cache.filter(member => member.user.presence.status === 'idle');
  const offline = guild.members.cache.filter(member => member.user.presence.status === 'offline');
  const dnd = guild.members.cache.filter(member => member.user.presence.status === 'dnd');
  const Robot = guild.members.cache.filter(member => member.user.bot);

  const servembeb = new MessageEmbed()
    .setColor("#27d200")
    .setTitle("Statistique")
    .setThumbnail(guild.iconURL())
    .addField("Nom du serveur", guild.name)
    .addField(`Nombre totale de membre du serveur : ***${fetchAll.size}***`, `*soit ${Robot.size} bot\n${online.size - Robot.size} en ligne\n${idle.size} AFK\n${dnd.size} en ne pas déranger\net ${offline.size} hors-ligne*`)
    .addField(`Info sur ${bot.user.username}`,
    `[Avatar](${bot.user.avatarURL()}) et [Site](https://www.snokido.fr/jeu/there-is-no-game) (Pas encore de Site donc un non jeu rigolo)`)
    .addField("Serveur créer le", moment(guild.createdAt).format("DD/MM/YYYY à hh:mm A"), true)
    .addField("par", `[${guild.owner.user.tag}](${guild.owner.user.avatarURL()})`, true)
    .addField(`Information sur ${user.username}`,
    `**· Compte créé le** ${moment(user.createdAt).format("DD/MM/YYYY à hh:mm A")}
    ${Join}
    **· Status:** ${user.presence.status.toUpperCase() === "DND" ? "Ne pas déranger" : `${user.presence.status.toUpperCase() === "IDLE" ? "AFK" : `${user.presence.status.toUpperCase()}`}`}`
    )
    .setImage(user.displayAvatarURL())
    .setTimestamp();
    message.channel.send(servembeb)
      .then(msg => msg.delete({ timeout: 600000 }))
      .catch(console.error);
};

module.exports.help = {
  name: "statistique",
  aliases: ["stats"],
  category: "hrp",
  description: "Renvoie des statistiques !",
  cooldown: 20,
  args: false
};


const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message) => {
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
  if (message.channel.id !== "568497273273843712" &&
  message.channel.id !== "687970971751022639" &&
  message.channel.id !== "568526562228436992") {
    message.delete();
    message.channel.send("Merci de faire cette commande dans <#568497273273843712> !")
      .then(msg => msg.delete({ timeout: 8000 }))
      .catch(console.error);
    return;
  }
  const embed = new MessageEmbed()
    .setColor("#a41f14");
  var nombre = 0;
  await bot.getGuild(message.guild).then(p => {
    p.users.sort((a, b) => (a.EXP.experience, b.EXP.experience) ? 1 : -1).splice(0, 25).forEach((e, nombre) => {
      const usermember = message.guild.member(e.id);
      var nombre = nombre + 1;
      embed.addField(`${nombre}. \`${(usermember.displayName)}\``, `${e.EXP.experience} points de Maîtrise (Niveau de Maîtrise: ${e.EXP.level - 1})`)
        .setTitle(`Top ${nombre} des utilisateurs sur le serveur`);
    });
  });
  message.channel.send(embed)
  .then(msg => msg.delete({ timeout: 600000 }))
  .catch(console.error);
};

module.exports.help = {
  name: "leaderboard",
  aliases: ["lb", "classement", "leadexp"],
  category: "hrp",
  description: "Renvoie un top des joueurs par rapport à leurs experiences",
  cooldown: 10,
  args: false
};

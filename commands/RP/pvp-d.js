module.exports.run = async (bot, message, args, data, userInfo) => {
  message.delete();
  if (message.member.roles.cache.has("739450278880870500")) return message.channel.send(":x: Veuillez attendre quelque seconde !")
    .then(msg => msg.delete({ timeout: 4000 }))
    .catch(console.error);
  if (!message.channel.parent.name === "Parthénas" ||
  !message.channel.parent.name === "⛔Staff⛔" ||
  !message.channel.parent.name === "»»»»»『áthiktos』«««««" ||
  !message.channel.parent.name === "»»»»»『ypsós』«««««" ||
  !message.channel.parent.name === "»»»『kryfó-chorió』«««" ||
  !message.channel.parent.name === "»»»»»『ifaísteio』«««««") {
    message.channel.send(`:x: Cette commande est réservé au RP ${message.author} !!`)
      .then(msg => msg.delete({ timeout: 6000 }))
      .catch(console.error);
  } else {
    const member = message.guild.member(message.mentions.users.first());
    if (!member) {
      return message.channel.send(":x: Veuillez mentionner la personne contre laquelle vous vous défendez")
        .then(msg => msg.delete({ timeout: 8000 }))
        .catch(console.error);
    }
    if (!member.id || args[1]) {
      return message.channel.send(`:x: Veuillez respecter la syntaxe : \`${data.prefix}pvpA <mention>\``)
        .then(msg => msg.delete({ timeout: 8000 }))
        .catch(console.error);
    }
    if (message.author.id === member.id) {
      return message.channel.send(":x: Vous ne pouvez pas vous défendre contre vous même !")
        .then(msg => msg.delete({ timeout: 8000 }))
        .catch(console.error);
    }
    const Minimun = 20 + ((userInfo.EXP.level - 1) * 5);
    const Nombre = Minimun + 100;
    const Random = Math.floor(Math.random() * Nombre) + Minimun;
    const point = Random * userInfo.stats.Pv;
    const Point = Random + point;
    message.channel.send(`${message.author} se défend face à ${member} avec une puissance de ${Point}`);
    message.member.roles.add("739450278880870500");
    function Defence() {
      message.member.roles.remove("739450278880870500");
    }
    setTimeout(Defence, 10000);
  }
};

module.exports.help = {
  name: "pvp-d",
  aliases: ["pvpd"],
  category: "rp",
  description: "Permet de se défendre contre l'attaque d'un autre joueur avec une certaine puisance",
  usage: "<mention>",
  cooldown: 10,
  args: true
};

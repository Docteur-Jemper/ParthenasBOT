module.exports.run = async (bot, message, args, data, userInfo) => {
  message.delete();
  if (message.member.roles.cache.has("660624797105127437")) return message.channel.send(":x: Veuillez attendre quelque seconde !")
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
      return message.channel.send(":x: Veuillez mentionner la cible de votre attaque")
        .then(msg => msg.delete({ timeout: 8000 }))
        .catch(console.error);
    }
    if (!member.id || args[1]) {
      message.channel.send(`:x: Veuillez respecter la syntaxe : \`${data.prefix}pvpA <mention>\``)
        .then(msg => msg.delete({ timeout: 8000 }))
        .catch(console.error);
      return;
    }
    if (message.author.id === member.id) {
      message.channel.send(":x: Vous ne pouvez pas vous attaquer !")
        .then(msg => msg.delete({ timeout: 8000 }))
        .catch(console.error);
      return;
    }
    const Minimun = (userInfo.EXP.level - 1) * 5;
    const Nombre = Minimun + 100;
    const Random = Math.floor(Math.random() * Nombre) + Minimun;
    const point = Random * userInfo.stats.force;
    const Point = Random + point;
    message.channel.send(`${message.author} attaque ${member} avec une puissance de ${Point}`);
    message.member.roles.add("660624797105127437");
    function Attaque() {
      message.member.roles.remove("660624797105127437");
    }
    setTimeout(Attaque, 10000);
  }
};

module.exports.help = {
  name: "pvp-a",
  aliases: ["pvpa"],
  category: "rp",
  description: "Permet d'attaquer un autre joueur avec une certaine puisance",
  usage: "<mention>",
  cooldown: 10,
  args: true
};

const MOB = require("../../assest/Mob/nature");

module.exports.run = async (bot, message, args, data, userInfo) => {
  if (message.channel.parent.name === "»»»»»『áthiktos』«««««" ||
  message.channel.parent.name === "»»»»»『ypsós』«««««" ||
  message.channel.parent.name === "»»»『kryfó-chorió』«««" ||
  message.channel.parent.name === "»»»»»『ifaísteio』«««««") {
    return message.channel.send(`Il n'y a rien à fuire en ville ${message.author} !!`)
      .then(msg => msg.delete({ timeout: 6000 }))
      .catch(console.error);
  }
  if (!message.channel.parent.name === "Parthénas" ||
  !message.channel.parent.name === "»»»»»『áthiktos』«««««" ||
  !message.channel.parent.name === "»»»»»『ypsós』«««««" ||
  !message.channel.parent.name === "»»»『kryfó-chorió』«««" ||
  !message.channel.parent.name === "»»»»»『ifaísteio』«««««") {
    return message.channel.send(`:x: Cette commande est réservé au RP ${message.author} !!`)
      .then(msg => msg.delete({ timeout: 6000 }))
      .catch(console.error);
  }
  message.delete();
  for (let i=1 ; i<MOB.length ; i=i+1) {
    if (userInfo.MOB.mob === MOB[i].mob) {
      message.channel.send(`${message.author} fuit le ${dbUser.MOB.mob} !`);
      bot.updateUserInfo(member, {
        "users.$.MOB.mob": "Aucun",
        "users.$.MOB.Pv": 0,
        "users.$.MOB.PvBase": 0,
        "users.$.MOB.Niveau": "Aucun",
        "users.$.MOB.Force": 0
      });
      return;
    };
  };
  message.reply("Vous n'êtes pas ciblé par une créature, vous ne pouvez rien fuire !!")
    .then(msg => msg.delete({ timeout: 6000 }))
    .catch(console.error);
};

module.exports.help = {
  name: "fuite",
  aliases: ["fuit"],
  category: "pve",
  description: "Permet, si vous êtes observé ou attaqué par un mob, de le fuire pour ne pas ou plus le combattre.",
  cooldown: 8,
  args: false
};

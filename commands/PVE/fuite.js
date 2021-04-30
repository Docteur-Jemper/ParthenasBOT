module.exports.run = async (bot, message, args, settings, dbUser) => {
  if (dbUser.MOB.mob === "Loup" ||
  dbUser.MOB.mob === "Cerf" ||
  dbUser.MOB.mob === "Pripom" ||
  dbUser.MOB.mob === "Golime" ||
  dbUser.MOB.mob === "Croco" ||
  dbUser.MOB.mob === "Golem" ||
  dbUser.MOB.mob === "Gimille" ||
  dbUser.MOB.mob === "Wretch" ||
  dbUser.MOB.mob === "Varghulf" ||
  dbUser.MOB.mob === "Minotaur") {
    message.delete();
    message.channel.send(`${message.author} fuit le ${dbUser.MOB.mob} !`);
    bot.updateUserInfo(member, {
      "users.$.MOB.mob": "Aucun",
      "users.$.MOB.Pv": 0,
      "users.$.MOB.PvBase": 0,
      "users.$.MOB.Niveau": "Aucun",
      "users.$.MOB.Force": 0
    });
  } else {
    message.delete();
    message.reply("Vous n'êtes pas ciblé par une créature, vous ne pouvez rien fuire !!")
      .then(msg => msg.delete({ timeout: 6000 }))
      .catch(console.error);
  }
};

module.exports.help = {
  name: "fuite",
  aliases: ["fuit"],
  category: "pve",
  description: "Permet, si vous êtes observé ou attaqué par un mob, de le fuire pour ne pas ou plus le combattre.",
  cooldown: 8,
  args: false
};

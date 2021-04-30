module.exports.run = async (bot, message, args, data, userInfo) => {
  if (message.channel.id !== "568915973017567267") {
    message.channel.send("Veuillez faire cette commande dans le bon channel (<#568915973017567267>)")
      .then(msg => msg.delete({ timeout: 6000 }))
      .catch(console.error);
    return;
  }
  const member = message.guild.member(message.mentions.users.first());
  const monnaie = Number(args[1]);
  if (!member || !monnaie || monnaie<0 || args[2]) {
    message.channel.send(`:x: Veuillez respecter la syntaxe : \`${data.prefix}give-monnaie <mention> <montant>\``)
      .then(msg => msg.delete({ timeout: 8000 }))
      .catch(console.error);
    return;
  }
  const MentionUserInfo = await bot.getUser(member);
  if (!MentionUserInfo) {
    message.channel.send(":x: L'utilisateur n'existe pas !")
      .then(msg => msg.delete({ timeout: 8000 }))
      .catch(console.error);
    return;
  }
  if (userInfo.MONNAIE.monnaie < monnaie) {
    message.channel.send(":x: Vous n'avez pas assez d'argent !")
      .then(msg => msg.delete({ timeout: 10000 }))
      .catch(console.error);
    return;
  }

  bot.updateUserInfo(message.member, {
    "users.$.MONNAIE.monnaie": userInfo.MONNAIE.monnaie - monnaie
  });
  bot.updateUserInfo(member, {
    "users.$.MONNAIE.monnaie": MentionUserInfo.MONNAIE.monnaie + monnaie
  });

  message.channel.send(`${message.author} a donné ${monnaie} <:Money:568729372945678337> à ${member}`);
};

module.exports.help = {
  name: "give-monnaie",
  aliases: ["give-money", "givemonnaie", "givemoney"],
  category: "rp",
  description: "Permet de faire un don d'argent à un autre joueur.\n**(seulement dans <#568915973017567267>)**",
  usage: "<mention> <montant>",
  cooldown: 5,
  args: true
};

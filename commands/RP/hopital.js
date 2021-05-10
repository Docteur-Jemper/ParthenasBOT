module.exports.run = async (bot, message, args, data, userInfo) => {
  message.delete();
  if (message.channel.id === "693630513868439553" ||
      message.channel.id === "693630622668816454" ||
      message.channel.id === "694672699343241286" ||
      message.channel.id === "693630699588157441") {
    if (userInfo.MONNAIE.monnaie < 10) {
      return message.channel.send("Vous ne possédez pas les fonds nécessaires pour les frais d'hôspitalisation ! (10 <:Money:568729372945678337>)")
        .then(msg => msg.delete({ timeout: 8000 }))
        .catch(console.error);
    }
    if (userInfo.EXP.Pv === userInfo.EXP.PvActu) return message.channel.send(`Vous êtes en pleine forme ${message.author}, cela ne sert à rien de vouloir se soigner`)
      .then(msg => msg.delete({ timeout: 8000 }))
      .catch(console.error);
    async function Soin() {
      message.channel.send(`C'est bon, ${message.author} est guérie !`);
      message.member.roles.remove("694849411817275392");
      bot.updateUserInfo(message.member, {
        "users.$.EXP.PvActu": MentionUserInfo.EXP.Pv
      });
    }
    message.channel.send(`**${message.author} est pris charge et commence a être soigner, cela va prendre 2 petite minute !**`);
    message.channel.send("(Vous avez payé les frais d'hospitalisation s'élevant à 10 <:Money:568729372945678337>)")
      .then(msg => msg.delete({ timeout: 120000 }))
      .catch(console.error);
    message.member.roles.add("694849411817275392");
    const monnaie = 10;
    bot.updateUserInfo(message.member, {
      "users.$.MONNAIE.monnaie": userInfo.MONNAIE.monnaie - monnaie
    });
    setTimeout(Soin, 120000);
  } else {
    message.channel.send("(:x: Vous n'êtes pas dans un hôpital !!)")
      .then(msg => msg.delete({ timeout: 6000 }))
      .catch(console.error);
  }
};

module.exports.help = {
  name: "hopital",
  aliases: ["hôpital", "hpt"],
  category: "rp",
  description: "Permet de se faire soigner contre quelque pièces dans un hôpital.",
  cooldown: 120,
  args: false
};

const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args, data, userInfo) => {
  const member = message.guild.member(message.mentions.users.first());
  if (member) MentionUserInfo = await bot.getUser(member);
  message.delete();
  if (message.channel.parent.name === "Parthénas" ||
  message.channel.parent.name === "»»»»»『áthiktos』«««««" ||
  message.channel.parent.name === "»»»»»『ypsós』«««««" ||
  message.channel.parent.name === "»»»『kryfó-chorió』«««" ||
  message.channel.parent.name === "»»»»»『ifaísteio』«««««") {
    return message.channel.send(`:x: Cette commande ne doit pas entre fait dans les channels RP ${message.author} !!`)
      .then(msg => msg.delete({ timeout: 8000 }))
      .catch(console.error);
  }
  if (message.channel.id !== "568497273273843712" &&
  message.channel.id !== "687970971751022639" &&
  message.channel.id !== "568526562228436992") {
    return message.channel.send("Merci de faire cette commande dans <#568497273273843712> !")
      .then(msg => msg.delete({ timeout: 8000 }))
      .catch(console.error);
  }
  if (member) {
    const cExp = await MentionUserInfo.EXP.experience;
    const cNiv = await MentionUserInfo.EXP.level;
    const LEVEL = cNiv - 1;
    if (cNiv < 17) {
      const nextLevelUp = cNiv * cNiv + cNiv;
      const expManquant = nextLevelUp - cExp;
      const nivEmbeb = new MessageEmbed()
        .setAuthor(message.member.displayName, message.author.displayAvatarURL())
        .setColor("#27d200")
        .addField("Niveau de Maîtrise :", LEVEL, true)
        .addField("Point de Maîtrise :", cExp, true)
        .setFooter(`${expManquant} point de maîtrise requis pour le prochain niveau de Maîtrise`);
      return message.channel.send(nivEmbeb)
        .then(msg => msg.delete({ timeout: 600000 }))
        .catch(console.error);
    } else {
      if (cNiv === 17) {
        const nextLevel = 552;
        const expManquant = nextLevel - cExp;
        const nivEmbeb = new MessageEmbed()
          .setAuthor(message.member.displayName, message.author.displayAvatarURL())
          .setColor("#27d200")
          .addField("Niveau de Maîtrise :", LEVEL, true)
          .addField("Point de Maîtrise :", cExp, true)
          .setFooter(`${expManquant} point de maîtrise requis pour la prochaine Classe`);
        return message.channel.send(nivEmbeb)
          .then(msg => msg.delete({ timeout: 600000 }))
          .catch(console.error);
      }
      if (cNiv === 18) {
        const nextLevel = 1104;
        const Classe = "C";
      }
      if (cNiv === 19) {
        const nextLevel = 2208;
        const Classe = "B";
      }
      if (cNiv === 20) {
        const nextLevel = 4416;
        const Classe = "A";
      }
      if (cNiv === 21) {
        const Classe = "S";
        const nivEmbeb = new MessageEmbed()
          .setAuthor(message.author.username, message.author.displayAvatarURL())
          .setColor("#27d200")
          .addField("Classe actuel :", Classe, true)
          .addField("Niveau de Maîtrise :", "Max", true)
          .addField("Point de Maîtrise :", "Max", true)
          .setFooter("Vous avez atteind la Classe maximale");
        return message.channel.send(nivEmbeb)
          .then(msg => msg.delete({ timeout: 600000 }))
          .catch(console.error);
      }
      const expManquant = nextLevel - cExp;
      const nivEmbeb = new MessageEmbed()
        .setAuthor(message.member.displayName, message.author.displayAvatarURL())
        .setColor("#27d200")
        .addField("Classe actuel :", Classe, true)
        .addField("Niveau de Maîtrise :", LEVEL, true)
        .addField("Point de Maîtrise :", cExp, true)
        .setFooter(`${expManquant} point de maîtrise requis pour la prochaine Classe`);
      return message.channel.send(nivEmbeb)
        .then(msg => msg.delete({ timeout: 600000 }))
        .catch(console.error);
    }
  } else {
    const cExp = await userInfo.EXP.experience;
    const cNiv = await userInfo.EXP.level;
    const LEVEL = cNiv - 1;
    if (cNiv < 17) {
      const nextLevelUp = cNiv * cNiv + cNiv;
      const expManquant = nextLevelUp - cExp;
      const nivEmbeb = new MessageEmbed()
        .setAuthor(message.member.displayName, message.author.displayAvatarURL())
        .setColor("#27d200")
        .addField("Niveau de Maîtrise :", LEVEL, true)
        .addField("Point de Maîtrise :", cExp, true)
        .setFooter(`${expManquant} point de maîtrise requis pour le prochain niveau de Maîtrise`);
      return message.channel.send(nivEmbeb)
        .then(msg => msg.delete({ timeout: 600000 }))
        .catch(console.error);
    } else {
      if (cNiv === 17) {
        const nextLevel = 552;
        const expManquant = nextLevel - cExp;
        const nivEmbeb = new MessageEmbed()
          .setAuthor(message.member.displayName, message.author.displayAvatarURL())
          .setColor("#27d200")
          .addField("Niveau de Maîtrise :", LEVEL, true)
          .addField("Point de Maîtrise :", cExp, true)
          .setFooter(`${expManquant} point de maîtrise requis pour la prochaine Classe`);
        return message.channel.send(nivEmbeb)
          .then(msg => msg.delete({ timeout: 600000 }))
          .catch(console.error);
      }
      if (cNiv === 18) {
      const nextLevel = 1104;
      const Classe = "C";
      }
      if (cNiv === 19) {
      const nextLevel = 2208;
      const Classe = "B";
      }
      if (cNiv === 20) {
      const nextLevel = 4416;
      const Classe = "A";
      }
      if (cNiv === 21) {
        const Classe = "S";
        const nivEmbeb = new MessageEmbed()
          .setAuthor(message.author.username, message.author.displayAvatarURL())
          .setColor("#27d200")
          .addField("Classe actuel :", Classe, true)
          .addField("Niveau de Maîtrise :", "Max", true)
          .addField("Point de Maîtrise :", "Max", true)
          .setFooter("Vous avez atteind la Classe maximale");
        return message.channel.send(nivEmbeb)
          .then(msg => msg.delete({ timeout: 600000 }))
          .catch(console.error);
      }
      const expManquant = nextLevel - cExp;
      const nivEmbeb = new MessageEmbed()
        .setAuthor(message.member.displayName, message.author.displayAvatarURL())
        .setColor("#27d200")
        .addField("Classe actuel :", Classe, true)
        .addField("Niveau de Maîtrise :", LEVEL, true)
        .addField("Point de Maîtrise :", cExp, true)
        .setFooter(`${expManquant} point de maîtrise requis pour la prochaine Classe`);
      message.channel.send(nivEmbeb)
        .then(msg => msg.delete({ timeout: 600000 }))
        .catch(console.error);
    }
  }
};

module.exports.help = {
  name: "exp",
  aliases: ["xp", "experience"],
  category: "rp",
  description: "Renvoie votre niveau de Maîtrise et vos points de maîtrise.",
  usage: "<mention>",
  cooldown: 10,
  args: false
};

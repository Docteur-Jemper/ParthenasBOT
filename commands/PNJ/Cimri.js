/* eslint-disable no-redeclare */
/* eslint-disable no-var */
const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args, data, userInfo) => {
  message.delete();
  if (message.channel.id !== "568934603486920704") return message.channel.send("Mais Cimri ne se trouve pas ici ??")
    .then(msg => msg.delete({ timeout: 5000 }))
    .catch(console.error);
  if (!args.length) {
    if (message.member.roles.cache.get("741290028889538620")) {
      message.channel.send(":x: Attendez un peu avant de faire cette commande")
        .then(msg => msg.delete({ timeout: 4000 }))
        .catch(console.error);
    } else {
      message.channel.send(`${message.author} s'adresse à Cimri Para`);
      const Cimri = new MessageEmbed()
        .setColor("#27d200")
        .setTitle("Cimri Para :")
        .setImage("https://cdn.discordapp.com/attachments/568584015133540382/727125312978288751/Cimri_Para.jpg")
        .setDescription("Bien le bonjour ! Puis-je vous aider ?")
        .setFooter(`(${data.prefix}cimri <compte> \/ <parler>)`);
      message.channel.send(Cimri);
      message.member.roles.add("741290028889538620");
      function Blabla() {
        message.member.roles.remove("741290028889538620");
      }
      setTimeout(Blabla, 60000);
    }
    return;
  }
  let prix = 2500;
  if (dbProfile.Race === "Gobelin") prix = 1750;
  if (dbProfile.Race === "Thérianthrope") prix = 3000;
  if (args[0] === "compte") {
    if (userInfo.MONNAIE.monnaieB < 0) {
      message.channel.send(`${message.author} demande à Cimri Para des informations sur les comptes`);
      const CimriCompte = new MessageEmbed()
        .setColor("#27d200")
        .setTitle("Cimri Para :")
        .setImage("https://cdn.discordapp.com/attachments/568584015133540382/727125312978288751/Cimri_Para.jpg")
        .setDescription("Alors comme ça ouvrir un compte vous intéresse ?")
        .addField("vous sourit", `${message.author} c'est ça ?`)
        .addField("vous regarde de haut en bas", "Ouvrir un compte dans ma banque vous permettra de mettre votre argents entre de bonne main. En plus de cela, chaque jours vous toucherai des intérêts")
        .addField("se frotte les mains", `Cela ne vous coutera que ${prix} pièces pour l'ouverture et vous pourrez y déposer votre fortune.\nÊtes-vous intéressé ?`)
        .setFooter(`(${data.prefix}cimri <ouvrir>)`);
      message.channel.send(CimriCompte);
      return;
    }
    message.channel.send(`${message.author} s'adresse à Cimri Para pour consulter son compte`);
    const CimriCompte2 = new MessageEmbed()
      .setColor("#27d200")
      .setTitle("Cimri Para :")
      .setImage("https://cdn.discordapp.com/attachments/568584015133540382/727125312978288751/Cimri_Para.jpg")
      .setDescription("Alors, je vais vérifier ça...")
      .addField("va chercher les informations banquaire", "Alors alors alors...");
    if (userInfo.MONNAIE.monnaieB === 0) {
      CimriCompte2.addField("reviens vers vous", "Bon, vous disposer actuellement d'aucune pièce sur votre compte. Voulez-vous mettre de l'argents ?")
        .setFooter(`(${data.prefix}cimri <déposer> \/ <parler>)`);
    } else {
      CimriCompte2.addField("reviens vers vous", `Bon, vous disposer actuellement de ${userInfo.MONNAIE.monnaieB} pièces sur votre compte. Voulez-vous retirer ou mettre de l'argents ?`)
        .setFooter(`(${data.prefix}cimri <déposer> \/ <retirer> \/ <parler>)`);
    }
    message.channel.send(CimriCompte2);
    return;
  }
  if (args[0] === "ouvrir") {
    if (userInfo.MONNAIE.monnaieB >= 0) {
      message.channel.send(":x: Vous disposez déjà d'un compte")
        .then(msg => msg.delete({ timeout: 4000 }))
        .catch(console.error);
      return;
    }
    if (userInfo.MONNAIE.monnaie >= prix) {
      message.channel.send(`${message.author} souhaite ouvrir un compte au près de Cimri Para sortant les ${prix} pièces`);
      const monnaie = prix;
      bot.updateUserInfo(member, {
        "users.$.MONNAIE.monnaie": userInfo.MONNAIE.monnaie - prix,
        "users.$.MONNAIE.monnaieB": 0
      });
      const CimriOuvrir = new MessageEmbed()
        .setColor("#27d200")
        .setTitle("Cimri Para :")
        .setImage("https://cdn.discordapp.com/attachments/568584015133540382/727125312978288751/Cimri_Para.jpg")
        .setDescription("Et bien c'est d'accord ! Je vous fait ça !")
        .addField(`vous sourit prenant les ${prix} pièces`, "Alors alors alors...")
        .addField("remplit quelque paperasse", "Et voilà, votre compte est désormé ouvert ! Si jamais vous souhaiter retirer ou mettre de l'argent sur celui-ci, il suiffira de venir me voir")
        .addField("vous sert la main", "Ravi de faire affaire avec vous")
        .setFooter(`(${data.prefix}cimri <déposer> \/ <compte> \/ <parler>)`);
      message.channel.send(CimriOuvrir);
    } else {
      message.channel.send(`${message.author} souhaite ouvrir un compte au près de Cimri Para`);
      const CimriOuvrirRater = new MessageEmbed()
        .setColor("#27d200")
        .setTitle("Cimri Para :")
        .setImage("https://cdn.discordapp.com/attachments/568584015133540382/727125312978288751/Cimri_Para.jpg")
        .setDescription("Et bien c'est d'accord ! Je vous fait ça !")
        .addField(`vous sourit mais s'apperçois que vous n'avez pas les ${prix} pièces`, "Euuhhh...")
        .addField("son sourire se brise", "Mais il me faut l'argents pour ouvrir le compte ! Il vous en manque !")
        .addField("soupir", "Revenez me voir avec les fonds nécessaire..")
        .setFooter(`(${data.prefix}cimri <ouvrir> \/ <parler>)`);
      message.channel.send(CimriOuvrirRater);
    }
    return;
  }
  if (args[0] === "déposer") {
    if (userInfo.MONNAIE.monnaieB < 0) {
      message.channel.send(":x: Vous ne disposez d'aucun compte")
        .then(msg => msg.delete({ timeout: 4000 }))
        .catch(console.error);
      return;
    }
    const monnaie = Number(args[1]);
    if (!monnaie || args[2]) {
      return message.channel.send(`:x: Veuillez respecter la syntaxe : \`${data.prefix}cimri déposer <nombre>\``)
        .then(msg => msg.delete({ timeout: 8000 }))
        .catch(console.error);
    }
    if (userInfo.MONNAIE.monnaie < monnaie) {
      return message.channel.send(":x: Vous n'avez pas assez d'argent !")
        .then(msg => msg.delete({ timeout: 8000 }))
        .catch(console.error);
    }
    message.channel.send(`${message.author} demande au près de Cimri Para si il pourrait déposer ${monnaie} pièce`);
    const BanqueD = new MessageEmbed()
      .setColor("#27d200")
      .setTitle("Cimri Para :")
      .setImage("https://cdn.discordapp.com/attachments/568584015133540382/727125312978288751/Cimri_Para.jpg")
      .setDescription("Vous voulez déposer du coup !")
      .addField("prend les pièces que vous lui donner et les comptes", `${monnaie} pièces !`)
      .addField("vous sourit", "Je vous met ça sur votre compte")
      .addField("fait un allez-retour pour déposer les pièces", `Vous êtes donc maintenant à ${userInfo.MONNAIE.monnaieB + monnaie} pièces sur votre compte\nN'hésitez pas à revenir me voir !`)
      .setFooter(`(${data.prefix}cimri <compte> \/ <parler>)`);
    message.channel.send(BanqueD);
    bot.updateUserInfo(member, {
      "users.$.MONNAIE.monnaie": userInfo.MONNAIE.monnaie - monnaie,
      "users.$.MONNAIE.monnaieB": userInfo.MONNAIE.monnaieB + monnaie
    });
    return;
  }
  if (args[0] === "retirer") {
    if (userInfo.MONNAIE.monnaieB < 0) {
      message.channel.send(":x: Vous ne disposez d'aucun compte")
        .then(msg => msg.delete({ timeout: 4000 }))
        .catch(console.error);
      return;
    }
    const monnaie = Number(args[1]);
    if (!monnaie || args[2]) {
      return message.channel.send(`:x: Veuillez respecter la syntaxe : \`${data.prefix}cimri retirer <nombre>\``)
        .then(msg => msg.delete({ timeout: 8000 }))
        .catch(console.error);
    }
    if (userInfo.MONNAIE.monnaieB < monnaie) {
      message.delete({ timeout: 5000 });
      return message.channel.send(":x: Vous n'avez pas assez d'argent sur votre compte !")
        .then(msg => msg.delete({ timeout: 8000 }))
        .catch(console.error);
    }
    message.channel.send(`${message.author} veux retirer ${monnaie} pièce au près de Cimri Para`);
    const BanqueR = new MessageEmbed()
      .setColor("#27d200")
      .setTitle("Cimri Para :")
      .setImage("https://cdn.discordapp.com/attachments/568584015133540382/727125312978288751/Cimri_Para.jpg")
      .setDescription("Vous voulez retirer c'est ça ?")
      .addField("vous sourit", "Je vais vous chercher ça")
      .addField("va chercher l'argent sur votre compte", `Je vous ramène vos ${monnaie} pièces !`)
      .setFooter(`(${data.prefix}cimri <compte> \/ <parler>)`);
    if (userInfo.MONNAIE.monnaieB - monnaie === 0) BanqueR.addField("vous les tend", "Il ne reste plus aucune pièces sur votre compte maintenant\nN'hésitez pas à revenir me voir !");
    else BanqueR
      .addField("vous les tend", `Il reste ${userInfo.MONNAIE.monnaieB - monnaie} pièces sur votre compte maintenant\nN'hésitez pas à revenir me voir !`);
    message.channel.send(BanqueR);
    bot.updateUserInfo(member, {
      "users.$.MONNAIE.monnaie": userInfo.MONNAIE.monnaie + monnaie,
      "users.$.MONNAIE.monnaieB": userInfo.MONNAIE.monnaieB - monnaie
    });
    return;
  }
  if (args[0] === "parler") {
    const blabla = args[1];
    if (!blabla) {
      message.channel.send(`${message.author} s'adresse à Cimri Para souhaitant simplement discuter`);
      const parlez = new MessageEmbed()
        .setColor("#27d200")
        .setTitle("Cimri Para :")
        .setImage("https://cdn.discordapp.com/attachments/568584015133540382/727125312978288751/Cimri_Para.jpg")
        .setDescription("Alors comme ça vous voulez juste parler ?")
        .addField("sourit légèrement", "Vous avez l'air sympathique")
        .addField("se gratte la tête", "Je n'est pas grand chose à raconter mais n'hésiter pas à revenir faire la causette avec moi une prochaine fois, j'aurais peut-être quelque chose pour vous")
        .setFooter(`(${data.prefix}cimri <compte>`);
      message.channel.send(parlez);
      return;
    }
    if (!args[2]) {
      if (blabla === "(secret)") {
        message.channel.send(`${message.author} s'adresse à Cimri Para sur le sujet d'un potenciel secret`);
        const parlez = new MessageEmbed()
          .setColor("#27d200")
          .setTitle("Cimri Para :")
          .setImage("https://cdn.discordapp.com/attachments/568584015133540382/727125312978288751/Cimri_Para.jpg")
          .addField("rigole un bon coup", "Alors comme ça tu veux savoir un secret ?")
          .addField("chuchotte", "Je n'en ai pas ! Mais bien tenté")
          .setFooter(`(${data.prefix}cimri <compte>`);
        message.channel.send(parlez);
        return;
      }
    }
  }
  message.channel.send(`${message.author} tente de demander quelque chose à Cimri Para`)
    .then(msg => msg.delete({ timeout: 10000 }))
    .catch(console.error);
  message.channel.send("**Cimri Para** : ?? **vous regarde bizarrement n'aillant pas compris**")
    .then(msg => msg.delete({ timeout: 10000 }))
    .catch(console.error);
};

module.exports.help = {
  name: "cimri",
  aliases: "",
  category: "pnj",
  description: "Il s'agit de la commande pour parler à `Cimri Para`\n(description de se PNJ disponible dans <#568584015133540382>)",
  cooldown: 6,
  args: false
};

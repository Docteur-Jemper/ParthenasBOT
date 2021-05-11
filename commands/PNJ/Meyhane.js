const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args, data, userInfo) => {
  message.delete();
  if (message.channel.id !== "568934801910923295") return message.channel.send("Mais Meyhane ne se trouve pas ici ??")
    .then(msg => msg.delete({ timeout: 5000 }))
    .catch(console.error);
  if (!args.length) {
    if (message.member.roles.cache.get("741290028889538620")) {
      message.channel.send(":x: Attendez un peu avant de faire cette commande")
        .then(msg => msg.delete({ timeout: 4000 }))
        .catch(console.error);
    } else {
      message.channel.send(`${message.author} s'adresse à Meyhane Lokali`);
      const Meyhane = new MessageEmbed()
        .setColor("#27d200")
        .setTitle("Meyhane Lokali :")
        .setImage("https://cdn.discordapp.com/attachments/568584015133540382/727125373329997905/Meyhane_Lokali.jpg")
        .setDescription("Bien le bonjour ! Que puis-je faire pour vous ?")
        .setFooter(`(${data.prefix}meyhane <commander> \/ <parler>)`);
      message.channel.send(Meyhane);
      message.member.roles.add("741290028889538620");
      function Blabla() {
        message.member.roles.remove("741290028889538620");
      }
      setTimeout(Blabla, 60000);
    }
    return;
  }
  if (args[0] === "commander") {
    const commandeName = args[1];
    if (!commandeName) {
      message.channel.send(`${message.author} demande à Meyhane Lokali si c'est possible de commander quelque chose`);
      const MeyhaneCommande = new MessageEmbed()
        .setColor("#27d200")
        .setTitle("Meyhane Lokali :")
        .setImage("https://cdn.discordapp.com/attachments/568584015133540382/727125373329997905/Meyhane_Lokali.jpg")
        .setDescription("Il est tout à fait possible de commander")
        .addField("affiche un grand sourire", "Que voulez vous ?")
        .addField("vous tend la carte", "__***Carte :***__\n__Boisson :__\nHypocras :⠀⠀15 pièces\nHydromel :⠀⠀3 pièces\nVin :⠀⠀⠀⠀⠀⠀9 pièces\nClaret :⠀⠀ ⠀⠀6 pièces\nBière :⠀⠀⠀⠀⠀5 pièces\nCervoise :⠀ ⠀4 pièces\nSaugee :⠀⠀⠀18 pièces\n__En-cas :__\nTruc1 :⠀⠀⠀99 pièces\nTruc2 :⠀⠀⠀99 pièces\nTruc3 :⠀⠀⠀99 pièces\nTruc4 :⠀⠀⠀99 pièces\nTruc5 :⠀⠀⠀99 pièces\nTruc6 :⠀⠀⠀99 pièces\nTruc7 :⠀⠀⠀99 pièces")
        .setFooter(`(${data.prefix}meyhane <commander> <nom_de_la_commande>)`);
      message.channel.send(MeyhaneCommande);
    } else {
      let monnaie = false;
      if (commandeName === "Hypocras") {
        monnaie = 15;
      }
      if (commandeName === "Hydromel") {
        monnaie = 3;
      }
      if (commandeName === "Vin") {
        monnaie = 9;
      }
      if (commandeName === "Claret") {
        monnaie = 6;
      }
      if (commandeName === "Bière") {
        monnaie = 5;
      }
      if (commandeName === "Cervoise") {
        monnaie = 4;
      }
      if (commandeName === "Saugee") {
        monnaie = 18;
      }
      if (commandeName === "Truc1") {
        monnaie = 99;
      }
      if (commandeName === "Truc2") {
        monnaie = 99;
      }
      if (commandeName === "Truc3") {
        monnaie = 99;
      }
      if (commandeName === "Truc4") {
        monnaie = 99;
      }
      if (commandeName === "Truc5") {
        monnaie = 99;
      }
      if (commandeName === "Truc6") {
        monnaie = 99;
      }
      if (commandeName === "Truc7") {
        monnaie = 99;
      }
      if (monnaie) {
        if (userInfo.MONNAIE.monnaie >= monnaie) {
          bot.updateUserInfo(member, {
            "users.$.MONNAIE.monnaie": userInfo.MONNAIE.monnaie - monnaie
          });
          message.channel.send(`${message.author} commande à Meyhane Lokali : \`${commandeName}\``);
          const MeyhaneCommande2 = new MessageEmbed()
            .setColor("#27d200")
            .setTitle("Meyhane Lokali :")
            .setImage("https://cdn.discordapp.com/attachments/568584015133540382/727125373329997905/Meyhane_Lokali.jpg")
            .setDescription("C'est compris, je vous ramène ça !")
            .addField(`va chercher votre commande et vous sert donc votre ${commandeName}`, "Voilà pour vous")
            .setFooter(`(${data.prefix}meyhane <parler>)`);
          return message.channel.send(MeyhaneCommande2);
        }
        return message.channel.send(":x: Vous n'avez pas assez d'argent !")
          .then(msg => msg.delete({ timeout: 4000 }))
          .catch(console.error);
      }
    }
  }
  if (args[0] === "parler") {
    const blabla = args[1];
    if (!blabla) {
      message.channel.send(`${message.author} s'adresse à Meyhane Lokali souhaitant simplement discuter`);
      const parlez = new MessageEmbed()
        .setColor("#27d200")
        .setTitle("Meyhane Lokali :")
        .setImage("https://cdn.discordapp.com/attachments/568584015133540382/727125373329997905/Meyhane_Lokali.jpg")
        .addField("vous regarde avec un très grand sourire", "Je serais ravis de parler avec vous !")
        .addField("sautille prèsque sûr place", "Je n'est pas vraiment d'idée de conversation, je serais ravie d'en parler avec vous si vous en avez une.\nN'hésitez pas à revenir me voir !")
        .setFooter(`(${data.prefix}meyhane <commander>`);
      message.channel.send(parlez);
      return;
    }
    if (!args[2]) {
      if (blabla === "(secret)") {
        message.channel.send(`${message.author} s'adresse à Meyhane Lokali sur le sujet d'un potenciel secret`);
        const parlez = new MessageEmbed()
          .setColor("#27d200")
          .setTitle("Meyhane Lokali :")
          .setImage("https://cdn.discordapp.com/attachments/568584015133540382/727125373329997905/Meyhane_Lokali.jpg")
          .addField("rigole un bon coup", "Alors comme ça vous croyer que je possaide un secret ?")
          .addField("chuchotte", "Je n'en ai pas ! Mais si je viens à en apprendre un je vous le ferait savoir")
          .setFooter(`(${data.prefix}hanci <réserver>`);
        message.channel.send(parlez);
        return;
      }
    }
  }
  message.channel.send(`${message.author} tente de demander quelque chose à Meyhane Lokali`)
    .then(msg => msg.delete({ timeout: 10000 }))
    .catch(console.error);
  message.channel.send("**Meyhane Lokali** : ?? **vous regarde bizarrement n'aillant pas compris**")
    .then(msg => msg.delete({ timeout: 10000 }))
    .catch(console.error);
};

module.exports.help = {
  name: "meyhane",
  aliases: "",
  category: "pnj",
  description: "Il s'agit de la commande pour parler à `Meyhane Lokali`\n(description de se PNJ disponible dans <#568584015133540382>)",
  cooldown: 6,
  args: false
};

/* eslint-disable no-redeclare */
/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
const { MessageEmbed, Collection } = require("discord.js");

module.exports.run = async (bot, message, args, data, userInfo) => {
  message.delete();
  if (message.channel.id !== "744971197833281676") return message.channel.send("Mais Hanci ne se trouve pas ici ??")
    .then(msg => msg.delete({ timeout: 5000 }))
    .catch(console.error);
  if (!args.length) {
    if (message.member.roles.cache.get("741290028889538620")) {
      message.channel.send(":x: Attendez un peu avant de faire cette commande")
        .then(msg => msg.delete({ timeout: 4000 }))
        .catch(console.error);
    } else {
      message.channel.send(`${message.author} s'adresse à Hanci Sicak`);
      const Hanci = new MessageEmbed()
        .setColor("#27d200")
        .setTitle("Hanci Sicak :")
        .setImage("https://cdn.discordapp.com/attachments/568584015133540382/727125499695988807/Hanci_Sicak.jpg")
        .setDescription("Bonjour.. Comment puis-je vous aider ?")
        .setFooter(`(${data.prefix}hanci <réserver> \/ <parler>)`);
      message.channel.send(Hanci);
      message.member.roles.add("741290028889538620");
      function Blabla() {
        message.member.roles.remove("741290028889538620");
      }
      setTimeout(Blabla, 60000);
    }
    return;
  }
  if (args[0] === "réserver") {
    if (args[1] === "accepte") {
      if (bot.channels.cache.find(channel => channel.name === `𝐂𝐡𝐚𝐦𝐛𝐫𝐞-${message.member.displayName.toLowerCase()}`)) {
        return message.channel.send(":x: Vous avez déjà une chambre")
          .then(msg => msg.delete({ timeout: 8000 }))
          .catch(console.error);
      }
      if (userInfo.MONNAIE.monnaie < 50) {
        return message.channel.send(":x: Vous n'avez pas assez d'argent !")
          .then(msg => msg.delete({ timeout: 8000 }))
          .catch(console.error);
      }
      message.channel.send(`${message.author} signe de son nom le document de Hanci Sicak lui donnant également les 50 pièces`);
      const HanciRéserveAccepte = new MessageEmbed()
        .setColor("#27d200")
        .setTitle("Hanci Sicak :")
        .setImage("https://cdn.discordapp.com/attachments/568584015133540382/727125499695988807/Hanci_Sicak.jpg")
        .addField("récupère donc l'argent ainsi que le papier et le lis", `Vous êtes donc ${message.author} !`)
        .addField("se retourne pour selectionner une clés", "Voilà donc votre chambre, demain à la même heure vous n'y aurais plus accès.")
        .addField("vous sourit", "Merci d'avoir pris une chambre dans notre établissement")
        .setFooter(`(${data.prefix}hanci <parler>)`);
      message.channel.send(HanciRéserveAccepte);
      const monnaie = 50;
      bot.updateUserInfo(member, {
        "users.$.MONNAIE.monnaie": userInfo.MONNAIE.monnaie - monnaie
      });

      if (!bot.cooldowns.has(message.author.name)) {
        bot.cooldowns.set(message.author.name, new Collection());
      }
      const timeNow = Date.now();
      const timeStamps = bot.cooldowns.get(message.author.name);
      const cdAmount = 86400000;
      message.channel.clone(undefined, true, true)
        .then(async clone => {
          await clone.setParent(message.channel.parent);
          await clone.setName(`𝐂𝐡𝐚𝐦𝐛𝐫𝐞-${message.member.displayName}`);
          setTimeout(() => clone.delete(), cdAmount);
        })
        .catch(console.error);
      timeStamps.set(message.author.id, timeNow);
      setTimeout(() => timeStamps.delete(message.author.id), cdAmount);
    } else {
      if (bot.channels.cache.find(channel => channel.name === `𝐂𝐡𝐚𝐦𝐛𝐫𝐞-${message.displayName.toLowerCase()}`)) {
        if (!bot.cooldowns.has(message.author.name)) {
          bot.cooldowns.set(message.author.name, new Collection());
        }
        const timeNow = Date.now();
        const timeStamps = bot.cooldowns.get(message.author.name);
        const cdAmount = 86400000;

        if (timeStamps.has(message.author.id)) {
          const cdExpirationTime = timeStamps.get(message.author.id) + cdAmount;
          if (timeNow < cdExpirationTime) {
            const timeLeftS = (cdExpirationTime - timeNow) / 1000;
            const Temps = `${Math.round(timeLeftS.toFixed(0) / 3600 * 100) / 100}`;
            var Time = `${Temps}h`;
            var heure = Temps;
            var minute = false;
            if (Temps.includes(".")) {
              var heure = Temps.split(".")[0];
              var minute = Math.round(Number(Temps.split(".")[1]) * 60 / 100);
            }
            if (minute) {
              var Time = `${heure}h${minute}`;
            }
            if (heure === "0") {
              var Time = `${minute} minutes`;
            }
            message.channel.send(`${message.author} demande à Hanci Sicak des infos sur sa réservation`);
            const HanciDejaChambre = new MessageEmbed()
              .setColor("#27d200")
              .setTitle("Hanci Sicak :")
              .setImage("https://cdn.discordapp.com/attachments/568584015133540382/727125499695988807/Hanci_Sicak.jpg")
              .setDescription(`Bien le bonjour ${message.member.displayName}`)
              .addField("récupère les papier de votre réservation", `Il vous reste encore environ ${Time} avant la fin de votre réservation`)
              .addField("vous sourit", "Merci d'avoir pris une chambre dans notre établissement")
              .setFooter(`(${data.prefix}hanci <parler>)`);
            message.channel.send(HanciDejaChambre);
          }
        }
        return;
      }
      message.channel.send(`${message.author} demande à Hanci Sicak comment on peut réserver une chambre ici`);
      const HanciRéserve = new MessageEmbed()
        .setColor("#27d200")
        .setTitle("Hanci Sicak :")
        .setImage("https://cdn.discordapp.com/attachments/568584015133540382/727125499695988807/Hanci_Sicak.jpg")
        .setDescription("Oh, alors pour réserver une chambre dans cette établissement il y a quelque petite chose à savoir.")
        .addField("vous sourit", "En se qui conserne nos tarifs, ils s'élèves à 50 pièces pour 24h")
        .addField("farfouille dans quelque papiers", "Il me faudra votre nom pour l'attribuer à votre chambre")
        .addField("se redresse un peu vous tendant un papier", "Il vous suffit simplement d'accepter ces conditions en signant de votre nom")
        .setFooter(`(${data.prefix}hanci <réserver> <accepte> \/ <parler>)`);
      message.channel.send(HanciRéserve);
    }
    return;
  }
  if (args[0] === "parler") {
    const blabla = args[1];
    if (!blabla) {
      message.channel.send(`${message.author} s'adresse à Hanci Sicak souhaitant simplement discuter`);
      const parlez = new MessageEmbed()
        .setColor("#27d200")
        .setTitle("Hanci Sicak :")
        .setImage("https://cdn.discordapp.com/attachments/568584015133540382/727125499695988807/Hanci_Sicak.jpg")
        .setDescription("Vous souhaitez discuter avec moi ?")
        .addField("sourit légèrement", "Vous avez l'air bien sympathique")
        .addField("vient fermer les yeux", "Je n'est pas grand chose à dire vous savez mais n'hésiter pas à revenir discuter avec moi une prochaine fois, j'aurais peut-être quelque chose pour vous")
        .setFooter(`(${data.prefix}hanci <réserver>`);
      message.channel.send(parlez);
      return;
    }
    if (!args[2]) {
      if (blabla === "(secret)") {
        message.channel.send(`${message.author} s'adresse à Hanci Sicak sur le sujet d'un potenciel secret`);
        const parlez = new MessageEmbed()
          .setColor("#27d200")
          .setTitle("Hanci Sicak :")
          .setImage("https://cdn.discordapp.com/attachments/568584015133540382/727125499695988807/Hanci_Sicak.jpg")
          .addField("rigole un bon coup", "Alors comme ça vous croyer que je possaide un secret ?")
          .addField("chuchotte", "Je n'en ai pas ! Mais si je viens à en apprendre un je vous le ferait savoir")
          .setFooter(`(${data.prefix}hanci <réserver>`);
        message.channel.send(parlez);
        return;
      }
    }
  }
  message.channel.send(`${message.author} tente de demander quelque chose à Hanci Sicak`)
    .then(msg => msg.delete({ timeout: 10000 }))
    .catch(console.error);
  message.channel.send("**Hanci Sicak** : ?? **vous regarde bizarrement n'aillant pas compris**")
    .then(msg => msg.delete({ timeout: 10000 }))
    .catch(console.error);
};

module.exports.help = {
  name: "hanci",
  aliases: "",
  category: "pnj",
  description: "Il s'agit de la commande pour parler à `Hanci Sicak`\n(description de se PNJ disponible dans <#568584015133540382>)",
  cooldown: 6,
  args: false
};

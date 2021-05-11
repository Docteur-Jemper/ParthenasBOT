/* eslint-disable no-redeclare */
/* eslint-disable no-var */
const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args, data, userInfo) => {
  const shop = require("../../assest/shop/shopC.json");
  message.delete();
  if (message.channel.id !== "569254334794039309")
    return message.channel.send("Mais Crooks ne se trouve pas ici ??")
      .then((msg) => msg.delete({ timeout: 5000 }))
      .catch(console.error);
  if (!args.length) {
    if (message.member.roles.cache.get("741290028889538620")) {
      message.channel.send(":x: Attendez un peu avant de faire cette commande")
        .then((msg) => msg.delete({ timeout: 4000 }))
        .catch(console.error);
    } else {
      message.channel.send(`${message.author} s'adresse à Crooks Iksir`);
      const Crooks = new MessageEmbed()
        .setColor("#27d200")
        .setTitle("Crooks Iksir :")
        .setImage("https://cdn.discordapp.com/attachments/568584015133540382/743440231876919366/Crooks_Iksir.jpg")
        .setDescription("Bonjour... Êtes-vous intéressé par un elixir ?")
        .setFooter(`(${data.prefix}crooks <shop> \/ <parler>)`);
      message.channel.send(Crooks);
      message.member.roles.add("741290028889538620");
      function Blabla() {
        message.member.roles.remove("741290028889538620");
      }
      setTimeout(Blabla, 60000);
    }
    return;
  }
  if (args[0] === "shop") {
    const CrooksShop = new MessageEmbed()
      .setColor("#27d200")
      .setTitle("Crooks Iksir :")
      .setImage("https://cdn.discordapp.com/attachments/568584015133540382/743440231876919366/Crooks_Iksir.jpg")
      .setDescription("Vous êtes donc intéressé par mes produits ?")
      .addField("se frotte discrètement les mains", "Regardez donc ce que je possède !")
      .addField("vient donc vous montrer ses possessions", "**Contenu de son shop :**")
      .setFooter(`(${data.prefix}crooks <shop> [info] <nom_de_l'objet> \/ <parler>)`);
    const CrooksShopInfo = new MessageEmbed()
      .setColor("#27d200")
      .setTitle("Crooks Iksir :")
      .setImage("https://cdn.discordapp.com/attachments/568584015133540382/743440231876919366/Crooks_Iksir.jpg")
      .setDescription("Je vais vous expliquer ça")
      .setFooter(`(${data.prefix}crooks <shop> <nom_de_l'objet> \/ <parler>)`);

    if (args[1] === "info") {
      const Z = args.splice(0, 2);
      const q = args.join(" ");
      const position = shop.map((e) => e.name.toLowerCase()).indexOf(q.toLowerCase());
      if (q && position == -1)
        message.reply("cette objet n'existe pas !")
          .then((msg) => msg.delete({ timeout: 10000 }))
          .catch(console.error);
      if (q && position !== -1) {
        const item = shop[position];
        CrooksShopInfo.addField("se racle la gorge", `Je vend mon produit \`${item.name}\` pour ${item.prix} pièces, ${item.nbrItem1} ${item.item1} et ${item.nbrItem2} ${item.item2}\n${item.description}`);
        message.channel.send(`${message.author} demande à Crooks Iksir des informations sur \`${item.name}\``);
        message.channel.send(CrooksShopInfo);
      } else {
        message.channel.send(":x: Il faut inquiquer l'objet")
          .then((msg) => msg.delete({ timeout: 10000 }))
          .catch(console.error);
      }
    } else {
      let q = false;
      let position = false;
      if (args[1]) {
        const Z = args.shift();
        q = args.join(" ");
        position = shop.map((e) => e.name.toLowerCase()).indexOf(q.toLowerCase());
      }
      if (q && position !== -1) {
        try {
          const item = shop[position];
          message.channel.send(`${message.author} demande à Crooks Iksir si il peut acheter \`${item.name}\``);
          message.channel.send(`**Crooks Iksir** : Voulez vous acheter \`${item.name}\` pour ${item.prix}<:Money:568729372945678337>, ${item.nbrItem1} ${item.item1} et ${item.nbrItem2} ${item.item2} ?`);
          message.channel.send("(Répondre: `oui` pour confirmer)")
            .then((msg) => msg.delete({ timeout: 5000 }))
            .catch(console.error);
          const filter = (m) => message.author.id === m.author.id;
          const userEntry = await message.channel.awaitMessages(filter, { max: 1, time: 10000, errors: ["time"] });
          const role = message.guild.roles.cache.get(item.role).rawPosition;
          const Rolex2 = message.guild.roles.cache.find(r => r.rawPosition === role - 1).id;
          const Rolex3 = message.guild.roles.cache.find(r => r.rawPosition === role - 2).id;
          if (userEntry.first().content.toLowerCase() === "oui") {
            function Max() {
              message.channel.send("**Crooks Iksir** : Je vois que vous avez déjà les poches remplit de se produit.\nJe ne peut pas vous en vendre plus !")
                .then((msg) => msg.delete({ timeout: 300000 }))
                .catch(console.error);
            }
            if (userInfo.MONNAIE.monnaie >= item.prix) {
              if (message.member.roles.cache.get(item.role)) {
                if (role === "748602665470132418" || role === "748602737498914956") return Max();
                if (message.member.roles.cache.get(Rolex2)) {
                  message.member.roles.remove(Rolex2);
                  message.member.roles.add(Rolex3);
                } else {
                  if (message.member.roles.cache.get(Rolex3)) {
                    return Max();
                  } else message.member.roles.add(Rolex2);
                }
              } message.member.roles.add(item.role);
              // bot.updateUserInfo(member, {
              //   "users.$.MONNAIE.monnaie": userInfo.MONNAIE.monnaie - item.prix
              // });
              message.channel.send(`${message.author} achète donc le \`${item.name}\` pour ${item.prix}<:Money:568729372945678337>, ${item.nbrItem1} ${item.item1} et ${item.nbrItem2} ${item.item2}`)
                .then((msg) => msg.delete({ timeout: 300000 }))
                .catch(console.error);
              message.channel.send("**Crooks Iksir** : Un grand merci pour votre achat !")
                .then((msg) => msg.delete({ timeout: 300000 }))
                .catch(console.error);
            } else {
              message.channel.send("**Crooks Iksir** : Mais..? Vous n'avez pas assez d'argent !\n**soupir**\nrevenez une prochaine fois..")
                .then((msg) => msg.delete({ timeout: 300000 }))
                .catch(console.error);
            }
          }
        } catch (e) {
          message.channel.send("**Crooks Iksir** : Bon bah cela sera pour une prochaine fois..")
            .then((msg) => msg.delete({ timeout: 300000 }))
            .catch(console.error);
          message.channel.send("(:x: Achat annulé. Merci de confirmer votre achat en répondant `oui` la prochaine fois)")
            .then((msg) => msg.delete({ timeout: 8000 }))
            .catch(console.error);
        }
        const messageOUI = message.member.lastMessage;
        setTimeout(() => { if ( messageOUI.content === "oui") messageOUI.delete() }, 5000);
      } else {
        shop.map((e) => CrooksShop.addField(e.name, `${e.prix} pièces\n${e.nbrItem1} ${e.item1}\n${e.nbrItem2} ${e.item2}`, true));
        message.channel.send(`${message.author} demande à Crooks Iksir ce qu'il possède dans son shop`);
        message.channel.send(CrooksShop);
      }
    }
    return;
  }
  if (args[0] === "parler") {
    const blabla = args[1];
    if (!blabla) {
      message.channel.send(`${message.author} s'adresse à Crooks Iksir souhaitant simplement discuter`);
      const parlez = new MessageEmbed()
        .setColor("#27d200")
        .setTitle("Crooks Iksir :")
        .setImage("https://cdn.discordapp.com/attachments/568584015133540382/743440231876919366/Crooks_Iksir.jpg")
        .setDescription("Alors comme ça vous voulez juste parler ?")
        .addField("sourit légèrement", "Vous avez l'air sympathique")
        .addField("se gratte la tête",
          "Je n'est pas grand chose à raconter mais n'hésiter pas à revenir faire la causette avec moi une prochaine fois, j'aurais peut-être quelque chose pour vous")
        .setFooter(`(${data.prefix}crooks <compte>`);
      message.channel.send(parlez);
      return;
    }
    if (!args[2]) {
      if (blabla === "(secret)") {
        message.channel.send(`${message.author} s'adresse à Crooks Iksir sur le sujet d'un potenciel secret`);
        const parlez = new MessageEmbed()
          .setColor("#27d200")
          .setTitle("Crooks Iksir :")
          .setImage("https://cdn.discordapp.com/attachments/568584015133540382/743440231876919366/Crooks_Iksir.jpg")
          .addField("rigole un bon coup", "Alors comme ça tu veux savoir un secret ?")
          .addField("chuchotte", "Je n'en ai pas ! Mais bien tenté")
          .setFooter(`(${data.prefix}crooks <compte>`);
        message.channel.send(parlez);
        return;
      }
    }
  }
  message.channel.send(`${message.author} tente de demander quelque chose à Crooks Iksir`)
    .then((msg) => msg.delete({ timeout: 10000 }))
    .catch(console.error);
  message.channel.send("**Crooks Iksir** : ?? **vous regarde bizarrement n'aillant pas compris**")
    .then((msg) => msg.delete({ timeout: 10000 }))
    .catch(console.error);
};

module.exports.help = {
  name: "crooks",
  aliases: "",
  category: "pnj",
  description:
    "Il s'agit de la commande pour parler à `Crooks Iksir`\n(description de se PNJ disponible dans <#568584015133540382>)",
  cooldown: 6,
  args: false,
};

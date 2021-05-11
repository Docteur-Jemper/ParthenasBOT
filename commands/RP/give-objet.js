module.exports.run = async (bot, message, args, data, userInfo) => {
  message.delete();
  if (message.channel.id !== "569098535015022612") {
    message.channel.send("Merci d'executer cette commande dans le bon channel (<#569098535015022612>)")
      .then(msg => msg.delete({ timeout: 6000 }))
      .catch(console.error);
    return;
  }
  if (args[0] === "list") {
    message.channel.send("**__Liste des objets (syntaxe à respecter) :__**  *Peau, Griffe, Viande, Bois, Sabot, Dent, Ecaille, Carapace, Mandibule, Crâne, Sang, Aile, Oreille, Corne, Oeil, Pollen, HerbeMedic, Azurite, Diamant*")
      .then(msg => msg.delete({ timeout: 20000 }))
      .catch(console.error);
    return;
  }
  const member = message.guild.member(message.mentions.users.first());
  if (args[1].charAt(0) === "<" || args[2].charAt(0) === "<" || args[3]) {
    return message.channel.send(`:x: Veuillez respecter la syntaxe : \`${data.prefix}give-item <mention> <nombre> <nom de l'objet>\``)
      .then(msg => msg.delete({ timeout: 15000 }))
      .catch(console.error);
  }
  const nombre = Number(args[1]);
  const nom = args[2];
  const nomTest = Number(nom);
  if (!member || !nombre || nomTest || nombre<0 || nombre%1!==0 || args[3]) {
    message.channel.send(`:x: Veuillez respecter la syntaxe : \`${data.prefix}give-item <mention> <nombre> <nom de l'objet>\``)
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
  if (nom === "Peau" ||
  nom === "Griffe" ||
  nom === "Viande" ||
  nom === "Bois" ||
  nom === "Sabot" ||
  nom === "Dent" ||
  nom === "Ecaille" ||
  nom === "Carapace" ||
  nom === "Mandibule" ||
  nom === "Crâne" ||
  nom === "Sang" ||
  nom === "Aile" ||
  nom === "Oreille" ||
  nom === "Corne" ||
  nom === "Oeil" ||
  nom === "Pollen" ||
  nom === "HerbeMedic" ||
  nom === "Azurite" ||
  nom === "Diamant") {
    if (userInfo.INVENTAIRE.inventaire[nom] < nombre) {
      message.channel.send(":x: Vous n'avez pas assez de cette objets !")
        .then(msg => msg.delete({ timeout: 10000 }))
        .catch(console.error);
      return;
    }
    if (!MentionUserInfo.INVENTAIRE.inventaire) return message.channel.send(":x: Ce joueur n'a pas de sac !")
      .then(msg => msg.delete({ timeout: 10000 }))
      .catch(console.error);

    if (nom === "Peau") {
      bot.updateUserInfo(message.member, {
       "users.$.INVENTAIRE.inventaire.Peau": userInfo.INVENTAIRE.inventaire[nom] - nombre
      });
      bot.updateUserInfo(member, {
        "users.$.INVENTAIRE.inventaire.Peau": MentionUserInfo.INVENTAIRE.inventaire[nom] + nombre
      });
    }
    if (nom === "Griffe") {
      bot.updateUserInfo(message.member, {
       "users.$.INVENTAIRE.inventaire.Griffe": userInfo.INVENTAIRE.inventaire[nom] - nombre
      });
      bot.updateUserInfo(member, {
        "users.$.INVENTAIRE.inventaire.Griffe": MentionUserInfo.INVENTAIRE.inventaire[nom] + nombre
      });
    }
    if (nom === "Viande") {
      bot.updateUserInfo(message.member, {
       "users.$.INVENTAIRE.inventaire.Viande": userInfo.INVENTAIRE.inventaire[nom] - nombre
      });
      bot.updateUserInfo(member, {
        "users.$.INVENTAIRE.inventaire.Viande": MentionUserInfo.INVENTAIRE.inventaire[nom] + nombre
      });
    }
    if (nom === "Bois") {
      bot.updateUserInfo(message.member, {
       "users.$.INVENTAIRE.inventaire.Bois": userInfo.INVENTAIRE.inventaire[nom] - nombre
      });
      bot.updateUserInfo(member, {
        "users.$.INVENTAIRE.inventaire.Bois": MentionUserInfo.INVENTAIRE.inventaire[nom] + nombre
      });
    }
    if (nom === "Sabot") {
      bot.updateUserInfo(message.member, {
       "users.$.INVENTAIRE.inventaire.Sabot": userInfo.INVENTAIRE.inventaire[nom] - nombre
      });
      bot.updateUserInfo(member, {
        "users.$.INVENTAIRE.inventaire.Sabot": MentionUserInfo.INVENTAIRE.inventaire[nom] + nombre
      });
    }
    if (nom === "Dent") {
      bot.updateUserInfo(message.member, {
       "users.$.INVENTAIRE.inventaire.Dent": userInfo.INVENTAIRE.inventaire[nom] - nombre
      });
      bot.updateUserInfo(member, {
        "users.$.INVENTAIRE.inventaire.Dent": MentionUserInfo.INVENTAIRE.inventaire[nom] + nombre
      });
    }
    if (nom === "Ecaille") {
      bot.updateUserInfo(message.member, {
       "users.$.INVENTAIRE.inventaire.Ecaille": userInfo.INVENTAIRE.inventaire[nom] - nombre
      });
      bot.updateUserInfo(member, {
        "users.$.INVENTAIRE.inventaire.Ecaille": MentionUserInfo.INVENTAIRE.inventaire[nom] + nombre
      });
    }
    if (nom === "Carapace") {
      bot.updateUserInfo(message.member, {
       "users.$.INVENTAIRE.inventaire.Carapace": userInfo.INVENTAIRE.inventaire[nom] - nombre
      });
      bot.updateUserInfo(member, {
        "users.$.INVENTAIRE.inventaire.Carapace": MentionUserInfo.INVENTAIRE.inventaire[nom] + nombre
      });
    }
    if (nom === "Mandibule") {
      bot.updateUserInfo(message.member, {
       "users.$.INVENTAIRE.inventaire.Mandibule": userInfo.INVENTAIRE.inventaire[nom] - nombre
      });
      bot.updateUserInfo(member, {
        "users.$.INVENTAIRE.inventaire.Mandibule": MentionUserInfo.INVENTAIRE.inventaire[nom] + nombre
      });
    }
    if (nom === "Crâne") {
      bot.updateUserInfo(message.member, {
       "users.$.INVENTAIRE.inventaire.Crâne": userInfo.INVENTAIRE.inventaire[nom] - nombre
      });
      bot.updateUserInfo(member, {
        "users.$.INVENTAIRE.inventaire.Crâne": MentionUserInfo.INVENTAIRE.inventaire[nom] + nombre
      });
    }
    if (nom === "Sang") {
      bot.updateUserInfo(message.member, {
       "users.$.INVENTAIRE.inventaire.Sang": userInfo.INVENTAIRE.inventaire[nom] - nombre
      });
      bot.updateUserInfo(member, {
        "users.$.INVENTAIRE.inventaire.Sang": MentionUserInfo.INVENTAIRE.inventaire[nom] + nombre
      });
    }
    if (nom === "Aile") {
      bot.updateUserInfo(message.member, {
       "users.$.INVENTAIRE.inventaire.Aile": userInfo.INVENTAIRE.inventaire[nom] - nombre
      });
      bot.updateUserInfo(member, {
        "users.$.INVENTAIRE.inventaire.Aile": MentionUserInfo.INVENTAIRE.inventaire[nom] + nombre
      });
    }
    if (nom === "Oreille") {
      bot.updateUserInfo(message.member, {
       "users.$.INVENTAIRE.inventaire.Oreille": userInfo.INVENTAIRE.inventaire[nom] - nombre
      });
      bot.updateUserInfo(member, {
        "users.$.INVENTAIRE.inventaire.Oreille": MentionUserInfo.INVENTAIRE.inventaire[nom] + nombre
      });
    }
    if (nom === "Corne") {
      bot.updateUserInfo(message.member, {
       "users.$.INVENTAIRE.inventaire.Corne": userInfo.INVENTAIRE.inventaire[nom] - nombre
      });
      bot.updateUserInfo(member, {
        "users.$.INVENTAIRE.inventaire.Corne": MentionUserInfo.INVENTAIRE.inventaire[nom] + nombre
      });
    }
    if (nom === "Oeil") {
      bot.updateUserInfo(message.member, {
       "users.$.INVENTAIRE.inventaire.Oeil": userInfo.INVENTAIRE.inventaire[nom] - nombre
      });
      bot.updateUserInfo(member, {
        "users.$.INVENTAIRE.inventaire.Oeil": MentionUserInfo.INVENTAIRE.inventaire[nom] + nombre
      });
    }
    if (nom === "Pollen") {
      bot.updateUserInfo(message.member, {
       "users.$.INVENTAIRE.inventaire.Pollen": userInfo.INVENTAIRE.inventaire[nom] - nombre
      });
      bot.updateUserInfo(member, {
        "users.$.INVENTAIRE.inventaire.Pollen": MentionUserInfo.INVENTAIRE.inventaire[nom] + nombre
      });
    }
    if (nom === "HerbeMedic") {
      bot.updateUserInfo(message.member, {
       "users.$.INVENTAIRE.inventaire.HerbeMedic": userInfo.INVENTAIRE.inventaire[nom] - nombre
      });
      bot.updateUserInfo(member, {
        "users.$.INVENTAIRE.inventaire.HerbeMedic": MentionUserInfo.INVENTAIRE.inventaire[nom] + nombre
      });
    }
    if (nom === "Azurite") {
      bot.updateUserInfo(message.member, {
       "users.$.INVENTAIRE.inventaire.Azurite": userInfo.INVENTAIRE.inventaire[nom] - nombre
      });
      bot.updateUserInfo(member, {
        "users.$.INVENTAIRE.inventaire.Azurite": MentionUserInfo.INVENTAIRE.inventaire[nom] + nombre
      });
    }
    if (nom === "Diamant") {
      bot.updateUserInfo(message.member, {
       "users.$.INVENTAIRE.inventaire.Diamant": userInfo.INVENTAIRE.inventaire[nom] - nombre
      });
      bot.updateUserInfo(member, {
        "users.$.INVENTAIRE.inventaire.Diamant": MentionUserInfo.INVENTAIRE.inventaire[nom] + nombre
      });
    }
    message.channel.send(`${message.author} a donné ${nombre} ${nom} à ${member}`);
  } else message.channel.send(`Le nom de l'objet ne corespond pas, faite \`${data.prefix}give-item list\` pour voir la syntaxe à respecter !\n*(\`${data.prefix}give-item <mention> <nombre> <nom de l'objet>\`)*`)
    .then(msg => msg.delete({ timeout: 10000 }))
    .catch(console.error);
};

module.exports.help = {
  name: "give-objet",
  aliases: ["give-item", "giveobjet", "giveitem"],
  category: "rp",
  description: "Permet de donner un ou plusieurs objets à un autre joueur.\n**(seulement dans <#569098535015022612>)**",
  usage: "<mention> <nombre> <nom de l'objet>",
  cooldown: 5,
  args: true
};

const { Collection } = require("discord.js");
const { Guild } = require("../models/main");

module.exports = async (bot, message) => {
  if (message.channel.type === "dm") return;
// Delete function
  function Delete() {
    message.delete();
  }
  const data = await bot.getGuild(message.guild);
  const position = data.users.map(e => e.id).indexOf(message.member.id);
  const userInfo = data.users[position];
  const member = message.guild.member(message.mentions.users.first());
  if (member && !member.user.bot){
    const positionMember = data.users.map(e => e.id).indexOf(member.id);
    if (message.guild && positionMember == -1) {
      await Guild.updateOne(
        { guildID: message.guild.id },
        { $push: { users: {
          id: member.id,
          EXP: {
            experience: 0,
            level: 1,
            force: 100,
            forceActu: 100,
            Pv: 3000,
            PvActu: 3000
          },
          MONNAIE: {
            monnaie: 500,
            monnaieB: -100
          },
          MOB: {
            mob: "Aucun",
            Pv: 0,
            PvBase: 0,
            Niveau: "Aucun",
            Force:0
          },
          INVENTAIRE: {
            équipement: {
              Armure: "Aucune",
              Arme: "Aucune",
              Talisman: "Aucun"
            },
            inventaire: {
              Peau: 0,
              Griffe: 0,
              Viande: 0,
              Bois: 0,
              Sabot: 0,
              Dent: 0,
              Ecaille: 0,
              Carapace: 0,
              Mandibule: 0,
              Crâne: 0,
              Sang: 0,
              Aile: 0,
              Oreille: 0,
              Corne: 0,
              Oeil: 0,
              Pollen: 0,
              HerbeMedic: 0,
              Azurite: 0,
              Diamant: 0
            },
          },
          COOLDOWN: {
            entr: new Date(0),
            entrCd: new Date(0),
            potion: new Date(0)
          },
          Hierarchie: "",
          Race: "",
          Genre: "",
          Age: "",
          stats: {}
        }}}
      ).then(d => console.log("New user !"))
        .catch(console.error);
      Delete();
      return;
    }
  }
  if (message.author.bot) return;
  // Si Nouveau
  if (message.member.roles.cache.get("685239415194648577")) {
    if (message.channel.parent.name === "Parthénas") {
      if (message.content !== `${data.prefix}start`) {
        message.delete();
        message.channel.send(`${message.author} Pour commencer à RP exécuter la commande \`\`${data.prefix}start\`\``)
          .then(msg => msg.delete({ timeout: 8000 }))
          .catch(console.error);
      }
      if (message.content === `${data.prefix}start`) {
        message.member.roles.remove("685239415194648577");
        message.channel.send(`${message.author} pénètre les terres de Parthénas pour la première fois`);
      }
    }
  }
  if (message.content === `${data.prefix}start`) message.delete();
  // Si KO
  if (message.member.roles.cache.get("693606393781157968")) {
    if (message.channel.parent.name === "Parthénas" ||
      message.channel.parent.name === "»»»»»『áthiktos』«««««" ||
      message.channel.parent.name === "»»»»»『ypsós』«««««" ||
      message.channel.parent.name === "»»»『kryfó-chorió』«««" ||
      message.channel.parent.name === "»»»»»『ifaísteio』«««««") {
      if (message.content.indexOf("(") !== 0) {
        message.delete();
        message.channel.send(`${message.author} vous êtes KO, il faut encore que vous attendiez de vous réveiller avant de pouvoir parler !`)
          .then(msg => msg.delete({ timeout: 6000 }))
          .catch(console.error);
      }
    }
  }
  // Si Soigner
  if (message.member.roles.cache.get("694849411817275392")) {
    if (message.channel.parent.name === "Parthénas" ||
      message.channel.parent.name === "»»»»»『áthiktos』«««««" ||
      message.channel.parent.name === "»»»»»『ypsós』«««««" ||
      message.channel.parent.name === "»»»『kryfó-chorió』«««" ||
      message.channel.parent.name === "»»»»»『ifaísteio』«««««") {
      if (message.content.indexOf("(") !== 0) {
        message.delete();
        message.channel.send(`${message.author} vous êtes hospitaliser, il faut encore que vous attendiez avant de pouvoir parler !`)
          .then(msg => msg.delete({ timeout: 6000 }))
          .catch(console.error);
        return;
      }
    }
  }

  if (message.guild && position == -1) {
    await Guild.updateOne(
      { guildID: message.guild.id },
      { $push: { users: {
        id: message.author.id,
        EXP: {
          experience: 0,
          level: 1,
          force: 100,
          forceActu: 100,
          Pv: 3000,
          PvActu: 3000
        },
        MONNAIE: {
          monnaie: 500,
          monnaieB: -100
        },
        MOB: {
          mob: "Aucun",
          Pv: 0,
          PvBase: 0,
          Niveau: "Aucun",
          Force:0
        },
        INVENTAIRE: {
          équipement: {
            Armure: "Aucune",
            Arme: "Aucune",
            Talisman: "Aucun"
          },
          inventaire: {
            Peau: 0,
            Griffe: 0,
            Viande: 0,
            Bois: 0,
            Sabot: 0,
            Dent: 0,
            Ecaille: 0,
            Carapace: 0,
            Mandibule: 0,
            Crâne: 0,
            Sang: 0,
            Aile: 0,
            Oreille: 0,
            Corne: 0,
            Oeil: 0,
            Pollen: 0,
            HerbeMedic: 0,
            Azurite: 0,
            Diamant: 0
          },
        },
        COOLDOWN: {
          entr: new Date(0),
          entrCd: new Date(0),
          potion: new Date(0)
        },
        Hierarchie: "",
        Race: "",
        Genre: "",
        Age: "",
        stats: {}
      }}}
    ).then(d => console.log("New user !"))
      .catch(console.error);
    Delete();
    const data = await bot.getGuild(message.guild);
    const position = data.users.map(e => e.id).indexOf(message.member.id);
    const userInfo = data.users[position];
  }

  // XP DB
  const currentExp = userInfo.EXP.experience;
  const currentNiv = userInfo.EXP.level;
  if (currentNiv < 17) {
    const nextLevel = currentNiv * currentNiv + currentNiv;
    if (nextLevel <= currentExp) {
      const force = userInfo.EXP.level * 5 * (1 + userInfo.stats.force);
      const Pv = userInfo.EXP.level * 100 * (1 + userInfo.stats.Pv);
      const newlevel = userInfo.EXP.level + 1;
      const newPv = userInfo.EXP.Pv + Pv;
      const newPvActu = userInfo.EXP.PvActu + Pv;
      const newforce = userInfo.EXP.force + force;
      const newforceActu = userInfo.EXP.forceActu + force;
      bot.updateUserInfo(message.member, {
        "users.$.EXP.level": newlevel,
        "users.$.EXP.Pv": newPv,
        "users.$.EXP.PvActu": newPvActu,
        "users.$.EXP.force": newforce,
        "users.$.EXP.forceActu": newforceActu,
      });
      message.channel.send("**Bravo tu es passé à la Maîtrise supérieur !!**")
        .then(msg => msg.delete({ timeout: 60000 }))
        .catch(console.error);
      // De Suprême à Divine
      if (message.member.roles.cache.get("575463963039367205")) {
        message.member.roles.remove("575463963039367205");
        message.member.roles.add("575464148968931348");
      }
      // De Incroyable à Suprême
      if (message.member.roles.cache.get("575463846865534977")) {
        message.member.roles.remove("575463846865534977");
        message.member.roles.add("575463963039367205");
      }
      // De Ultra Bonne à Incroyable
      if (message.member.roles.cache.get("575463736098160670")) {
        message.member.roles.remove("575463736098160670");
        message.member.roles.add("575463846865534977");
      }
      // De Super Bonne à Ultra Bonne
      if (message.member.roles.cache.get("575463641118146577")) {
        message.member.roles.remove("575463641118146577");
        message.member.roles.add("575463736098160670");
      }
      // De Très Bonne à Super Bonne
      if (message.member.roles.cache.get("575463535484600320")) {
        message.member.roles.remove("575463535484600320");
        message.member.roles.add("575463641118146577");
      }
      // De Assez Bonne à Très Bonne
      if (message.member.roles.cache.get("575463450772242442")) {
        message.member.roles.remove("575463450772242442");
        message.member.roles.add("575463535484600320");
      }
      // De Bonne à Assez Bonne
      if (message.member.roles.cache.get("575463368308031528")) {
        message.member.roles.remove("575463368308031528");
        message.member.roles.add("575463450772242442");
      }
      // De Accrue à Bonne
      if (message.member.roles.cache.get("575463192478744597")) {
        message.member.roles.remove("575463192478744597");
        message.member.roles.add("575463368308031528");
      }
      // De Convenable à Accrue
      if (message.member.roles.cache.get("575463061108949012")) {
        message.member.roles.remove("575463061108949012");
        message.member.roles.add("575463192478744597");
      }
      // De Suffisante à Convenable
      if (message.member.roles.cache.get("575462921061138432")) {
        message.member.roles.remove("575462921061138432");
        message.member.roles.add("575463061108949012");
      }
      // De Correct à Suffisante
      if (message.member.roles.cache.get("575462822520160256")) {
        message.member.roles.remove("575462822520160256");
        message.member.roles.add("575462921061138432");
      }
      // De Aguerri à Correct
      if (message.member.roles.cache.get("575462581385428992")) {
        message.member.roles.remove("575462581385428992");
        message.member.roles.add("575462822520160256");
      }
      // De Faible à Aguerri
      if (message.member.roles.cache.get("575462451668189205")) {
        message.member.roles.remove("575462451668189205");
        message.member.roles.add("575462581385428992");
      }
      // De Novice à Faible
      if (message.member.roles.cache.get("575462354431639554")) {
        message.member.roles.remove("575462354431639554");
        message.member.roles.add("575462451668189205");
      }
      // De Débutant à Novice
      if (message.member.roles.cache.get("575462048452837377")) {
        message.member.roles.remove("575462048452837377");
        message.member.roles.add("575462354431639554");
      }
      // De Aucune à Débutant
      if (message.member.roles.cache.get("575464287666176010")) {
        message.member.roles.remove("575464287666176010");
        message.member.roles.add("575462048452837377");
      }
    }
  } else {
    if (currentNiv === 17) {
      var nextLevel = 552;
    }
    if (currentNiv === 18) {
      var nextLevel = 1104;
    }
    if (currentNiv === 19) {
      var nextLevel = 2208;
    }
    if (currentNiv === 20) {
      var nextLevel = 4416;
    }
    if (currentNiv === 21) {
      var nextLevel = 99999999999999;
    }
    if (nextLevel <= currentExp) {
      const Pv = userInfo.EXP.level * 100 * (1 + dbProfile.stats.Pv);
      const newlevel = userInfo.EXP.level + 1;
      const newPv = userInfo.EXP.Pv + Pv;
      const newPvActu = userInfo.EXP.PvActu + Pv;
      bot.updateUserInfo(message.member, {
        "users.$.EXP.level": newlevel,
        "users.$.EXP.Pv": newPv,
        "users.$.EXP.PvActu": newPvActu,
      });
      message.channel.send("**Bravo tu es passé à la Classe supérieur !!**")
        .then(msg => msg.delete({ timeout: 60000 }))
        .catch(console.error);
      // Classe A à S
      if (message.member.roles.cache.get("568518288473325609")) {
        message.member.roles.remove("568518288473325609");
        message.member.roles.add("568518246886801408");
      }
      // Classe B à A
      if (message.member.roles.cache.get("568518336204505108")) {
        message.member.roles.remove("568518336204505108");
        message.member.roles.add("568518288473325609");
      }
      // Classe C à B
      if (message.member.roles.cache.get("568518102535372800")) {
        message.member.roles.remove("568518102535372800");
        message.member.roles.add("568518336204505108");
      }
      // Classe C
      if (userInfo.EXP.level === 18) {
        message.member.roles.add("568518102535372800");
        message.member.roles.add("568517877809020939");
      }
    }
  }
  if (userInfo.Race !== "") {
    const Pv = 3000 * ( 1 + userInfo.stats.Pv);
    const force = 100 * ( 1 + userInfo.stats.force);
    if (userInfo.EXP.force === 100 && userInfo.EXP.Pv === 3000) {
      bot.updateUserInfo(message.member, {
      "users.$.EXP.Pv": userInfo.EXP.Pv + Pv,
      "users.$.EXP.PvActu": userInfo.EXP.Pv + Pv,
      "users.$.EXP.force": userInfo.EXP.force + force,
      "users.$.EXP.forceActu": userInfo.EXP.force + force,
      });
    }
  }
     
  if (message.content.indexOf(data.prefix) !== 0) return; 
  // Variable
  const args = message.content.slice(data.prefix.length).split(/ +/g);
  const commandName = args.shift().toLowerCase();
  const user = message.mentions.users.first();
  const command = bot.commands.get(commandName) || bot.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
  if (!command) return;

  // Permission
  if (command.help.permissions && !message.member.hasPermission("BAN_MEMBERS")) {
    setTimeout(Delete, 8000);
    return message.reply("hé hoooooo c'est pas une commande pour toi ça !!")
    .then(msg => msg.delete({ timeout: 5000 }))
    .catch(console.error);
  }
  // Arguments
  if (command.help.args && !args.length) {
    let NoArgs = `Veuillez rajouter des arguments, ${message.author} !`;
    if (command.help.usage) NoArgs += `\nVoici la bonne syntaxe : \`${data.prefix}${command.help.name} ${command.help.usage}\``;
    return message.channel.send(NoArgs)
      .then(msg => msg.delete({ timeout: 6000 }))
      .catch(console.error);
  }
  // Anti command sur admin
  if (command.help.isUserAdmin && !user) return message.reply("il faut mentionner un utilisateur")
    .then(msg => msg.delete({ timeout: 8000 }))
    .catch(console.error);
  if (command.help.isUserAdmin && message.guild.member(user).hasPermission("BAN_MEMBERS")) {
    setTimeout(Delete, 8000);
    return message.reply("hé hoooooo tu peux pas utiliser ça sur mon staff !!")
      .then(msg => msg.delete({ timeout: 8000 }))
      .catch(console.error);
  }
  // Cooldowns
  if (!bot.cooldowns.has(command.help.name)) {
    bot.cooldowns.set(command.help.name, new Collection());
  }
  const timeNow = Date.now();
  const timeStamps = bot.cooldowns.get(command.help.name);
  const cdAmount = (command.help.cooldown || 2) * 1000;

  if (timeStamps.has(message.author.id)) {
    const cdExpirationTime = timeStamps.get(message.author.id) + cdAmount;
    if (timeNow < cdExpirationTime) {
      const timeLeft = (cdExpirationTime - timeNow) / 1000;
      setTimeout(Delete, 4000);
      return message.reply(`merci d'attendre encore ${timeLeft.toFixed(0)} seconde(s) avant de ré-utiliser la commande \`${data.prefix}${command.help.name}\``)
        .then(msg => msg.delete({ timeout: 4000 }))
        .catch(console.error);
    }
  }
  timeStamps.set(message.author.id, timeNow);
  setTimeout(() => timeStamps.delete(message.author.id), cdAmount);

  // Execution de la commande
  command.run(bot, message, args, data, userInfo);
};

module.exports.run = async (bot, message, args, data, userInfo) => {
  const entrCdCooldown = 8.64e+7;
  const entrCooldown = 5.4e+5;
  message.delete();
  if (message.channel.parent.name === "Parthénas" || message.channel.parent.name === "⛔Staff⛔") {
    const lastEntr = userInfo.COOLDOWN.entr;
    if (lastEntr !== null && entrCooldown - (Date.now() - lastEntr) > 0) {
      const cdTime = entrCooldown - (Date.now() - lastEntr);
      const minutes = Math.floor(cdTime / (1000*60) % 60);
      const secondes = Math.floor(cdTime / (1000) % 60);
      message.reply(`il vous reste encore ${minutes !== 0 ? `${minutes}mins et ` : ""}${secondes}secs avant la fin de votre entrainement`)
        .then(msg => msg.delete({ timeout: 10000 }))
        .catch(console.error);
    } else {
      bot.updateUserInfo(message.member, {
        "users.$.COOLDOWN.entr": new Date(Date.now())
      });
      const lastEntrCd = userInfo.COOLDOWN.entrCd;
      if (lastEntrCd !== null && entrCdCooldown - (Date.now() - lastEntrCd) > 0) {
        const cdTime = entrCdCooldown - (Date.now() - lastEntrCd);
        const heures = Math.floor(cdTime / (1000*60*60) % 24);
        const minutes = Math.floor(cdTime / (1000*60) % 60);
        const secondes = Math.floor(cdTime / (1000) % 60);
        message.reply(`il vous reste ${heures !== 0 ? `${heures}hrs, ` : ""}${minutes !== 0 ? `${minutes}mins et ` : ""}${secondes}secs avant de pouvoir refaire un entrainement`)
          .then(msg => msg.delete({ timeout: 10000 }))
          .catch(console.error);
      } else {
        bot.updateUserInfo(message.member, {
          "users.$.COOLDOWN.entrCd": new Date(Date.now())
        });
        message.channel.send(`**${message.author} début un rude entraînement !!**`);
        message.member.roles.add("660624354056470540");
        function FinEntrainement() {
          message.channel.send(`**${message.author} termine son rude entraînement !!**`);
          message.member.roles.remove("660624354056470540");
        }
        setTimeout(FinEntrainement, 540000);

        async function RandomXP() {
          const randnum = Math.floor(Math.random() * 7) + 1;
          if (randnum === 1) {
            message.channel.send(`${message.author}** gagne** ***__0 point de maîtrise__***`);
          }
          if (randnum === 2) {
            message.channel.send(`${message.author}** gagne** ***__2 point de maîtrise__***`);
            const exp = 2;
            bot.updateUserInfo(message.member, {
              "users.$.EXP.experience": userInfo.EXP.experience + exp
            });
          }
          if (randnum >= 3) {
            message.channel.send(`${message.author}** gagne** ***__1 point de maîtrise__***`);
            const exp = 1;
            bot.updateUserInfo(message.member, {
              "users.$.EXP.experience": userInfo.EXP.experience + exp
            });
          }
          message.member.roles.add("688019678924505110");
        }
        setTimeout(RandomXP, 540000);
        async function Exp() {
          const data = await bot.getGuild(message.guild);
          const position = data.users.map(e => e.id).indexOf(message.member.id);
          const userInfo = data.users[position];
          const currentExp = userInfo.EXP.experience;
          const currentNiv = userInfo.EXP.level;
          if (currentNiv < 17) {
            const nextLevel = (currentNiv * currentNiv) + currentNiv;
            if (nextLevel <= currentExp) {
              const force = (userInfo.EXP.level * 5) * (1 + userInfo.stats.force);
              const Pv = (userInfo.EXP.level * 100) * (1 + userInfo.stats.Pv);
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
                "users.$.EXP.forceActu": newforceActu
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
              const Pv = (userInfo.EXP.level * 100) * ( 1 + dbProfile.stats.Pv);
              const newlevel = userInfo.EXP.level + 1;
              const newPv = userInfo.EXP.Pv + Pv;
              const newPvActu = userInfo.EXP.PvActu + Pv;
              bot.updateUserInfo(message.member, {
                "users.$.EXP.level": newlevel,
                "users.$.EXP.Pv": newPv,
                "users.$.EXP.PvActu": newPvActu
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
        }
        setTimeout(Exp, 600000);
        function FinCdEntrainement() {
          message.member.roles.remove("688019678924505110");
        }
        setTimeout(FinCdEntrainement, 86400000);
      }
    }
  }
  if (message.channel.parent.name === "»»»»»『áthiktos』«««««" ||
  message.channel.parent.name === "»»»»»『ypsós』«««««" ||
  message.channel.parent.name === "»»»『kryfó-chorió』«««" ||
  message.channel.parent.name === "»»»»»『ifaísteio』«««««") {
    message.channel.send(`On ne fait pas un si rude entraînement en ville ${message.author} !!`)
      .then(msg => msg.delete({ timeout: 6000 }))
      .catch(console.error);
  }
  if (!message.channel.parent.name === "Parthénas" ||
  !message.channel.parent.name === "⛔Staff⛔" ||
  !message.channel.parent.name === "»»»»»『áthiktos』«««««" ||
  !message.channel.parent.name === "»»»»»『ypsós』«««««" ||
  !message.channel.parent.name === "»»»『kryfó-chorió』«««" ||
  !message.channel.parent.name === "»»»»»『ifaísteio』«««««") {
    message.channel.send(`:x: Cette commande est réservé au RP ${message.author} !!`)
      .then(msg => msg.delete({ timeout: 6000 }))
      .catch(console.error);
  }
};

module.exports.help = {
  name: "entrainement",
  aliases: ["entr"],
  category: "rp",
  description: "Permet d'exécuter un rude entrainement pour gagner des Points de Maîtrise.\n**(Duré de l'entrainement : 9min)**",
  cooldown: "24h soit beaucoup de",
  args: false
};

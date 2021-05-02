const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args, data, userInfo) => {
  if (userInfo.MOB.mob === "Loup" ||
    userInfo.MOB.mob === "Cerf" ||
    userInfo.MOB.mob === "Pripom" ||
    userInfo.MOB.mob === "Golime" ||
    userInfo.MOB.mob === "Croco" ||
    userInfo.MOB.mob === "Golem" ||
    userInfo.MOB.mob === "Gimille" ||
    userInfo.MOB.mob === "Wretch" ||
    userInfo.MOB.mob === "Varghulf" ||
    userInfo.MOB.mob === "Minotaur") {
    message.delete();
    // LOUP & CERF
    if (userInfo.MOB.mob === "Loup" || userInfo.MOB.mob === "Cerf") {
      if (message.channel.id !== "568923274658971668") return message.channel
        .send(`Le ${userInfo.MOB.mob} ne vous attaque pas ici mais dans le channel <#568923274658971668>`)
        .then(msg => msg.delete({ timeout: 6000 }))
        .catch(console.error);
      if (userInfo.MOB.mob === "Loup") {
        var Image = "http://ekladata.com/WLSt1CuOFVWqskbgaY5nc_m7tiE.png";
      }
      if (userInfo.MOB.mob === "Cerf") {
      var Image = "https://i.redd.it/2w2alpuylqz11.jpg";
      }
    }
    // PRIPOM & GOLIME
    if (userInfo.MOB.mob === "Pripom" || userInfo.MOB.mob === "Golime") {
      if (message.channel.id !== "568937782630678541") return message.channel
        .send(`Le ${userInfo.MOB.mob} ne vous attaque pas ici mais dans le channel <#568937782630678541>`)
        .then(msg => msg.delete({ timeout: 6000 }))
        .catch(console.error);
      if (userInfo.MOB.mob === "Pripom") {
        var Image = "https://mcdn.wallpapersafari.com/medium/25/61/Z9iaVj.jpg";
      }
      if (userInfo.MOB.mob === "Golime") {
        var Image = "https://i.pinimg.com/originals/23/1f/ef/231fefd0fe5d064fe3714d930f72bf8c.jpg";
      }
    }
    // CROCO
    if (userInfo.MOB.mob === "Croco") {
      if (message.channel.id !== "569505805561364511") return message.channel
        .send(`Le ${userInfo.MOB.mob} ne vous attaque pas ici mais dans le channel <#569505805561364511>`)
        .then(msg => msg.delete({ timeout: 6000 }))
        .catch(console.error);
      var Image = "https://i.pinimg.com/originals/50/46/a6/5046a6dafc5b293dd59e09a260ad72a3.jpg";
    }
    // GOLEM
    if (userInfo.MOB.mob === "Golem") {
      if (message.channel.id !== "569207554404515841") return message.channel
        .send(`Le ${userInfo.MOB.mob} ne vous attaque pas ici mais dans le channel <#569207554404515841>`)
        .then(msg => msg.delete({ timeout: 6000 }))
        .catch(console.error);
      var Image = "https://vignette.wikia.nocookie.net/hanin/images/c/ce/Golem.png/revision/latest?cb=20180319155750&path-prefix=fr";
    }
    // GIMILLE & WRETCH
    if (userInfo.MOB.mob === "Gimille" || userInfo.MOB.mob === "Wretch") {
      if (message.channel.id !== "569209205207072773") return message.channel
        .send(`Le ${userInfo.MOB.mob} ne vous attaque pas ici mais dans le channel <#569209205207072773>`)
        .then(msg => msg.delete({ timeout: 6000 }))
        .catch(console.error);
      if (userInfo.MOB.mob === "Gimille") {
        var Image = "https://i.pinimg.com/originals/4b/52/7d/4b527d00f51d375a9542f2f14b683285.jpg";
      }
      if (userInfo.MOB.mob === "Wretch") {
        var Image = "https://vignette.wikia.nocookie.net/gearsofwar/images/2/2d/Wretch.png/revision/latest?cb=20110713224628";
      }
    }
    // VARGHULF & MINOTAUR
    if (userInfo.MOB.mob === "Varghulf" || userInfo.MOB.mob === "Minotaur") {
      if (message.channel.id !== "569209235166986249") return message.channel
        .send(`Le ${userInfo.MOB.mob} ne vous attaque pas ici mais dans le channel <#569209235166986249>`)
        .then(msg => msg.delete({ timeout: 6000 }))
        .catch(console.error);
      if (userInfo.MOB.mob === "Varghulf") {
        var Image = "https://bibliotheque-imperiale.com/images/thumb/7/76/Cda_demo2.jpg/500px-Cda_demo2.jpg";
      }
      if (userInfo.MOB.mob === "Minotaur") {
        var Image = "https://i.pinimg.com/originals/50/76/76/507676241d3dbfafad32e626d07e15a1.jpg";
      }
    }
    // Loot Mob !!
    async function LootMob() {
      message.channel.send(`${message.author} a vaincu un ${userInfo.MOB.mob} après un rude combat !`);
      // loot "Loup" !!
      if (userInfo.MOB.mob === "Loup") {
        const RandomLoot = Math.floor(Math.random() * 5) + 1;
        const NombrePeau = Math.floor(Math.random() * 2) + 1;
        const NombreGriffe = Math.floor(Math.random() * 3) + 1;
        const ExpGain = Math.floor(Math.random() * 2) + 1;
        const exp = ExpGain;
        bot.updateUserInfo(message.member, {
          "users.$.EXP.experience": userInfo.EXP.experience + exp
        });

        // loot : Griffe de loup
        if (RandomLoot === 1 || RandomLoot === 2) {
          const nombre = NombreGriffe;
          const nom = "Griffe";
          bot.updateUserInfo(message.member, {
            "users.$.INVENTAIRE.inventaire.Griffe": userInfo.INVENTAIRE.inventaire[nom] + nombre
          });

          const LootEmbed = new MessageEmbed()
            .setColor("#27d200")
            .setDescription("Loots ramassez !")
            .addField("<:Griffe_de_loup:694189763590094891> Griffe de Loup :", NombreGriffe)
            .addField("Point de Maîtrisse gagner : ", ExpGain)
            .setTimestamp();
          message.channel.send(LootEmbed)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
        // loot : Peau de loup
        if (RandomLoot === 3 || RandomLoot === 4) {
          const nombre = NombrePeau;
          const nom = "Peau";
          bot.updateUserInfo(message.member, {
            "users.$.INVENTAIRE.inventaire.Peau": userInfo.INVENTAIRE.inventaire[nom] + nombre
          });

          const LootEmbed = new MessageEmbed()
            .setColor("#27d200")
            .setDescription("Loots ramassez !")
            .addField("<:Peau_de_loup:694189902702837800> Peau de Loup :", NombrePeau)
            .addField("Point de Maîtrisse gagner : ", ExpGain)
            .setTimestamp();
          message.channel.send(LootEmbed)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
        // loot : Griffe de loup + Peau de loup
        if (RandomLoot === 5) {
          const nombre = NombreGriffe;
          const nom = "Griffe";
          const nombre2 = NombrePeau;
          const nom2 = "Peau";
          bot.updateUserInfo(message.member, {
            "users.$.INVENTAIRE.inventaire.Griffe": userInfo.INVENTAIRE.inventaire[nom] + nombre,
            "users.$.INVENTAIRE.inventaire.Peau": userInfo.INVENTAIRE.inventaire[nom2] + nombre2
          });
          const LootEmbed = new MessageEmbed()
            .setColor("#27d200")
            .setDescription("Loots ramassez !")
            .addField("<:Griffe_de_loup:694189763590094891> Griffe de Loup :", NombreGriffe)
            .addField("<:Peau_de_loup:694189902702837800> Peau de Loup :", NombrePeau)
            .addField("Point de Maîtrisse gagner : ", ExpGain)
            .setTimestamp();
          message.channel.send(LootEmbed)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
      }
      // Loot "Cerf" !!
      if (userInfo.MOB.mob === "Cerf") {
        const RandomLoot = Math.floor(Math.random() * 5) + 1;
        const NombreViande = 1;
        const NombreBois = Math.floor(Math.random() * 2) + 1;
        const ExpGain = Math.floor(Math.random());

        // Loot : Viande de cerf
        if (RandomLoot === 1 || RandomLoot === 2) {
          const nombre = NombreViande;
          const nom = "Viande";
          bot.updateUserInfo(message.member, {
            "users.$.INVENTAIRE.inventaire.Viande": userInfo.INVENTAIRE.inventaire[nom] + nombre
          });
          const LootEmbed = new MessageEmbed()
            .setColor("#27d200")
            .setDescription("Loots ramassez !")
            .addField("<:Viande_de_cerf:694210828462719006> Viande de Cerf :", NombreViande)
            .setTimestamp();
          if (ExpGain > 0) {
            const exp = ExpGain;
            bot.updateUserInfo(message.member, {
              "users.$.EXP.experience": userInfo.EXP.experience + exp
            });
            LootEmbed.addField("Point de Maîtrisse gagner : ", ExpGain);
          }
          message.channel.send(LootEmbed)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
        // Loot : Bois de cerf
        if (RandomLoot === 3 || RandomLoot === 4) {
          const nombre = NombreBois;
          const nom = "Bois";
          bot.updateUserInfo(message.member, {
            "users.$.INVENTAIRE.inventaire.Bois": userInfo.INVENTAIRE.inventaire[nom] + nombre
          });
          const LootEmbed = new MessageEmbed()
            .setColor("#27d200")
            .setDescription("Loots ramassez !")
            .addField("<:Bois_de_cerf:694208793013256292> Bois de Cerf :", NombreBois)
            .setTimestamp();
          if (ExpGain > 0) {
            const exp = ExpGain;
            bot.updateUserInfo(message.member, {
              "users.$.EXP.experience": userInfo.EXP.experience + exp
            });
            LootEmbed.addField("Point de Maîtrisse gagner : ", ExpGain);
          }
          message.channel.send(LootEmbed)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
        // Loot : Viande de cerf + Bois de cerf
        if (RandomLoot === 5) {
          const nombre = NombreViande;
          const nom = "Viande";
          const nombre2 = NombreBois;
          const nom2 = "Bois";
          bot.updateUserInfo(message.member, {
            "users.$.INVENTAIRE.inventaire.Viande": userInfo.INVENTAIRE.inventaire[nom] + nombre,
            "users.$.INVENTAIRE.inventaire.Bois": userInfo.INVENTAIRE.inventaire[nom2] + nombre2
          });
          const LootEmbed = new MessageEmbed()
            .setColor("#27d200")
            .setDescription("Loots rampassez !")
            .addField("<:Viande_de_cerf:694210828462719006> Viande de Cerf :", NombreViande)
            .addField("<:Bois_de_cerf:694208793013256292> Bois de Cerf :", NombreBois)
            .setTimestamp();
          if (ExpGain > 0) {
            const exp = ExpGain;
            bot.updateUserInfo(message.member, {
              "users.$.EXP.experience": userInfo.EXP.experience + exp
            });
            LootEmbed.addField("Point de Maîtrisse gagner : ", ExpGain);
          }
          message.channel.send(LootEmbed)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
      }
      // Loot "Pripom" !!
        if (userInfo.MOB.mob === "Pripom") {
        const RandomLoot = Math.floor(Math.random() * 5) + 1;
        const NombreSabot = Math.floor(Math.random() * 4) + 1 || Math.floor(Math.random() * 2) + 1;
        const NombrePollen = Math.floor(Math.random() * 3) + 1;
        const ExpGain = Math.floor(Math.random());

        // Loot : Sabot de Pripom
        if (RandomLoot === 1 || RandomLoot === 2) {
          const nombre = NombreSabot;
          const nom = "Sabot";
          bot.updateUserInfo(message.member, {
            "users.$.INVENTAIRE.inventaire.Sabot": userInfo.INVENTAIRE.inventaire[nom] + nombre
          });
          const LootEmbed = new MessageEmbed()
            .setColor("#27d200")
            .setDescription("Loots ramassez !")
            .addField("<:Sabot_de_Pripom:694236178911592458> Sabot de Pripom :", NombreSabot)
            .setTimestamp();
          if (ExpGain > 0) {
            const exp = ExpGain;
            bot.updateUserInfo(message.member, {
              "users.$.EXP.experience": userInfo.EXP.experience + exp
            });
            LootEmbed.addField("Point de Maîtrisse gagner : ", ExpGain);
          }
          message.channel.send(LootEmbed)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
        // Loot : Pollen de Pripom
        if (RandomLoot === 3 || RandomLoot === 4) {
          const nombre = NombrePollen;
          const nom = "Pollen";
          bot.updateUserInfo(message.member, {
            "users.$.INVENTAIRE.inventaire.Pollen": userInfo.INVENTAIRE.inventaire[nom] + nombre
          });
          const LootEmbed = new MessageEmbed()
            .setColor("#27d200")
            .setDescription("Loots ramassez !")
            .addField("<:Pollen_de_Pripom:694236079498461284> Pollen de Pripom :", NombrePollen)
            .setTimestamp();
          if (ExpGain > 0) {
            const exp = ExpGain;
            bot.updateUserInfo(message.member, {
              "users.$.EXP.experience": userInfo.EXP.experience + exp
            });
            LootEmbed.addField("Point de Maîtrisse gagner : ", ExpGain);
          }
          message.channel.send(LootEmbed)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
        // Loot : Sabot de Pripom + Pollen de Pripom
        if (RandomLoot === 5) {
          const nombre = NombreSabot;
          const nom = "Sabot";
          const nombre2 = NombrePollen;
          const nom2 = "Pollen";
          bot.updateUserInfo(message.member, {
            "users.$.INVENTAIRE.inventaire.Sabot": userInfo.INVENTAIRE.inventaire[nom] + nombre,
            "users.$.INVENTAIRE.inventaire.Pollen": userInfo.INVENTAIRE.inventaire[nom2] + nombre2
          });
          const LootEmbed = new MessageEmbed()
            .setColor("#27d200")
            .setDescription("Loots rampassez !")
            .addField("<:Sabot_de_Pripom:694236178911592458> Sabot de Pripom :", NombreSabot)
            .addField("<:Pollen_de_Pripom:694236079498461284> Pollen de Pripom :", NombrePollen)
            .setTimestamp();
          if (ExpGain > 0) {
            const exp = ExpGain;
            bot.updateUserInfo(message.member, {
              "users.$.EXP.experience": userInfo.EXP.experience + exp
            });
            LootEmbed.addField("Point de Maîtrisse gagner : ", ExpGain);
          }
          message.channel.send(LootEmbed)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
      }
      // Loot "Golime" !!
      if (userInfo.MOB.mob === "Golime") {
        const RandomLoot = Math.floor(Math.random() * 5) + 1;
        const NombreAzurite = Math.floor(Math.random() * 3) + 1;
        const NombreHerbeMedic = Math.floor(Math.random() * 4) + 1;
        const ExpGain = Math.floor(Math.random() * 3) + 2;
        const exp = ExpGain;
        bot.updateUserInfo(message.member, {
              "users.$.EXP.experience": userInfo.EXP.experience + exp
            });

        // Loot : Pierre d'Azurite
        if (RandomLoot === 1 || RandomLoot === 2) {
          const nombre = NombreAzurite;
          const nom = "Azurite";
          bot.updateUserInfo(message.member, {
            "users.$.INVENTAIRE.inventaire.Azurite": userInfo.INVENTAIRE.inventaire[nom] + nombre
          });
          const LootEmbed = new MessageEmbed()
            .setColor("#27d200")
            .setDescription("Loots ramassez !")
            .addField("<:Pierre_dazurite:694498949603786792> Pierre d'Azurite :", NombreAzurite)
            .addField("Point de Maîtrisse gagner : ", ExpGain)
            .setTimestamp();
          message.channel.send(LootEmbed)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
        // Loot : Herbe Médicinal
        if (RandomLoot === 3 || RandomLoot === 4) {
          const nombre = NombreHerbeMedic;
          const nom = "HerbeMedic";
          bot.updateUserInfo(message.member, {
            "users.$.INVENTAIRE.inventaire.HerbeMedic": userInfo.INVENTAIRE.inventaire[nom] + nombre
          });
          const LootEmbed = new MessageEmbed()
            .setColor("#27d200")
            .setDescription("Loots ramassez !")
            .addField("<:Herbe_Medicinal:694502875929247835> Herbe Médicinal :", NombreHerbeMedic)
            .addField("Point de Maîtrisse gagner : ", ExpGain)
            .setTimestamp();
          message.channel.send(LootEmbed)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
        // Loot : Pierre d'Azurite + Herbe Médicinal
        if (RandomLoot === 5) {
          const nombre = NombreAzurite;
          const nom = "Azurite";
          const nombre2 = NombreHerbeMedic;
          const nom2 = "HerbeMedic";
          bot.updateUserInfo(message.member, {
            "users.$.INVENTAIRE.inventaire.Azurite": userInfo.INVENTAIRE.inventaire[nom] + nombre,
            "users.$.INVENTAIRE.inventaire.HerbeMedic": userInfo.INVENTAIRE.inventaire[nom2] + nombre2
          });
          const LootEmbed = new MessageEmbed()
            .setColor("#27d200")
            .setDescription("Loots rampassez !")
            .addField("<:Pierre_dazurite:694498949603786792> Pierre d'Azurite :", NombreAzurite)
            .addField("<:Herbe_Medicinal:694502875929247835> Herbe Médicinal :", NombreHerbeMedic)
            .addField("Point de Maîtrisse gagner : ", ExpGain)
            .setTimestamp();
          message.channel.send(LootEmbed)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
      }
      // Loot "Croco" !!
      if (userInfo.MOB.mob === "Croco") {
        const RandomLoot = Math.floor(Math.random() * 5) + 1;
        const NombreDent = Math.floor(Math.random() * 5) + 1;
        const NombreEcaille = Math.floor(Math.random() * 5) + 1;
        const ExpGain = Math.floor(Math.random() * 3) + 2;
        const exp = ExpGain;
        bot.updateUserInfo(message.member, {
              "users.$.EXP.experience": userInfo.EXP.experience + exp
            });
        // Loot : Dent de Croco
        if (RandomLoot === 1 || RandomLoot === 2) {
          const nombre = NombreDent;
          const nom = "Dent";
          bot.updateUserInfo(message.member, {
            "users.$.INVENTAIRE.inventaire.Dent": userInfo.INVENTAIRE.inventaire[nom] + nombre
          });
          const LootEmbed = new MessageEmbed()
            .setColor("#27d200")
            .setDescription("Loots ramassez !")
            .addField("<:Dent_de_croco:694510570732388432> Dent de Croco :", NombreDent)
            .addField("Point de Maîtrisse gagner : ", ExpGain)
            .setTimestamp();
          message.channel.send(LootEmbed)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
        // Loot : Ecaille de Croco
        if (RandomLoot === 3 || RandomLoot === 4) {
          const nombre = NombreEcaille;
          const nom = "Ecaille";
          bot.updateUserInfo(message.member, {
            "users.$.INVENTAIRE.inventaire.Ecaille": userInfo.INVENTAIRE.inventaire[nom] + nombre
          });
          const LootEmbed = new MessageEmbed()
            .setColor("#27d200")
            .setDescription("Loots ramassez !")
            .addField("<:ecaille_de_croco:694506268022538370> Ecaille de Croco :", NombreEcaille)
            .addField("Point de Maîtrisse gagner : ", ExpGain)
            .setTimestamp();
          message.channel.send(LootEmbed)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
        // Loot : Dent de Croco + Ecaille de Croco
        if (RandomLoot === 5) {
          const nombre = NombreDent;
          const nom = "Dent";
          const nombre2 = NombreEcaille;
          const nom2 = "Ecaille";
          bot.updateUserInfo(message.member, {
            "users.$.INVENTAIRE.inventaire.Dent": userInfo.INVENTAIRE.inventaire[nom] + nombre,
            "users.$.INVENTAIRE.inventaire.Ecaille": userInfo.INVENTAIRE.inventaire[nom2] + nombre2
          });
          const LootEmbed = new MessageEmbed()
            .setColor("#27d200")
            .setDescription("Loots rampassez !")
            .addField("<:Dent_de_croco:694510570732388432> Dent de Croco :", NombreDent)
            .addField("<:ecaille_de_croco:694506268022538370> Ecaille de Croco :", NombreEcaille)
            .addField("Point de Maîtrisse gagner : ", ExpGain)
            .setTimestamp();
          message.channel.send(LootEmbed)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
      }
      // Loot "Golem" !!
      if (userInfo.MOB.mob === "Golem") {
        const RandomLoot = Math.floor(Math.random() * 5) + 1;
        const NombreAzurite = Math.floor(Math.random() * 6) + 3;
        const NombreDiamant = Math.floor(Math.random() * 2) + 1;
        const ExpGain = 5;
        const exp = ExpGain;
        bot.updateUserInfo(message.member, {
              "users.$.EXP.experience": userInfo.EXP.experience + exp
            });

        // Loot : Pierre d'Azurite
        if (RandomLoot === 1 || RandomLoot === 2) {
          const nombre = NombreAzurite;
          const nom = "Azurite";
          bot.updateUserInfo(message.member, {
            "users.$.INVENTAIRE.inventaire.Azurite": userInfo.INVENTAIRE.inventaire[nom] + nombre
          });
          const LootEmbed = new MessageEmbed()
            .setColor("#27d200")
            .setDescription("Loots ramassez !")
            .addField("<:Pierre_dazurite:694498949603786792> Pierre d'Azurite :", NombreAzurite)
            .addField("Point de Maîtrisse gagner : ", ExpGain)
            .setTimestamp();
          message.channel.send(LootEmbed)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
        // Loot : Diamant
        if (RandomLoot === 3 || RandomLoot === 4) {
          const nombre = NombreDiamant;
          const nom = "Diamant";
          bot.updateUserInfo(message.member, {
            "users.$.INVENTAIRE.inventaire.Diamant": userInfo.INVENTAIRE.inventaire[nom] + nombre
          });
          const LootEmbed = new MessageEmbed()
            .setColor("#27d200")
            .setDescription("Loots ramassez !")
            .addField("<:Diamant:694513788275130489> Diamant :", NombreDiamant)
            .addField("Point de Maîtrisse gagner : ", ExpGain)
            .setTimestamp();
          message.channel.send(LootEmbed)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
        // Loot : Pierre d'Azurite + Diamant
        if (RandomLoot === 5) {
          const nombre = NombreAzurite;
          const nom = "Azurite";
          const nombre2 = NombreDiamant;
          const nom2 = "Diamant";
          bot.updateUserInfo(message.member, {
            "users.$.INVENTAIRE.inventaire.Azurite": userInfo.INVENTAIRE.inventaire[nom] + nombre,
            "users.$.INVENTAIRE.inventaire.Diamant": userInfo.INVENTAIRE.inventaire[nom2] + nombre2
          });
          const LootEmbed = new MessageEmbed()
            .setColor("#27d200")
            .setDescription("Loots rampassez !")
            .addField("<:Pierre_dazurite:694498949603786792> Pierre d'Azurite :", NombreAzurite)
            .addField("<:Diamant:694513788275130489> Diamant :", NombreDiamant)
            .addField("Point de Maîtrisse gagner : ", ExpGain)
            .setTimestamp();
          message.channel.send(LootEmbed)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
      }
      // Loot "Gimille" !!
      if (userInfo.MOB.mob === "Gimille") {
        const RandomLoot = Math.floor(Math.random() * 5) + 1;
        const NombreCarapace = Math.floor(Math.random() * 4) + 1;
        const NombreMandibule = Math.floor(Math.random() * 2) + 1;
        const ExpGain = Math.floor(Math.random() * 5) + 4;
        const exp = ExpGain;
        bot.updateUserInfo(message.member, {
              "users.$.EXP.experience": userInfo.EXP.experience + exp
            });

        // Loot : Carapace de Gimille
        if (RandomLoot === 1 || RandomLoot === 2) {
          const nombre = NombreCarapace;
          const nom = "Carapace";
          bot.updateUserInfo(message.member, {
            "users.$.INVENTAIRE.inventaire.Carapace": userInfo.INVENTAIRE.inventaire[nom] + nombre
          });

          const LootEmbed = new MessageEmbed()
            .setColor("#27d200")
            .setDescription("Loots ramassez !")
            .addField("<:Carapace_de_Gimille:694518245801328751> Carapace de Gimille :", NombreCarapace)
            .addField("Point de Maîtrisse gagner : ", ExpGain)
            .setTimestamp();
          message.channel.send(LootEmbed)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
        // Loot : Mandibule
        if (RandomLoot === 3 || RandomLoot === 4) {
          const nombre = NombreMandibule;
          const nom = "Mandibule";
          bot.updateUserInfo(message.member, {
            "users.$.INVENTAIRE.inventaire.Mandibule": userInfo.INVENTAIRE.inventaire[nom] + nombre
          });
          const LootEmbed = new MessageEmbed()
            .setColor("#27d200")
            .setDescription("Loots ramassez !")
            .addField("<:Mandibule_de_Gimille:694522865416011816> Mandibule de Gimille :", NombreMandibule)
            .addField("Point de Maîtrisse gagner : ", ExpGain)
            .setTimestamp();
          message.channel.send(LootEmbed)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
        // Loot : Carapace de Gimille + Mandibule
        if (RandomLoot === 5) {
          const nombre = NombreCarapace;
          const nom = "Carapace";
          const nombre2 = NombreMandibule;
          const nom2 = "Mandibule";
          bot.updateUserInfo(message.member, {
            "users.$.INVENTAIRE.inventaire.Carapace": userInfo.INVENTAIRE.inventaire[nom] + nombre,
            "users.$.INVENTAIRE.inventaire.Mandibule": userInfo.INVENTAIRE.inventaire[nom2] + nombre2
          });
          const LootEmbed = new MessageEmbed()
            .setColor("#27d200")
            .setDescription("Loots rampassez !")
            .addField("<:Carapace_de_Gimille:694518245801328751> Carapace de Gimille :", NombreCarapace)
            .addField("<:Mandibule_de_Gimille:694522865416011816> Mandibule de Gimille :", NombreMandibule)
            .addField("Point de Maîtrisse gagner : ", ExpGain)
            .setTimestamp();
          message.channel.send(LootEmbed)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
      }
      // Loot "Wretch" !!
      if (userInfo.MOB.mob === "Wretch") {
        const RandomLoot = Math.floor(Math.random() * 5) + 1;
        const NombreCrâne = 1;
        const NombreSang = Math.floor(Math.random() * 4) + 1;
        const ExpGain = Math.floor(Math.random() * 5) + 1;
        const exp = ExpGain;
        bot.updateUserInfo(message.member, {
              "users.$.EXP.experience": userInfo.EXP.experience + exp
            });

        // Loot : Crâne de Wretch
        if (RandomLoot === 1 || RandomLoot === 2) {
          const nombre = NombreCrâne;
          const nom = "Crâne";
          bot.updateUserInfo(message.member, {
            "users.$.INVENTAIRE.inventaire.Crâne": userInfo.INVENTAIRE.inventaire[nom] + nombre
          });

          const LootEmbed = new MessageEmbed()
            .setColor("#27d200")
            .setDescription("Loots ramassez !")
            .addField("<:Crane_de_Wretch:694566544885284984> Crâne de Wretch :", NombreCrâne)
            .addField("Point de Maîtrisse gagner : ", ExpGain)
            .setTimestamp();
          message.channel.send(LootEmbed)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
        // Loot : Fiole de Sang de Wretch
        if (RandomLoot === 3 || RandomLoot === 4) {
          const nombre = NombreSang;
          const nom = "Sang";
          bot.updateUserInfo(message.member, {
            "users.$.INVENTAIRE.inventaire.Sang": userInfo.INVENTAIRE.inventaire[nom] + nombre
          });

          const LootEmbed = new MessageEmbed()
            .setColor("#27d200")
            .setDescription("Loots ramassez !")
            .addField("<:Fiole_de_sang_de_Wretch:694566605451034645> Fiole de Sang de Wretch :", NombreSang)
            .addField("Point de Maîtrisse gagner : ", ExpGain)
            .setTimestamp();
          message.channel.send(LootEmbed)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
        // Loot : Crâne de Wretch + Fiole de Sang de Wretch
        if (RandomLoot === 5) {
          const nombre = NombreCrâne;
          const nom = "Crâne";
          const nombre2 = NombreSang;
          const nom2 = "Sang";
          bot.updateUserInfo(message.member, {
            "users.$.INVENTAIRE.inventaire.Crâne": userInfo.INVENTAIRE.inventaire[nom] + nombre,
            "users.$.INVENTAIRE.inventaire.Sang": userInfo.INVENTAIRE.inventaire[nom2] + nombre2
          });
          const LootEmbed = new MessageEmbed()
            .setColor("#27d200")
            .setDescription("Loots rampassez !")
            .addField("<:Crane_de_Wretch:694566544885284984> Crâne de Wretch :", NombreCrâne)
            .addField("<:Fiole_de_sang_de_Wretch:694566605451034645> Fiole de Sang de Wretch :", NombreSang)
            .addField("Point de Maîtrisse gagner : ", ExpGain)
            .setTimestamp();
          message.channel.send(LootEmbed)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
      }
      // Loot "Varghulf" !!
      if (userInfo.MOB.mob === "Varghulf") {
        const RandomLoot = Math.floor(Math.random() * 3) + 1;
        const NombreAile = Math.floor(Math.random() * 2) + 1;
        const NombreOreille = Math.floor(Math.random() * 2) + 1;
        const ExpGain = Math.floor(Math.random() * 5) + 4;
        const exp = ExpGain;
        bot.updateUserInfo(message.member, {
              "users.$.EXP.experience": userInfo.EXP.experience + exp
            });

        // Loot : Aile de Varghulf
        if (RandomLoot === 1) {
          const nombre = NombreAile;
          const nom = "Aile";
          bot.updateUserInfo(message.member, {
            "users.$.INVENTAIRE.inventaire.Aile": userInfo.INVENTAIRE.inventaire[nom] + nombre
          });

          const LootEmbed = new MessageEmbed()
            .setColor("#27d200")
            .setDescription("Loots ramassez !")
            .addField("<:Aile_de_Varghulf:694566725496078337> Aile de Varghulf :", NombreAile)
            .addField("Point de Maîtrisse gagner : ", ExpGain)
            .setTimestamp();
          message.channel.send(LootEmbed)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
        // Loot : Oreille de Varghulf
        if (RandomLoot === 2) {
          const nombre = NombreOreille;
          const nom = "Oreille";
          bot.updateUserInfo(message.member, {
            "users.$.INVENTAIRE.inventaire.Oreille": userInfo.INVENTAIRE.inventaire[nom] + nombre
          });

          const LootEmbed = new MessageEmbed()
            .setColor("#27d200")
            .setDescription("Loots ramassez !")
            .addField("<:Oreille_de_Varghulf:694566767284191262> Oreille de Varghulf :", NombreOreille)
            .addField("Point de Maîtrisse gagner : ", ExpGain)
            .setTimestamp();
          message.channel.send(LootEmbed)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
        // Loot : Aile de Varghulf + Oreille de Varghulf
        if (RandomLoot === 3) {
          const nombre = NombreAile;
          const nom = "Aile";
          const nombre2 = NombreOreille;
          const nom2 = "Oreille";
          bot.updateUserInfo(message.member, {
            "users.$.INVENTAIRE.inventaire.Aile": userInfo.INVENTAIRE.inventaire[nom] + nombre,
            "users.$.INVENTAIRE.inventaire.Oreille": userInfo.INVENTAIRE.inventaire[nom2] + nombre2
          });
          const LootEmbed = new MessageEmbed()
            .setColor("#27d200")
            .setDescription("Loots rampassez !")
            .addField("<:Aile_de_Varghulf:694566725496078337> Aile de Varghulf :", NombreAile)
            .addField("<:Oreille_de_Varghulf:694566767284191262> Oreille de Varghulf :", NombreOreille)
            .addField("Point de Maîtrisse gagner : ", ExpGain)
            .setTimestamp();
          message.channel.send(LootEmbed)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
      }
      // Loot "Minotaur" !!
      if (userInfo.MOB.mob === "Minotaur") {
        const RandomLoot = Math.floor(Math.random() * 3) + 1;
        const NombreCorne = Math.floor(Math.random() * 2) + 1;
        const NombreOeil = Math.floor(Math.random() * 2) + 1;
        const ExpGain = Math.floor(Math.random() * 3) + 7;
        const exp = ExpGain;
        bot.updateUserInfo(message.member, {
              "users.$.EXP.experience": userInfo.EXP.experience + exp
            });

        // Loot : Corne de Minotaur
        if (RandomLoot === 1) {
          const nombre = NombreCorne;
          const nom = "Corne";
          bot.updateUserInfo(message.member, {
            "users.$.INVENTAIRE.inventaire.Corne": userInfo.INVENTAIRE.inventaire[nom] + nombre
          });

          const LootEmbed = new MessageEmbed()
            .setColor("#27d200")
            .setDescription("Loots ramassez !")
            .addField("<:Corne_de_Minotaur:694566793213247578> Corne de Minotaur :", NombreCorne)
            .addField("Point de Maîtrisse gagner : ", ExpGain)
            .setTimestamp();
          message.channel.send(LootEmbed)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
        // Loot : Oeil de Minotaur
        if (RandomLoot === 2) {
          const nombre = NombreOeil;
          const nom = "Oeil";
          bot.updateUserInfo(message.member, {
            "users.$.INVENTAIRE.inventaire.Oeil": userInfo.INVENTAIRE.inventaire[nom] + nombre
          });

          const LootEmbed = new MessageEmbed()
            .setColor("#27d200")
            .setDescription("Loots ramassez !")
            .addField("<:Oeil_de_Minotaur:694566836754448455> Oeil de Minotaur :", NombreOeil)
            .addField("Point de Maîtrisse gagner : ", ExpGain)
            .setTimestamp();
          message.channel.send(LootEmbed)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
        // Loot : Corne de Minotaur + Oeil de Minotaur
        if (RandomLoot === 3) {
          const nombre = NombreCorne;
          const nom = "Corne";
          const nombre2 = NombreOeil;
          const nom2 = "Oeil";
          bot.updateUserInfo(message.member, {
            "users.$.INVENTAIRE.inventaire.Corne": userInfo.INVENTAIRE.inventaire[nom] + nombre,
            "users.$.INVENTAIRE.inventaire.Oeil": userInfo.INVENTAIRE.inventaire[nom2] + nombre2
          });
          const LootEmbed = new MessageEmbed()
            .setColor("#27d200")
            .setDescription("Loots rampassez !")
            .addField("<:Corne_de_Minotaur:694566793213247578> Corne de Minotaur :", NombreCorne)
            .addField("<:Oeil_de_Minotaur:694566836754448455> Oeil de Minotaur :", NombreOeil)
            .addField("Point de Maîtrisse gagner : ", ExpGain)
            .setTimestamp();
          message.channel.send(LootEmbed)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
      }
      bot.updateUserInfo(message.member, {
        "users.$.MOB.mob": "Aucun",
        "users.$.MOB.Pv": 0,
        "users.$.MOB.PvBase": 0,
        "users.$.MOB.Niveau": "Aucun",
        "users.$.MOB.Force": 0
      });
    }
    // Random attaque;
    const Attaque = Math.floor(Math.random() * 8) + 1;
    if (Attaque === 1) {
      message.channel.send(`Le ${userInfo.MOB.mob} esquive l'attaque de ${message.author}`)
        .then(msg => msg.delete({ timeout: 180000 }))
        .catch(console.error);
    }
    if (Attaque >= 2 && Attaque <= 5) {
      message.channel.send(`${message.author} attaque le ${userInfo.MOB.mob} et lui inflige ${userInfo.EXP.forceActu} point de vie !`)
        .then(msg => msg.delete({ timeout: 180000 }))
        .catch(console.error);
      const ForceUser = userInfo.EXP.forceActu;
      const NewMobPv=userInfo.MOB.Pv - ForceUser;
      await bot.updateUserInfo(message.member, {
        "users.$.MOB.Pv": NewMobPv
      });
      if (NewMobPv <= 0) {
        const StatsEmbeb = new MessageEmbed()
          .setColor("#27d200")
          .setDescription(`Stats du ${userInfo.MOB.mob}`)
          .setThumbnail(Image)
          .addField("Niveau :", userInfo.MOB.Niveau)
          .addField("Point de vie :", 0)
          .setTimestamp();
        message.channel.send(StatsEmbeb)
          .then(msg => msg.delete({ timeout: 180000 }))
          .catch(console.error);
        setTimeout(LootMob, 2000);
      }
    }
    if (Attaque >= 6) {
      message.channel.send(`${message.author} attaque le ${userInfo.MOB.mob} et lui inflige un critique de ${Math.round((userInfo.EXP.forceActu * 1.5) * 1000) / 1000} point de vie !`)
        .then(msg => msg.delete({ timeout: 180000 }))
        .catch(console.error);
      const ForceUser = Math.round((userInfo.EXP.forceActu * 1.5) * 1000) / 1000;
      const NewMobPv=userInfo.MOB.Pv - ForceUser;
      await bot.updateUserInfo(message.member, {
        "users.$.MOB.Pv": NewMobPv
      });
      if (NewMobPv <= 0) {
        const StatsEmbeb = new MessageEmbed()
          .setColor("#27d200")
          .setDescription(`Stats du ${userInfo.MOB.mob}`)
          .setThumbnail(Image)
          .addField("Niveau :", userInfo.MOB.Niveau)
          .addField("Point de vie :", 0)
          .setTimestamp();
        message.channel.send(StatsEmbeb)
          .then(msg => msg.delete({ timeout: 180000 }))
          .catch(console.error);
        setTimeout(LootMob, 2000);
      }
    }
    // Stats mob
    const userInfo2 = await bot.getUser(message.member);
    if (NewMobPv > 0) {
      const StatsEmbeb = new MessageEmbed()
        .setColor("#27d200")
        .setDescription(`Stats du ${userInfo2.MOB.mob}`)
        .setThumbnail(Image)
        .addField("Niveau :", userInfo2.MOB.Niveau)
        .addField("Point de vie :", NewMobPv, true)
        .addField("Force :", userInfo2.MOB.Force, true)
        .setTimestamp();
      message.channel.send(StatsEmbeb)
        .then(msg => msg.delete({ timeout: 180000 }))
        .catch(console.error);

      // attaque du mob
      const AttaqueMob = Math.floor(Math.random() * 7) + 1;
      if (AttaqueMob === 1 || AttaqueMob === 2) {
        message.channel.send(`${message.author} esquive l'attaque du ${userInfo2.MOB.mob}`)
          .then(msg => msg.delete({ timeout: 180000 }))
          .catch(console.error);
      }
      if (AttaqueMob >= 3 && AttaqueMob <= 5) {
        message.channel.send(`Le ${userInfo2.MOB.mob} attaque ${message.author} et lui inflige ${userInfo2.MOB.Force} point de vie !`)
          .then(msg => msg.delete({ timeout: 180000 }))
          .catch(console.error);
        const ForceMob = userInfo2.MOB.Force;
        const NewPvUser = userInfo2.EXP.PvActu-ForceMob;
        await bot.updateUserInfo(message.member, {
          "users.$.EXP.PvActu": NewPvUser
        });
        if (NewPvUser <= 0) {
          const StatsJoueurEmbeb = new MessageEmbed()
            .setColor("#27d200")
            .setDescription(`Stats de ${message.member.displayName}`)
            .setThumbnail(message.author.avatarURL())
            .addField("Point de vie :", 0)
            .setTimestamp();
          message.channel.send(StatsJoueurEmbeb)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
      }
      if (AttaqueMob >= 6) {
        message.channel.send(`Le ${userInfo2.MOB.mob} attaque ${message.author} et lui inflige un critique de ${Math.round((userInfo2.MOB.Force * 1.5) * 1000) / 1000} point de vie !`)
          .then(msg => msg.delete({ timeout: 180000 }))
          .catch(console.error);
        const ForceMob = Math.round((userInfo2.MOB.Force * 1.5) * 1000) / 1000;
        const NewPvUser = userInfo2.EXP.PvActu-ForceMob;
        await bot.updateUserInfo(message.member, {
          "users.$.EXP.PvActu": NewPvUser 
        });
        if (NewPvUser <= 0) {
          const StatsJoueurEmbeb = new MessageEmbed()
            .setColor("#27d200")
            .setDescription(`Stats de ${message.member.displayName}`)
            .setThumbnail(message.author.avatarURL())
            .addField("Point de vie :", 0)
            .setTimestamp();
          message.channel.send(StatsJoueurEmbeb)
            .then(msg => msg.delete({ timeout: 180000 }))
            .catch(console.error);
        }
      }
    }
    // Stats joueur
    const userInfo3 = await bot.getUser(message.member);
    if (NewPvUser > 0) {
      const StatsJoueurEmbeb = new MessageEmbed()
        .setColor("#27d200")
        .setDescription(`Stats de ${message.member.displayName}`)
        .setThumbnail(message.author.avatarURL())
        .addField("Point de vie :", NewPvUser, true)
        .addField("Force :", userInfo3.EXP.forceActu, true)
        .setTimestamp();
      message.channel.send(StatsJoueurEmbeb)
        .then(msg => msg.delete({ timeout: 180000 }))
        .catch(console.error);
    } else {
      message.channel.send(`${message.author} viens d'être mis KO.... Il lui faut trois minutes avant de se réveiller.\nLe ${userInfo3.MOB.mob} vous laisse giser au sol et s'enfuit !!\n(Vous vous réveillerez à 10 point de vie, allez directement vous faire soigner à votre réveille !!)`)
        .then(msg => msg.delete({ timeout: 180000 }))
        .catch(console.error);
      bot.updateUserInfo(message.member, {
        "users.$.MOB.mob": "Aucun",
        "users.$.MOB.Pv": 0,
        "users.$.MOB.PvBase": 0,
        "users.$.MOB.Niveau": "Aucun",
        "users.$.MOB.Force": 0
      });

      message.member.roles.add("693606393781157968");
      async function KO() {
        bot.updateUserInfo(message.member, {
          "users.$.EXP.PvActu": 10
        });
        message.member.roles.remove("693606393781157968");
      }
      setTimeout(KO, 180000);
    }
  } else {
    message.delete();
    message.channel.send("Vous n'êtes pas en combat !!")
      .then(msg => msg.delete({ timeout: 6000 }))
      .catch(console.error);
  }
};

module.exports.help = {
  name: "attaque",
  aliases: ["attack"],
  category: "pve",
  description: "Permet, si vous êtes observé par un mob, de l'attaquer.\n**(commande à répéter jusqu'à la fin du combat)**",
  cooldown: 3,
  args: false
};
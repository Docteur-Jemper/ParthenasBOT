const { MessageEmbed } = require("discord.js");
const MOB = require("../../assest/Mob/nature");

module.exports.run = async (bot, message, args, data, userInfo) => {
  message.delete();
  for (let i=1 ; i<MOB.length ; i=i+1) {
    if (userInfo.MOB.mob === MOB[i].mob) return combat(MOB[i]);
  };
  return message.channel.send("Vous n'êtes pas en combat !!")
    .then(msg => msg.delete({ timeout: 6000 }))
    .catch(console.error);


  // Loot Mob !!
  async function LootMob(MOB) {
      message.channel.send(`${message.author} a vaincu un ${userInfo.MOB.mob} après un rude combat !`);

      const RandomLoot = Math.floor(Math.random() * 5) + 1;

      const Nombre = [
        [Math.floor(Math.random() * 2) + 1,"Peau"],
        [Math.floor(Math.random() * 3) + 1,"Griffe"],
        [1,"Viande"],
        [Math.floor(Math.random() * 2) + 1,"Bois"],
        [Math.floor(Math.random() * 4) + 1,"Sabot"],
        [Math.floor(Math.random() * 3) + 1,"Pollen"],
        [Math.floor(Math.random() * 3) + 1,"Azurite"],
        [Math.floor(Math.random() * 4) + 1,"HerbeMedic"],
        [Math.floor(Math.random() * 5) + 1,"Dent"],
        [Math.floor(Math.random() * 5) + 1,"Ecaille"],
        [Math.floor(Math.random() * 6) + 3,"Azurite"],
        [Math.floor(Math.random() * 2) + 1,"Diamant"],
        [Math.floor(Math.random() * 4) + 1,"Carapace"],
        [Math.floor(Math.random() * 2) + 1,"Mandibule"],
        [1,"Crâne"],
        [Math.floor(Math.random() * 4) + 1,"Sang"],
        [Math.floor(Math.random() * 2) + 1,"Aile"],
        [Math.floor(Math.random() * 2) + 1,"Oreille"],
        [Math.floor(Math.random() * 2) + 1,"Corne"],
        [Math.floor(Math.random() * 2) + 1,"Oeil"]
      ];

      // EXP donné par le mob
      const ExpGain = Math.floor(Math.random() * MOB.ExpGain[0]) + MOB.ExpGain[1];
      bot.updateUserInfo(message.member, {"users.$.EXP.experience": userInfo.EXP.experience + ExpGain});

      // Loot 1 du mob
      if (RandomLoot === 1 || RandomLoot === 2) {
        for (let k=0 ; k<Nombre.length ; k=k+1) {
          if (MOB.loot[0][1] === Nombre[k][1]) {
            GiveLoot(MOB.loot[0][1],Nombre[k][0]);
            const LootEmbed = new MessageEmbed()
              .setColor("#27d200")
              .setDescription("Loots ramassez !")
              .addField(MOB.loot[0][0], Nombre[k][0])
              .addField("Point de Maîtrisse gagner : ", ExpGain)
              .setTimestamp();
            message.channel.send(LootEmbed)
              .then(msg => msg.delete({ timeout: 180000 }))
              .catch(console.error);}
        };
      }
      // Loot 2 du mob
      if (RandomLoot === 3 || RandomLoot === 4) {
        for (let j=0 ; j<Nombre.length ; j=j+1) {
          if (MOB.loot[1][1] === Nombre[j][1]) {
            GiveLoot(MOB.loot[1][1],Nombre[j][0]);
            const LootEmbed = new MessageEmbed()
              .setColor("#27d200")
              .setDescription("Loots ramassez !")
              .addField(MOB.loot[1][0], Nombre[j][0])
              .addField("Point de Maîtrisse gagner : ", ExpGain)
              .setTimestamp();
            message.channel.send(LootEmbed)
              .then(msg => msg.delete({ timeout: 180000 }))
              .catch(console.error);
          }
        };
      }
      // Loot 1 et Loot 2 du mob
      if (RandomLoot === 5) {
        for (let j=0 ; j<Nombre.length ; j=j+1) {
          if (MOB.loot[0][1] === Nombre[j][1]) {
            k=j
            for (let j=0 ; j<Nombre.length ; j=j+1) {
              if (MOB.loot[1][1] === Nombre[j][1]) {
                GiveLoot(MOB.loot[0][1],Nombre[k][0]);
                GiveLoot(MOB.loot[1][1],Nombre[j][0]);
                const LootEmbed = new MessageEmbed()
                  .setColor("#27d200")
                  .setDescription("Loots ramassez !")
                  .addField(MOB.loot[0][0], Nombre[k][0])
                  .addField(MOB.loot[1][0], Nombre[j][0])
                  .addField("Point de Maîtrisse gagner : ", ExpGain)
                  .setTimestamp();
                message.channel.send(LootEmbed)
                  .then(msg => msg.delete({ timeout: 180000 }))
                  .catch(console.error);
              }
            }
          }
        };
      }

        // Reset mob après sa mort
        bot.updateUserInfo(message.member, {
          "users.$.MOB.mob": "Aucun",
          "users.$.MOB.Pv": 0,
          "users.$.MOB.PvBase": 0,
          "users.$.MOB.Niveau": "Aucun",
          "users.$.MOB.Force": 0
        });

  }
  function Peau(nombre) {
    bot.updateUserInfo(message.member, {
      "users.$.INVENTAIRE.inventaire.Peau": userInfo.INVENTAIRE.inventaire.Peau + nombre
    });}
  function Griffe(nombre) {
    bot.updateUserInfo(message.member, {
      "users.$.INVENTAIRE.inventaire.Griffe": userInfo.INVENTAIRE.inventaire.Griffe + nombre
    });}
  function Viande(nombre) {
    bot.updateUserInfo(message.member, {
      "users.$.INVENTAIRE.inventaire.Viande": userInfo.INVENTAIRE.inventaire.Viande + nombre
    });}
  function Bois(nombre) {
    bot.updateUserInfo(message.member, {
      "users.$.INVENTAIRE.inventaire.Bois": userInfo.INVENTAIRE.inventaire.Bois + nombre
    });}
  function Sabot(nombre) {
    bot.updateUserInfo(message.member, {
      "users.$.INVENTAIRE.inventaire.Sabot": userInfo.INVENTAIRE.inventaire.Sabot + nombre
    });}
  function Pollen(nombre) {
    bot.updateUserInfo(message.member, {
      "users.$.INVENTAIRE.inventaire.Pollen": userInfo.INVENTAIRE.inventaire.Pollen + nombre
    });}
  function Azurite(nombre) {
    bot.updateUserInfo(message.member, {
      "users.$.INVENTAIRE.inventaire.Azurite": userInfo.INVENTAIRE.inventaire.Azurite + nombre
    });}
  function HerbeMedic(nombre) {
    bot.updateUserInfo(message.member, {
      "users.$.INVENTAIRE.inventaire.HerbeMedic": userInfo.INVENTAIRE.inventaire.HerbeMedic + nombre
    });}
  function Dent(nombre) {
    bot.updateUserInfo(message.member, {
      "users.$.INVENTAIRE.inventaire.Dent": userInfo.INVENTAIRE.inventaire.Dent + nombre
    });}
  function Ecaille(nombre) {
    bot.updateUserInfo(message.member, {
      "users.$.INVENTAIRE.inventaire.Ecaille": userInfo.INVENTAIRE.inventaire.Ecaille + nombre
    });}
  function Diamant(nombre) {
    bot.updateUserInfo(message.member, {
      "users.$.INVENTAIRE.inventaire.Diamant": userInfo.INVENTAIRE.inventaire.Diamant + nombre
    });}
  function Carapace(nombre) {
    bot.updateUserInfo(message.member, {
      "users.$.INVENTAIRE.inventaire.Carapace": userInfo.INVENTAIRE.inventaire.Carapace + nombre
    });}
  function Mandibule(nombre) {
    bot.updateUserInfo(message.member, {
      "users.$.INVENTAIRE.inventaire.Mandibule": userInfo.INVENTAIRE.inventaire.Mandibule + nombre
    });}
  function Crâne(nombre) {
    bot.updateUserInfo(message.member, {
      "users.$.INVENTAIRE.inventaire.Crâne": userInfo.INVENTAIRE.inventaire.Crâne + nombre
    });}
  function Sang(nombre) {
    bot.updateUserInfo(message.member, {
      "users.$.INVENTAIRE.inventaire.Sang": userInfo.INVENTAIRE.inventaire.Sang + nombre
    });}
  function Aile(nombre) {
    bot.updateUserInfo(message.member, {
      "users.$.INVENTAIRE.inventaire.Aile": userInfo.INVENTAIRE.inventaire.Aile + nombre
    });}
  function Oreille(nombre) {
    bot.updateUserInfo(message.member, {
      "users.$.INVENTAIRE.inventaire.Oreille": userInfo.INVENTAIRE.inventaire.Oreille + nombre
    });}
  function Corne(nombre) {
    bot.updateUserInfo(message.member, {
      "users.$.INVENTAIRE.inventaire.Corne": userInfo.INVENTAIRE.inventaire.Corne + nombre
    });}
  function Oeil(nombre) {
    bot.updateUserInfo(message.member, {
      "users.$.INVENTAIRE.inventaire.Oeil": userInfo.INVENTAIRE.inventaire.Oeil + nombre
    });}

  function GiveLoot(NomLoot, nombre) {
    if (NomLoot === "Peau") Peau(nombre);
    if (NomLoot === "Griffe") Griffe(nombre);
    if (NomLoot === "Viande") Viande(nombre);
    if (NomLoot === "Bois") Bois(nombre);
    if (NomLoot === "Sabot") Sabot(nombre);
    if (NomLoot === "Pollen") Pollen(nombre);
    if (NomLoot === "Azurite") Azurite(nombre);
    if (NomLoot === "HerbeMedic") HerbeMedic(nombre);
    if (NomLoot === "Dent") Dent(nombre);
    if (NomLoot === "Ecaille") Ecaille(nombre);
    if (NomLoot === "Diamant") Diamant(nombre);
    if (NomLoot === "Carapace") Carapace(nombre);
    if (NomLoot === "Mandibule") Mandibule(nombre);
    if (NomLoot === "Crâne") Crâne(nombre);
    if (NomLoot === "Sang") Sang(nombre);
    if (NomLoot === "Aile") Aile(nombre);
    if (NomLoot === "Oreille") Oreille(nombre);
    if (NomLoot === "Corne") Corne(nombre);
    if (NomLoot === "Oeil") Oeil(nombre);
  }

  async function combat(MOB) {
    // Vérification du channel
    if (message.channel.id !== MOB.channel) return message.channel
      .send(`Le ${userInfo.MOB.mob} ne vous attaque pas ici mais dans le channel <#${MOB.channel}>`)
      .then(msg => msg.delete({ timeout: 6000 }))
      .catch(console.error);

    // Random attaque;
    const Attaque = Math.floor(Math.random() * 8) + 1;
    var NewMobPv=userInfo.MOB.Pv;
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
      NewMobPv=userInfo.MOB.Pv - ForceUser;
      await bot.updateUserInfo(message.member, {
        "users.$.MOB.Pv": NewMobPv
      });
      if (NewMobPv <= 0) {
        const StatsEmbeb = new MessageEmbed()
          .setColor("#27d200")
          .setDescription(`Stats du ${userInfo.MOB.mob}`)
          .setThumbnail(MOB.Image)
          .addField("Niveau :", userInfo.MOB.Niveau)
          .addField("Point de vie :", 0)
          .setTimestamp();
        message.channel.send(StatsEmbeb)
          .then(msg => msg.delete({ timeout: 180000 }))
          .catch(console.error);
        setTimeout(LootMob(MOB), 2000);
      }
    }
    if (Attaque >= 6) {
      message.channel.send(`${message.author} attaque le ${userInfo.MOB.mob} et lui inflige un critique de ${Math.round((userInfo.EXP.forceActu * 1.5) * 1000) / 1000} point de vie !`)
        .then(msg => msg.delete({ timeout: 180000 }))
        .catch(console.error);
      const ForceUser = Math.round((userInfo.EXP.forceActu * 1.5) * 1000) / 1000;
      NewMobPv=userInfo.MOB.Pv - ForceUser;
      await bot.updateUserInfo(message.member, {
        "users.$.MOB.Pv": NewMobPv
      });
      if (NewMobPv <= 0) {
        const StatsEmbeb = new MessageEmbed()
          .setColor("#27d200")
          .setDescription(`Stats du ${userInfo.MOB.mob}`)
          .setThumbnail(MOB.Image)
          .addField("Niveau :", userInfo.MOB.Niveau)
          .addField("Point de vie :", 0)
          .setTimestamp();
        message.channel.send(StatsEmbeb)
          .then(msg => msg.delete({ timeout: 180000 }))
          .catch(console.error);
        setTimeout(LootMob(MOB), 2000);
      }
    }
    // Stats mob
    const userInfo2 = await bot.getUser(message.member);
    if (NewMobPv > 0) {
      const StatsEmbeb = new MessageEmbed()
        .setColor("#27d200")
        .setDescription(`Stats du ${userInfo2.MOB.mob}`)
        .setThumbnail(MOB.Image)
        .addField("Niveau :", userInfo2.MOB.Niveau)
        .addField("Point de vie :", NewMobPv, true)
        .addField("Force :", userInfo2.MOB.Force, true)
        .setTimestamp();
      message.channel.send(StatsEmbeb)
        .then(msg => msg.delete({ timeout: 180000 }))
        .catch(console.error);

      // attaque du mob
      const AttaqueMob = Math.floor(Math.random() * 7) + 1;
      var NewPvUser = userInfo2.EXP.PvActu;
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
        NewPvUser = userInfo2.EXP.PvActu-ForceMob;
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
        NewPvUser = userInfo2.EXP.PvActu-ForceMob;
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
  };
};

module.exports.help = {
  name: "attaque",
  aliases: ["attack"],
  category: "pve",
  description: "Permet, si vous êtes observé par un mob, de l'attaquer.\n**(commande à répéter jusqu'à la fin du combat)**",
  cooldown: 3,
  args: false
};

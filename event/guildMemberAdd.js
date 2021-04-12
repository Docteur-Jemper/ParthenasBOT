const { MessageEmbed } = require("discord.js");
const { Guild } = require("../models/main");

module.exports = async (bot, member) => {
  const data = await bot.getGuild(member.guild);
  let msg = data.welcomeMessage;
  if (msg.includes("{{user}}")) msg = msg.replace("{{user}}", member);

  const embed = new MessageEmbed()
    .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
    .setColor("#c6cc00")
    .setFooter("Un utilisateur à rejoint")
    .setTimestamp();

  bot.channels.cache.get("568497197331513377").send(msg);
  bot.channels.cache.get("654756085877702656").send(embed);

  await Guild.updateOne(
    { guildID: member.guild.id },
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
};

/* eslint-disable no-redeclare */
/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
const { MessageEmbed } = require("discord.js");
const MOB = require("../../assest/Mob/nature");

module.exports.run = async (bot, message, args, data, userInfo) => {
  message.delete();
  if (message.channel.id !== "569098535015022612") {
    message.channel.send("Merci d'executer cette commande dans le bon channel (<#569098535015022612>)")
      .then(msg => msg.delete({ timeout: 6000 }))
      .catch(console.error);
    return;
  }
  
  InventaireLIST=[
    [userInfo.INVENTAIRE.inventaire.Peau,1,0],
    [userInfo.INVENTAIRE.inventaire.Griffe,1,1],
    [userInfo.INVENTAIRE.inventaire.Viande,2,0],
    [userInfo.INVENTAIRE.inventaire.Bois,2,1],
    [userInfo.INVENTAIRE.inventaire.Sabot,3,0],
    [userInfo.INVENTAIRE.inventaire.Dent,5,0],
    [userInfo.INVENTAIRE.inventaire.Ecaille,5,1],
    [userInfo.INVENTAIRE.inventaire.Carapace,7,0],
    [userInfo.INVENTAIRE.inventaire.Mandibule,7,1],
    [userInfo.INVENTAIRE.inventaire.Crâne,8,0],
    [userInfo.INVENTAIRE.inventaire.Sang,8,1],
    [userInfo.INVENTAIRE.inventaire.Aile,9,0],
    [userInfo.INVENTAIRE.inventaire.Oreille,9,1],
    [userInfo.INVENTAIRE.inventaire.Corne,10,0],
    [userInfo.INVENTAIRE.inventaire.Oeil,10,1],
    [userInfo.INVENTAIRE.inventaire.Pollen,3,1],
    [userInfo.INVENTAIRE.inventaire.HerbeMedic,4,1],
    [userInfo.INVENTAIRE.inventaire.Azurite,6,0],
    [userInfo.INVENTAIRE.inventaire.Diamant,6,1]
  ]
  let inventory = "--------------------";
  for (i=0 ; i<InventaireLIST.length ; i=i+1){
    if (InventaireLIST[i][0] > 0) {
      inventory = `${inventory}\n${MOB[InventaireLIST[i][1]].loot[InventaireLIST[i][2]][0]}  ${InventaireLIST[i][0]}`;
    }
  }
  // équipement !
  const équip = `Armure : ${userInfo.INVENTAIRE.équipement.Armure}\nArme : ${userInfo.INVENTAIRE.équipement.Arme}\nTalisman : ${userInfo.INVENTAIRE.équipement.Talisman}`;

  const InvEmbeb = new MessageEmbed()
    .setColor("#00bfff")
    .setDescription(`Inventaire de **${message.member.displayName}**`)
    .setThumbnail(message.author.avatarURL())
    .addField("Équipement", équip)
    .addField("Force", `${userInfo.EXP.forceActu} / ${userInfo.EXP.force}`, true)
    .addField("Pv", `${userInfo.EXP.PvActu} / ${userInfo.EXP.Pv}`, true)
    .addField("Objets", inventory)
    .setTimestamp();
  message.channel.send(InvEmbeb);
};

module.exports.help = {
  name: "inventaire",
  aliases: ["inventory", "inv"],
  category: "rp",
  description: "Renvoie votre inventaire (équipement + PV/FORCE + objet).\n**(seulement dans <#569098535015022612>)**",
  cooldown: 10,
  args: false
};

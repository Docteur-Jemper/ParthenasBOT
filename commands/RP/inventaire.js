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
  console.log(userInfo.INVENTAIRE.inventaire[2],userInfo.INVENTAIRE.inventaire[6],userInfo.INVENTAIRE.inventaire[9])
  // équipement !
  const équip = `Armure : ${userInfo.INVENTAIRE.équipement.Armure}\nArme : ${userInfo.INVENTAIRE.équipement.Arme}\nTalisman : ${userInfo.INVENTAIRE.équipement.Talisman}`;
  // inventaire !
  let inventory = "--------------------";
  // 1
  if (userInfo.INVENTAIRE.inventaire.Peau > 0) {
    inventory = `${inventory}\n<:Peau_de_loup:694189902702837800> Peau de Loup : ${userInfo.INVENTAIRE.inventaire.Peau}`;
  }
  // 2
  if (userInfo.INVENTAIRE.inventaire.Griffe > 0) {
    inventory = `${inventory}\n<:Griffe_de_loup:694189763590094891> Griffe de Loup : ${userInfo.INVENTAIRE.inventaire.Griffe}`;
  }
  // 3
  if (userInfo.INVENTAIRE.inventaire.Viande > 0) {
    inventory = `${inventory}\n<:Viande_de_cerf:694210828462719006> Viande de Cerf : ${userInfo.INVENTAIRE.inventaire.Viande}`;
  }
  // 4
  if (userInfo.INVENTAIRE.inventaire.Bois > 0) {
    inventory = `${inventory}\n<:Bois_de_cerf:694208793013256292> Bois de Cerf : ${userInfo.INVENTAIRE.inventaire.Bois}`;
  }
  // 5
  if (userInfo.INVENTAIRE.inventaire.Sabot > 0) {
    inventory = `${inventory}\n<:Sabot_de_Pripom:694236178911592458> Sabot de Pripom : ${userInfo.INVENTAIRE.inventaire.Sabot}`;
  }
  // 6
  if (userInfo.INVENTAIRE.inventaire.Dent > 0) {
    inventory = `${inventory}\n<:Dent_de_croco:694510570732388432> Dent de Croco: ${userInfo.INVENTAIRE.inventaire.Dent}`;
  }
  // 7
  if (userInfo.INVENTAIRE.inventaire.Ecaille > 0) {
    inventory = `${inventory}\n<:ecaille_de_croco:694506268022538370> Ecaille de Croco : ${userInfo.INVENTAIRE.inventaire.Ecaille}`;
  }
  // 8
  if (userInfo.INVENTAIRE.inventaire.Carapace > 0) {
    inventory = `${inventory}\n<:Carapace_de_Gimille:694518245801328751> Carapace de Gimille : ${userInfo.INVENTAIRE.inventaire.Carapace}`;
  }
  // 9
  if (userInfo.INVENTAIRE.inventaire.Mandibule > 0) {
    inventory = `${inventory}\n<:Mandibule_de_Gimille:694522865416011816> Mandibule de Gimille : ${userInfo.INVENTAIRE.inventaire.Mandibule}`;
  }
  // 10
  if (userInfo.INVENTAIRE.inventaire.Crâne > 0) {
    inventory = `${inventory}\n<:Crane_de_Wretch:694566544885284984> Crâne de Wretch : ${userInfo.INVENTAIRE.inventaire.Crâne}`;
  }
  // 11
  if (userInfo.INVENTAIRE.inventaire.Sang > 0) {
    inventory = `${inventory}\n<:Fiole_de_sang_de_Wretch:694566605451034645> Fiole de Sang de Wretch : ${userInfo.INVENTAIRE.inventaire.Sang}`;
  }
  // 12
  if (userInfo.INVENTAIRE.inventaire.Aile > 0) {
    inventory = `${inventory}\n<:Aile_de_Varghulf:694566725496078337> Aile de Varghulf : ${userInfo.INVENTAIRE.inventaire.Aile}`;
  }
  // 13
  if (userInfo.INVENTAIRE.inventaire.Oreille > 0) {
    inventory = `${inventory}\n<:Oreille_de_Varghulf:694566767284191262> Oreille de Varghulf : ${userInfo.INVENTAIRE.inventaire.Oreille}`;
  }
  // 14
  if (userInfo.INVENTAIRE.inventaire.Corne > 0) {
    inventory = `${inventory}\n<:Corne_de_Minotaur:694566793213247578> Corne de Minotaur : ${userInfo.INVENTAIRE.inventaire.Corne}`;
  }
  // 15
  if (userInfo.INVENTAIRE.inventaire.Oeil > 0) {
    inventory = `${inventory}\n<:Oeil_de_Minotaur:694566836754448455> Oeil de Minotaur : ${userInfo.INVENTAIRE.inventaire.Oeil}`;
  }
  // 16
  if (userInfo.INVENTAIRE.inventaire.Pollen > 0) {
    inventory = `${inventory}\n<:Pollen_de_Pripom:694236079498461284> Pollen de Pripom : ${userInfo.INVENTAIRE.inventaire.Pollen}`;
  }
  // 17
  if (userInfo.INVENTAIRE.inventaire.HerbeMedic > 0) {
    inventory = `${inventory}\n<:Herbe_Medicinal:694502875929247835> Herbe Medicinal : ${userInfo.INVENTAIRE.inventaire.HerbeMedic}`;
  }
  // 18
  if (userInfo.INVENTAIRE.inventaire.Azurite > 0) {
    inventory = `${inventory}\n<:Pierre_dazurite:694498949603786792> Pierre d'Azurite : ${userInfo.INVENTAIRE.inventaire.Azurite}`;
  }
  // 19
  if (userInfo.INVENTAIRE.inventaire.Diamant > 0) {
    inventory = `${inventory}\n<:Diamant:694513788275130489> Diamant : ${userInfo.INVENTAIRE.inventaire.Diamant}`;
  }

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

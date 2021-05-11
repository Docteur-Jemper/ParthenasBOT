const Discord = require("discord.js");

module.exports.run = async (bot, message, args, data, userInfo) => {
  const shop = require("../../assest/shop/shopK.json");
  message.delete();


};

module.exports.help = {
  name: "konor",
  aliases: "",
  category: "pnj",
  description: "Il s'agit de la commande pour parler à `Konor Esya`\n(description de se PNJ disponible dans <#568584015133540382>)",
  cooldown: 6,
  args: false
};

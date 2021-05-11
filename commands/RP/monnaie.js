const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args, data, userInfo) => {
  message.delete();
  if (message.channel.id !== "568915973017567267") {
    message.channel.send("Veillez faire cette commande dans le bon channel (<#568915973017567267>)")
      .then(msg => msg.delete({ timeout: 6000 }))
      .catch(console.error);
    return;
  }
  const userMonnaieEmbeb = new MessageEmbed()
    .setAuthor(message.author.username)
    .setColor("#27d200")
    .setThumbnail(message.author.avatarURL())
    .addField("Argent détenue sur vous :", `${userInfo.MONNAIE.monnaie} <:Money:568729372945678337>`)
    .setTimestamp();
  message.channel.send(userMonnaieEmbeb);
};

module.exports.help = {
  name: "monnaie",
  aliases: ["money"],
  category: "rp",
  description: "Renvoie l'argent que vous possédez sur vous.\n**(seulement dans <#568915973017567267>)**",
  cooldown: 10,
  args: false
};

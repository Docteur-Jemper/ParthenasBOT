const { MessageEmbed } = require("discord.js");

module.exports.run = (bot, message, args) => {
  message.delete();
  const pollEmbeb = new MessageEmbed()
    .setTitle(`Sondage créer par ${message.author.username}`)
    .setColor("#27d200")
    .setFooter("Appuyez sur les réactions ci-dessous.")
    .setDescription(args.join(" "));

  message.channel.send(pollEmbeb).then(async msg => {
    await msg.react("✅");
    await msg.react("❌");
  });
};

module.exports.help = {
  name: "poll",
  aliases: ["sondage"],
  category: "moderation",
  description: "Commande pour faire des sondages\n**(réservé au staff)**",
  usage: "<question>",
  permissions: true,
  args: true
};

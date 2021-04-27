const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const categoryList = readdirSync("./commands");

module.exports.run = (bot, message, args, data) => {
  message.delete();
  if (message.channel.parent.name === "Parthénas" ||
      message.channel.parent.name === "»»»»»『áthiktos』«««««" ||
      message.channel.parent.name === "»»»»»『ypsós』«««««" ||
      message.channel.parent.name === "»»»『kryfó-chorió』«««" ||
      message.channel.parent.name === "»»»»»『ifaísteio』«««««") {
    return message.channel.send(`(:x: Ne faites pas cette commande dans un channel RP ${message.author} !!)`)
      .then(msg => msg.delete({ timeout: 6000 }))
      .catch(console.error);
  }
  if (!args.length) {
    const embed = new MessageEmbed()
      .setColor("#27d200")
      .addField("Liste des commandes", `Une liste de toutes les sous-catégories disponibles et leur commandes.\nPour plus d'informations sur une commande, tapez \`${data.prefix}info <commande_nom>\`.`)
      .setFooter(message.author.tag, message.author.avatarURL())
      .setTimestamp();

    for (const category of categoryList) {
      embed.addField(
        `*${category}*`,
        `\`${bot.commands.filter(cat => cat.help.category === category.toLowerCase()).map(cmd => cmd.help.name).join("`, `")}\``
      );
    }
    return message.channel.send(embed)
      .then(msg => msg.delete({ timeout: 180000 }))
      .catch(console.error);
  }
  const command = bot.commands.get(args[0].toLowerCase()) || bot.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0].toLowerCase()));
  if (command) {
    const embed = new MessageEmbed()
      .setColor("#27d200")
      .setTitle(`\`${command.help.name}\``)
      .addField("Description", `${command.help.description}\n*(cooldown: ${command.help.cooldown || "2"} secondes)*`)
      .addField("Utilisation", command.help.usage ? `${data.prefix}${command.help.name} ${command.help.usage}` : `${data.prefix}${command.help.name}`, true)
      .setFooter(message.author.tag, message.author.avatarURL())
      .setTimestamp();
    if (command.help.aliases.length >= 1) embed.addField("Alias", `\`${command.help.aliases.join("`, `")}\``, true);
  
    return message.channel.send(embed)
      .then(msg => msg.delete({ timeout: 180000 }))
      .catch(console.error);
  } else message.reply("aucune commande reconnue").then(msg => msg.delete({ timeout: 6000 })).catch(console.error);
};

module.exports.help = {
  name: "info",
  aliases: ["help"],
  category: "hrp",
  description: "Renvoie une liste de commande ou les informations sur une seule !",
  cooldown: 10,
  usage: "***ou*** $info <commande_nom>",
  args: false
};

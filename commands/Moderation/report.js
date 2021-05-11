const { MessageEmbed } = require("discord.js");
const isFirstNum = c => /\d/.test(c);

module.exports.run = async (bot, message, args) => {
  message.delete();
  const user = message.mentions.users.first();
  const raison = args[1];
  if (!raison) return message.reply("indiquer une raison");
  if (!user) return message.reply("mentionner l'utilisateur à report !");

  const embed = new MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setThumbnail(user.displayAvatarURL())
    .addFields(
      { name: "Reporté", value: user.username, inline: true },
      { name: "Lien du message", value: isFirstNum(raison.charAt(0)) ? `[Clique ici !](https://discordapp.com/channels/${message.guild.id}/${message.channel.id}/${args[1]})` : "Aucun lien précisé", inline: true },
      { name:"Raison", value: isFirstNum(raison.charAt(0)) ? args.slice(args.indexOf(args[2])).join(" ") : args.slice(args.indexOf(args[1])).join(" ") }
    )
    .setTimestamp();
    
  bot.channels.cache.get("686366804142194850").send(embed);
};

module.exports.help = {
  name: "report",
  aliases: "",
  category: "moderation",
  description: "Sert à report un utilisateur\n**(réservé au staff)**",
  usage: "<mention> [<id_message>] <Raison>",
  permissions: true,
  args: true
};

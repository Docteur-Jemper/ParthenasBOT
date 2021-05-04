/* eslint-disable no-negated-condition */
/* eslint-disable no-unused-vars */
const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const user = message.guild.member(message.mentions.users.first());
  function Delete() {
    message.delete();
  }
  if (!user) {
    if (isNaN(args[0]) || (args[0] < 1 || args[0] > 100)) {
      setTimeout(Delete, 5000);
      return message.reply("il faut spécifié un ***nombre*** entre 1 et 100")
        .then(msg => msg.delete({ timeout: 5000 }))
        .catch(console.error);
    }
    const messages = await message.channel.messages.fetch({
      limit: Math.min(args[0], 100),
      before: message.id
    });
    await message.channel.bulkDelete(messages);
    setTimeout(Delete, 3000);

    const embedPurge = new MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setColor("#461468")
      .setDescription(`**Action**: purge\n**Nbr de message**: ${args[0]}\n**Salon**: ${message.channel}`);

    bot.channels.cache.get("654756085877702656").send(embedPurge);
  } else {
    if (isNaN(args[1]) || (args[1] < 1 || args[1] > 100)) {
      setTimeout(Delete, 5000);
      return message.reply("il faut spécifié un ***nombre*** entre 1 et 100")
        .then(msg => msg.delete({ timeout: 5000 }))
        .catch(console.error);
    }
    if (message.length === 0) {
      setTimeout(Delete, 8000);
      return message.reply("aucun message à supprimer pour cet utilisateur ")
        .then(msg => msg.delete({ timeout: 8000 }))
        .catch(console.error);
    }
    const messages = (await message.channel.messages.fetch({
      limit: Math.min(100),
      before: message.id
    })).filter(a => a.author.id === user.id).array();
    messages.length = Math.min(args[1], messages.length);

    if (message.length === 1) await message[0].delete();
    else await message.channel.bulkDelete(messages);
    setTimeout(Delete, 3000);

    const embedPrune = new MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setColor("#461468")
      .setDescription(`**Action**: purge\n**Utilisateur**: ${args[0]}\n**Nbr de message**: ${args[1]}\n**Salon**: ${message.channel}`);

    bot.channels.cache.get("654756085877702656").send(embedPrune);
  }
};

module.exports.help = {
  name: "purge",
  aliases: ["clear"],
  category: "moderation",
  description: "Supprime un ou plusieurs messages d'un channel ou les messages d'un utilisateur\n**(réservé au staff)**",
  usage: "<nbr_message> ou <mention> <nbr_message>",
  isUserAdmin: false,
  permissions: true,
  args: true
};

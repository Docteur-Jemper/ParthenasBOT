const { MessageEmbed } = require("discord.js");

module.exports = async (bot, message) => {
  /*
  const fetchGuildAuditLogs = await message.guild.fetchAuditLogs({
    limit: 1,
    type: "MESSAGE_DELETE"
  });
  const latestMessageDelete = fetchGuildAuditLogs.entries.first();
  const { executor } = latestMessageDelete;
  if (executor.bot) return;
  if (executor.id === "402490840666210317") return;

  const embed = new MessageEmbed()
    .setAuthor("Suppression d'un message")
    .setColor("#490000")
    .setDescription(`**Action**: suppression de message\n**Message supprimé**: ${message.content || "Un message de log ou un embed !"}\n**Auteur du message**: ${message.author}`)
    .setTimestamp()
    .setFooter(executor.username, executor.displayAvatarURL());

  bot.channels.cache.get("654756085877702656").send(embed);
  */
};

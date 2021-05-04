module.exports = async (bot, guild) => {
  await bot.createGuild({ guildID: guild.id });
};

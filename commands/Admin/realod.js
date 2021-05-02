module.exports.run = async (bot, message) => {
  if (message.author.id !== "402490840666210317") return;
  await message.delete();
  await bot.channels.cache.get("654756085877702656").send("Le bot redémarre !");
  process.exit();
};

module.exports.help = {
  name: "reload",
  aliases: "",
  category: "admin",
  description: "Relance le bot\n**(réservé au créateur)**",
  usage: "",
  isUserAdmin: false,
  permissions: true,
  args: false
};

const { readdirSync } = require("fs");

const loadCommands = (bot, dir = "./commands/") => {
  console.log(" ");
  console.log("Fichier de commande récupéré avec succès :");
  readdirSync(dir).forEach(dirs => {
    const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

    for (const files of commands) {
      const getFileName = require(`../${dir}/${dirs}/${files}`);
      bot.commands.set(getFileName.help.name, getFileName);
      console.log(`- ${getFileName.help.name}.js`);
    }
  });
};
const loadEvents = bot => {
  // Événement !!
  bot.on("message", message => require("../event/message")(bot, message));
  bot.on("typingStart", (channel, user) => require("../event/spawn")(bot, channel, user));
  bot.on("guildMemberAdd", member => require("../event/guildMemberAdd")(bot, member));
  bot.on("guildMemberRemove", member => require("../event/guildMemberRemove")(bot, member));
  bot.on("messageDelete", member => require("../event/messageDelete")(bot, member));
  bot.on("directMessage", message => require("../event/directMessage")(bot, message));
  bot.on("guildCreate", guild => require("../event/guildCreate")(bot, guild));
  bot.on("messageReactionAdd", (messageReaction, user) => require("../event/messageReactionAdd")(bot, messageReaction, user));

  bot.on("ready", async () => {
    const guild = bot.guilds.cache.first();
    const data = await bot.getGuild(guild);
    console.log(" ");
    console.log(`Connecté en tant que : ${bot.user.username}`);
    bot.channels.cache.get("654756085877702656").send("Le bot est opérationnel !");
    bot.user.setActivity(`${data.prefix}info | ${bot.user.username}`, { type: "WATCHING" });
    data.users.forEach(userInfo => {
      const newMonnaieB = Math.floor(userInfo.MONNAIE.monnaieB * 1.03);
      setInterval(() => bot.updateUserInfo(userInfo, {
        "users.$.MONNAIE.monnaieB": newMonnaieB
      }), 8.64e+7)
    })
  });
};

module.exports = {
  loadCommands,
  loadEvents
};

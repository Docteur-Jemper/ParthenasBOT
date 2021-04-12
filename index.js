const { Client, Collection } = require("discord.js");
const { loadCommands, loadEvents } = require("./util/loader");

const bot = new Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
require("./util/functions")(bot);
bot.config = require("./config");
bot.mongoose = require("./util/mongoose");
["commands", "cooldowns"].forEach(x => bot[x] = new Collection());

loadCommands(bot);
loadEvents(bot);
bot.mongoose.init();

bot.login(process.env.TOKEN);

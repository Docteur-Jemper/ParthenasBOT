const { Client, Collection, Intents } = require("discord.js");
const { loadCommands, loadEvents } = require("./util/loader");

const intents = new Intents([
  Intents.NON_PRIVILEGED,
  "GUILD_MEMBERS",
]);

const bot = new Client({ ws: { intents } },{ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
require("./util/functions")(bot);
bot.config = require("./config");
bot.mongoose = require("./util/mongoose");
["commands", "cooldowns"].forEach(x => bot[x] = new Collection());

loadCommands(bot);
loadEvents(bot);
bot.mongoose.init();

bot.login(process.env.TOKEN);

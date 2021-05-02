/* eslint-disable prefer-template */
/* eslint-disable no-eval */
module.exports.run = async (bot, message, args) => {
  function clean(text) {
    if (typeof text === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    return text;
  }

  if (message.author.id !== "402490840666210317") return;
  const code = args.join(" ");
  const evaled = eval(code);
  const cleanCode = await clean(evaled);
  message.channel.send(cleanCode, { code: "js" });
};

module.exports.help = {
  name: "eval",
  aliases: "",
  category: "admin",
  description: "Renvoie un code javascript testé\n**(réservé au créateur)**",
  usage: "<code_to_test>",
  isUserAdmin: false,
  permissions: true,
  args: true
};

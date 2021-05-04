module.exports.run = (bot, message, args) => {
  if (message.author.id === "402490840666210317") {
    message.delete();
    if (!args.length) return;
    message.channel.send(args.join(" "));
  } else {
    message.channel.send("Laisse cette commande au créateur")
      .then(msg => msg.delete({ timeout: 3000 }))
      .catch(console.error);
  }
};

module.exports.help = {
  name: "gm",
  aliases: "",
  category: "moderation",
  description: "Fait quelque chose\n**(réservé au créateur)**",
  permissions: true,
  args: false
};

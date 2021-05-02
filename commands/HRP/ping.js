module.exports.run = (bot, message) => {
  if (message.channel.parent.name === "Parthénas" ||
      message.channel.parent.name === "»»»»»『áthiktos』«««««" ||
      message.channel.parent.name === "»»»»»『ypsós』«««««" ||
      message.channel.parent.name === "»»»『kryfó-chorió』«««" ||
      message.channel.parent.name === "»»»»»『ifaísteio』«««««") {
    return message.channel.send(`(:x: Ne faites pas cette commande dans un channel RP ${message.author} !!)`)
      .then(msg => msg.delete({ timeout: 6000 }))
      .catch(console.error);
  }
  message.channel.send("Pong !")
    .then(msg => msg.delete({ timeout: 10000 }))
    .catch(console.error);
  function Delete() {
    message.delete();
  }
  setTimeout(Delete, 10000);
};

module.exports.help = {
  name: "ping",
  aliases: "",
  category: "hrp",
  description: "Renvoie Pong !",
  cooldown: 10,
  args: false
};

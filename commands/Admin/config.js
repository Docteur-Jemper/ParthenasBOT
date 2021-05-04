module.exports.run = async (bot, message, args, settings) => {
  if (message.author.id !== "402490840666210317") return;
  const getSetting = args[0];
  const newSetting = args.slice(1).join(" ");

  switch (getSetting) {
  case "prefix": {
    if (newSetting) {
      await bot.updateGuild(message.guild, { prefix: newSetting });
      return message.channel.send(`Prefixe mis à jour: \`${settings.prefix}\`-> \`${newSetting}\``);
    }
    message.channel.send(`Prefixe actuel: \`${settings.prefix}\``);
    break;
  }
  case "logChannel": {
    if (newSetting) {
      await bot.updateGuild(message.guild, { logChannel: newSetting });
      return message.channel.send(`logChannele mis à jour: \`${settings.logChannel}\`-> \`${newSetting}\``);
    }
    message.channel.send(`logChannele actuel: \`${settings.logChannel}\``);
    break;
  }
  case "welcomeMessage": {
    if (newSetting) {
      await bot.updateGuild(message.guild, { welcomeMessage: newSetting });
      return message.channel.send(`welcomeMessagee mis à jour: \`${settings.welcomeMessage}\`-> \`${newSetting}\``);
    }
    message.channel.send(`welcomeMessagee actuel: \`${settings.welcomeMessage}\``);
    break;
  }
  }
};

module.exports.help = {
  name: "config",
  aliases: "",
  category: "admin",
  description: "Modifier la base de données\n**(réservé au créateur)**",
  usage: "<key> <value>",
  isUserAdmin: false,
  permissions: true,
  args: true
};

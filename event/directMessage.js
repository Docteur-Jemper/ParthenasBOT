const { MessageEmbed, Collection } = require("discord.js");

module.exports = (bot, message) => {
  const user = message.author;
  if (user.bot) return;
  if (message.content.indexOf(bot.config.DEFAULTSETTINGS.prefix) !== 0) return user.send(`Merci de mettre le prefixe \`${bot.config.DEFAULTSETTINGS.prefix}\` devant votre message pour pouvoir faire un ticket\n*(Tout ticket inutile ou répéter pourras être sanctionner)*`);
  const args = message.content.slice(bot.config.DEFAULTSETTINGS.prefix.length).split(/ +/g);
  if (!bot.cooldowns.has("DM")) {
    bot.cooldowns.set("DM", new Collection());
  }
  const timeNow = Date.now();
  const timeStamps = bot.cooldowns.get("DM");
  const cdAmount = 7200 * 1000;

  if (timeStamps.has(message.author.id)) {
    const cdExpirationTime = timeStamps.get(message.author.id) + cdAmount;
    if (timeNow < cdExpirationTime) {
      const timeLeft = (cdExpirationTime - timeNow) / 1000;
      return message.reply(`merci d'attendre encore ${timeLeft.toFixed(0)} seconde(s) avant de de pouvoir refaire un ticket`)
        .then(msg => msg.delete({ timeout: 4000 }))
        .catch(console.error);
    }
  }
  timeStamps.set(message.author.id, timeNow);
  setTimeout(() => timeStamps.delete(message.author.id), cdAmount);

  const embed = new MessageEmbed()
    .setAuthor(`${user.username} (${user.id})`)
    .setColor("#ffa500")
    .setDescription(`**Action**: Ouverture de ticket\n**Raison**: ${args.join(" ")}\n**Utilisateur**: ${user}`)
    .setThumbnail(user.avatarURL())
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());

  user.send("Nous avons réçu votre ticket, on vous répondra dès que possible !");
  bot.channels.cache.get("654756085877702656").send(embed);
  bot.channels.cache.get("654756085877702656").send("<@&568514695997161473>");
};

module.exports = async (bot, messageReaction, user) => {
  const message = messageReaction.message;
  const member = message.guild.members.cache.get(user.id);
  const emoji = messageReaction.emoji.name;

  if (messageReaction.partial) await messageReaction.fetch();
};

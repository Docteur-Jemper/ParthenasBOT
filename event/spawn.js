const { MessageEmbed } = require("discord.js");
const MOB = require("../assest/Mob/nature");

module.exports = async (bot, channel, user) => {
  const member = bot.guilds.cache.first().members.cache.find(u => u.id === user.id);
  const data = await bot.getGuild(member.guild);
  const position = data.users.map(e => e.id).indexOf(member.id);
  const userInfo = data.users[position];
  if (user.bot) return;
  if (channel.type === "dm") return;
  if (channel.type !== "text") return;
  if (!userInfo) return;

  // Fin système de mob

  for (let i=1 ; i<MOB.length ; i=i+1) {
    console.log(i,userInfo.MOB.mob,MOB[i].mob);
    if (userInfo.MOB.mob === MOB[i].mob) return;
  };

  let mob = MOB[0];

  // spawn dans le channel #forêt-sombre

  if (channel.id === "568923274658971668") {
    const randnum = Math.floor(Math.random() * 12) + 1;
    console.log(randnum);
    // Loup
    if (randnum === 1) mob = MOB[1];
    // Cerf
    if (randnum === 2) mob = MOB[2];
  }

  // spwan dans le channel #grande-plaine

  if (channel.id === "568937782630678541") {
    const randnum = Math.floor(Math.random() * 14) + 1;
    // Pripom
    if (randnum === 1) mob = MOB[3];
    // Golime
    if (randnum === 2) mob = MOB[4];
  }

  // spwan dans le channel #lac

  if (channel.id === "569505805561364511") {
    const randnum = Math.floor(Math.random() * 12) + 1;
    // Croco
    if (randnum === 2) mob = MOB[5];
  }

  // spawn dans le channel #montagne

  if (channel.id === "569207554404515841") {
    const randnum = Math.floor(Math.random() * 10) + 1;
    // Golem
    if (randnum === 2) mob = MOB[6];
  }

  // spawn dans le channel #fosse

  if (channel.id === "569209205207072773") {
    const randnum = Math.floor(Math.random() * 9) + 1;
    // Gimille
    if (randnum === 1) mob = MOB[7];
    // Wretch
    if (randnum === 2) mob = MOB[8];
  }

  // spawn dans le channel #grotte

  if (channel.id === "569209235166986249") {
    const randnum = Math.floor(Math.random() * 10) + 1;
    // Varghulf
    if (randnum === 1) mob = MOB[9];
    // Minotaur
    if (randnum === 2) mob = MOB[10];
  }

  if (mob.Image === "null") return;
  await bot.updateUserInfo(member, {
    "users.$.MOB.mob": mob.mob,
    "users.$.MOB.Pv": mob.Pv,
    "users.$.MOB.PvBase": mob.Pv,
    "users.$.MOB.Niveau": mob.Niveau,
    "users.$.MOB.Force": mob.Force
  });
  data2 = await bot.getGuild(member.guild);
  position2 = data2.users.map(e => e.id).indexOf(member.id);
  userInfo2 = data2.users[position2];
  mobEmbeb = new MessageEmbed()
    .setColor("#27d200")
    .setTitle(`Un ${userInfo2.MOB.mob} apparait et regarde ${member.displayName} !!`)
    .setThumbnail(mob.Image)
    .addField("Niveau :", userInfo2.MOB.Niveau)
    .addField("Point de vie :", userInfo2.MOB.Pv, true)
    .addField("Force :", userInfo2.MOB.Force, true)
    .setTimestamp();
  channel.send(mobEmbeb)
    .then(msg => msg.delete({ timeout: 180000 }))
    .catch(console.error);
  var PvJ = userInfo2.EXP.PvActu;
  if (userInfo2.EXP.PvActu <= 0) {
    PvJ = "KO";
    channel.send("Mais il vous laisse giser au sol et s'enfuit !!")
      .then(msg => msg.delete({ timeout: 180000 }))
      .catch(console.error);
    await bot.updateUserInfo(member, {
        "users.$.MOB.mob": "Aucun",
        "users.$.MOB.Pv": 0,
        "users.$.MOB.PvBase": 0,
        "users.$.MOB.Niveau": "Aucun",
        "users.$.MOB.Force": 0
      });
  }
  const StatsJoueurEmbeb = new MessageEmbed()
    .setColor("#27d200")
    .setTitle(`Stats de ${member.displayName}`)
    .setThumbnail(user.avatarURL())
    .addField("Point de vie :", PvJ, true)
    .addField("Force :", userInfo2.EXP.forceActu, true)
    .setTimestamp();
  channel.send(StatsJoueurEmbeb)
    .then(msg => msg.delete({ timeout: 180000 }))
    .catch(console.error);
  async function Timer() {
    if (userInfo2.MOB.Pv === userInfo2.MOB.PvBase !== 0) {
      await bot.updateUserInfo(member, {
        "users.$.MOB.mob": "Aucun",
        "users.$.MOB.Pv": 0,
        "users.$.MOB.PvBase": 0,
        "users.$.MOB.Niveau": "Aucun",
        "users.$.MOB.Force": 0
      });
    }
  }
  setTimeout(Timer, 180000);
};

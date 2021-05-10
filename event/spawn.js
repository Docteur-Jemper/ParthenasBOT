const { MessageEmbed } = require("discord.js");
const mob = require("../assest/Mob/nature");
console.log(mob[0])

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

  if (userInfo.MOB.mob === "Loup" ||
  userInfo.MOB.mob === "Cerf" ||
  userInfo.MOB.mob === "Pripom" ||
  userInfo.MOB.mob === "Golime" ||
  userInfo.MOB.mob === "Croco" ||
  userInfo.MOB.mob === "Golem" ||
  userInfo.MOB.mob === "Gimille" ||
  userInfo.MOB.mob === "Wretch" ||
  userInfo.MOB.mob === "Varghulf" ||
  userInfo.MOB.mob === "Minotaur") return;

  let mob = "Aucun";
  let Pv = 0;
  let Niveau = "Aucun";
  let Force = 0;
  let Image = "null";

  // spawn dans le channel #forêt-sombre

  if (channel.id === "568923274658971668") {
    const randnum = Math.floor(Math.random() * 12) + 1;
    console.log(randnum);
    // Loup
    if (randnum === 1) {
      mob = "Loup";
      Pv = 1000;
      Niveau = "Débutant";
      Force = 250;
      Image = "http://ekladata.com/WLSt1CuOFVWqskbgaY5nc_m7tiE.png";
    }
    // Cerf
    if (randnum === 2) {
      mob = "Cerf";
      Pv = 800;
      Niveau = "Débutant";
      Force = 100;
      Image = "https://i.redd.it/2w2alpuylqz11.jpg";
    }
  }

  // spwan dans le channel #grande-plaine

  if (channel.id === "568937782630678541") {
    const randnum = Math.floor(Math.random() * 14) + 1;
    // Pripom
    if (randnum === 1) {
      mob = "Pripom";
      Pv = 100;
      Niveau = "Débutant";
      Force = 150;
      Image = "https://mcdn.wallpapersafari.com/medium/25/61/Z9iaVj.jpg";
    }
    // Golime
    if (randnum === 2) {
      mob = "Golime";
      Pv = 1500;
      Niveau = "Débutant";
      Force = 120;
      Image = "https://i.pinimg.com/originals/23/1f/ef/231fefd0fe5d064fe3714d930f72bf8c.jpg";
    }
  }

  // spwan dans le channel #lac

  if (channel.id === "569505805561364511") {
    const randnum = Math.floor(Math.random() * 12) + 1;
    // Croco
    if (randnum === 2) {
      mob = "Croco";
      Pv = 1600;
      Niveau = "Aguéri";
      Force = 250;
      Image = "https://i.pinimg.com/originals/50/46/a6/5046a6dafc5b293dd59e09a260ad72a3.jpg";
    }
  }

  // spawn dans le channel #montagne

  if (channel.id === "569207554404515841") {
    const randnum = Math.floor(Math.random() * 10) + 1;
    // Golem
    if (randnum === 2) {
      mob = "Golem";
      Pv = 2500;
      Niveau = "Convenable";
      Force = 400;
      Image = "https://vignette.wikia.nocookie.net/hanin/images/c/ce/Golem.png/revision/latest?cb=20180319155750&path-prefix=fr";
    }
  }

  // spawn dans le channel #fosse

  if (channel.id === "569209205207072773") {
    const randnum = Math.floor(Math.random() * 9) + 1;
    // Gimille
    if (randnum === 1) {
      mob = "Gimille";
      Pv = 2000;
      Niveau = "Convenable";
      Force = 450;
      Image = "https://i.pinimg.com/originals/4b/52/7d/4b527d00f51d375a9542f2f14b683285.jpg";
    }
    // Wretch
    if (randnum === 2) {
      mob = "Wretch";
      Pv = 1800;
      Niveau = "Convenable";
      Force = 500;
      Image = "https://vignette.wikia.nocookie.net/gearsofwar/images/2/2d/Wretch.png/revision/latest?cb=20110713224628";
    }
  }

  // spawn dans le channel #grotte

  if (channel.id === "569209235166986249") {
    const randnum = Math.floor(Math.random() * 10) + 1;
    // Varghulf
    if (randnum === 1) {
      mob = "Varghulf";
      Pv = 2000;
      Niveau = "Convenable";
      Force = 400;
      Image = "https://bibliotheque-imperiale.com/images/thumb/7/76/Cda_demo2.jpg/500px-Cda_demo2.jpg";
    }
    // Minotaur
    if (randnum === 2) {
      mob = "Minotaur";
      Pv = 2000;
      Niveau = "Convenable";
      Force = 500;
      Image = "https://i.pinimg.com/originals/50/76/76/507676241d3dbfafad32e626d07e15a1.jpg";
    }
  }

  if (Image === "null") return;
  bot.updateUserInfo(member, {
    "users.$.MOB.mob": mob,
    "users.$.MOB.Pv": Pv,
    "users.$.MOB.PvBase": PvBase,
    "users.$.MOB.Niveau": Niveau,
    "users.$.MOB.Force": Force
  });
  data2 = await bot.getGuild(member.guild);
  position2 = data2.users.map(e => e.id).indexOf(member.id);
  userInfo2 = data2.users[position2];
  mobEmbeb = new MessageEmbed()
    .setColor("#27d200")
    .setTitle(`Un ${userInfo2.MOB.mob} apparait et regarde ${member.displayName} !!`)
    .setThumbnail(Image)
    .addField("Niveau :", userInfo2.MOB.Niveau)
    .addField("Point de vie :", userInfo2.MOB.Pv, true)
    .addField("Force :", userInfo2.MOB.Force, true)
    .setTimestamp();
  channel.send(mobEmbeb)
    .then(msg => msg.delete({ timeout: 180000 }))
    .catch(console.error);
  const PvJ = userInfo2.EXP.PvActu;
  if (userInfo2.EXP.PvActu <= 0) {
    const PvJ = "KO";
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

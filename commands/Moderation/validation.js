module.exports.run = async (bot, message, args) => {
  const member = message.guild.member(message.mentions.users.first());
  let userInfo = false;
  if (member) userInfo = await bot.getUser(member);
  message.delete({ timeout: 5000 });
  const race = require("../../assest/Profile/race.json");
  const genre = require("../../assest/Profile/genre.json");
  const age = require("../../assest/Profile/age.json");
  if (args[0] === "info") return message.channel.send("```Syntaxe à respecter```__Race:__ **Thérianthrope**, **Gobelin**, **Néphilim** ou **Humain**\n__Genre:__ **Homme** ou **Femme**\n__Age:__ **Bébé**, **Jeune enfant**, **Adolescent**, **Jeune adulte**, **Adulte** ou **Ancien**")
    .then(msg => msg.delete({ timeout: 300000 }))
    .catch(console.error);
    if (!message.mentions.users.first()) return message.channel.send(":x: Veuillez mentionner la personne dont vous voulez validé la fiche")
      .then(msg => msg.delete({ timeout: 10000 }))
      .catch(console.error);
  if (userInfo.Race !== "") return message.channel.send(":x: Cette utilisateur à déjà été initialisé !")
    .then(msg => msg.delete({ timeout: 10000 }))
    .catch(console.error);
  if (!args[3]) return message.channel.send(`Merci de respecter la syntaxe : \`${userInfo.prefix}validation <user_mention> [<Roi>] <Race> <Genre> <Age> **ou** <info>\``)
    .then(msg => msg.delete({ timeout: 15000 }))
    .catch(console.error);
  if (args[1] === "Roi") {
    const AGE = args.splice(4, 2).join(" ");
    positionRace = race.map((e) => e.name.toLowerCase()).indexOf(args[2].toLowerCase());
    positionGenre = genre.map((e) => e.name.toLowerCase()).indexOf(args[3].toLowerCase());
    positionAge = age.map((e) => e.name.toLowerCase()).indexOf(AGE.toLowerCase());
    if (positionAge > - 1 && positionGenre > - 1 && positionRace > - 1) {
      const Race = race[positionRace];
      const Genre = genre[positionGenre];
      const Age = age[positionAge];
      member.roles.add("568515674310180865"); // Identité
      member.roles.add("726450020773134337"); // Roi
      member.roles.add(Race.role);
      member.roles.add(Genre.role);
      member.roles.add(Age.role);
      member.roles.add("568518452147650570"); // Pouvoir
      member.roles.add("575464287666176010"); // Aucune Maitrise
      member.roles.add("568519329503641610"); // Stuff
      member.roles.add("568519519266537502"); // HRP
      member.roles.remove("568515089527996416"); // Sans fiche Rp
      message.channel.send(`${member} votre Fiche a été valider ! \`(par ${message.author.tag})\``);
      bot.updateUserInfo(member, {
        "users.$.Hierarchie": "Roi",
        "users.$.Race": Race.name,
        "users.$.Genre": Genre.name,
        "users.$.Age": Age.name,
        "users.$.stats": Race.stats
      });
    } else {
      message.channel.send(`Erreur : ${positionRace === - 1 ? `__Race__ \`${args[2]}\` inconnu.\n` : ""}${positionGenre === - 1 ? `__Genre__ \`${args[3]}\` inconnu.\n` : ""}${positionAge === - 1 ? `__Age__ \`${AGE}\` inconnu.\n` : ""}Faire \`${userInfo.prefix}validation info\` pour avoir les mots valide`)
        .then(msg => msg.delete({ timeout: 20000 }))
        .catch(console.error);
    }
  } else {
    const AGE = args.splice(3, 2).join(" ");
    positionRace = race.map((e) => e.name.toLowerCase()).indexOf(args[1].toLowerCase());
    positionGenre = genre.map((e) => e.name.toLowerCase()).indexOf(args[2].toLowerCase());
    positionAge = age.map((e) => e.name.toLowerCase()).indexOf(AGE.toLowerCase());
    if (positionAge > - 1 && positionGenre > - 1 && positionRace > - 1) {
      const Race = race[positionRace];
      const Genre = genre[positionGenre];
      const Age = age[positionAge];
      member.roles.add("568515674310180865"); // Identité
      member.roles.add("685239783563460699"); // Race
      member.roles.add(Race.role);
      member.roles.add(Genre.role);
      member.roles.add(Age.role);
      member.roles.add("568518452147650570"); // Pouvoir
      member.roles.add("575464287666176010"); // Aucune Maitrise
      member.roles.add("568519329503641610"); // Stuff
      member.roles.add("568519519266537502"); // HRP
      member.roles.remove("568515089527996416"); // Sans fiche Rp
      message.channel.send(`${member} votre Fiche a été valider ! \`(par ${message.author.tag})\``);
      bot.updateUserInfo(member, {
        "users.$.Hierarchie": "Aucune",
        "users.$.Race": Race.name,
        "users.$.Genre": Genre.name,
        "users.$.Age": Age.name,
        "users.$.stats": Race.stats
      });
    } else {
      message.channel.send(`Erreur : ${positionRace === - 1 ? `__Race__ \`${args[1]}\` inconnu.\n` : ""}${positionGenre === - 1 ? `__Genre__ \`${args[2]}\` inconnu.\n` : ""}${positionAge === - 1 ? `__Age__ \`${AGE}\` inconnu.\n` : ""}Faire \`${userInfo.prefix}validation info\` pour avoir les mots valide`)
        .then(msg => msg.delete({ timeout: 20000 }))
        .catch(console.error);
    }
  }
};

module.exports.help = {
  name: "validation",
  aliases: ["valid"],
  category: "moderation",
  description: "Enregistre le joueur\n**(réservé au valideur de fiche)**",
  usage: "<user_mention> [<Roi>] <Race> <Genre> <Age> **ou** <info>",
  permissions: true,
  args: true
};

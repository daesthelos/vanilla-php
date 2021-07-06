const images = {
  "class": {
    tank: "/vanilla-php/resources/img/tank.png",
    assault: "/vanilla-php/resources/img/assault.png",
    mage: "/vanilla-php/resources/img/mage.png",
    healer: "/vanilla-php/resources/img/healer.png",
    ranger: "/vanilla-php/resources/img/ranger.png",
  }
}

class Hero {
  name = "";
  skills = [];
  bp = 0;
  imageURL = "";
  type = "";

  constructor({ name, bp, type }) {
    this.name = name;
    this.bp = bp;
    this.type = type;
  }
}
class Skill {
  name = "";
  isLimitBreak = false;
  isSoulImprint = false;
  description = "";
  description_lb = "";
  description_si = "";

  constructor({ name, description, description_lb, description_si }) {
    this.name = name;
    this.description = description;
    this.description_lb = description_lb;
    this.description_si = description_si;
  }
}

const Class = {
  ASSAULT: "ASSAULT",
  TANK: "TANK",
  HEALER: "HEALER",
  MAGE: "MAGE",
  RANGER: "RANGER"
};

const Roles = {
  GUILD_MASTER: "GUILD MASTER",
  CO_MASTER: "CO-MASTER",
  VETERAN: "VETERAN",
  MEMBER: "MEMBER",
};

const HeroNames = {

};

class Member {
  name = "";
  role = "";
  heroes = [];
  totalBP = 0;
  isInactive = false;

  constructor({ name, role, heroes, totalBP, isInactive }) {
    this.name = name;
    this.role = role;
    this.heroes = heroes;
    this.totalBP = totalBP;
    this.isInactive = !!isInactive;
  }
}

const members = [
  new Member({
    name: "Gurimoa", role: Roles.GUILD_MASTER, totalBP: 1402015, heroes: [
      new Hero({ name: "Tia", bp: 300_000, type: Class.TANK }),
      new Hero({ name: "Lime", bp: 300_000, type: Class.HEALER }),
      new Hero({ name: "Elesis", bp: 376977, type: Class.ASSAULT }),
      new Hero({ name: "Ronan", bp: 300_000, type: Class.TANK }),
    ]
  }),
  new Member({
    name: "Kona", role: Roles.CO_MASTER, totalBP: 1438281,
    heroes: [
      new Hero({ name: "Tia", bp: 300_000, type: Class.TANK }),
      new Hero({ name: "Elesis", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "Europa", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "Lime", bp: 300_000, type: Class.HEALER }),
    ]
  }),
  new Member({
    name: "Daes", role: Roles.CO_MASTER, totalBP: 1339823,
    heroes: [
      new Hero({ name: "Tia", bp: 1, type: Class.TANK }),
      new Hero({ name: "Europa", bp: 1, type: Class.ASSAULT }),
      new Hero({ name: "Dio", bp: 1, type: Class.ASSAULT }),
      new Hero({ name: "Lime", bp: 1, type: Class.HEALER }),
    ]
  }),
  new Member({
    name: "Raikou", role: Roles.CO_MASTER, totalBP: 1150566,
    heroes: [
      new Hero({ name: "Elesis", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "Ronan", bp: 300_000, type: Class.TANK }),
      new Hero({ name: "Nelia", bp: 300_000, type: Class.MAGE }),
      new Hero({ name: "Lime", bp: 300_000, type: Class.HEALER }),
    ]
  }),
  new Member({
    name: "Sin", role: Roles.VETERAN, totalBP: 1397550,
    heroes: [
      new Hero({ name: "Elesis", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "Europa", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "Tia", bp: 300_000, type: Class.TANK }),
      new Hero({ name: "Lime", bp: 300_000, type: Class.HEALER }),
    ]
  }),
  new Member({
    name: "Chungus", role: Roles.VETERAN, totalBP: 1349290,
    heroes: [
      new Hero({ name: "Nelia", bp: 300_000, type: Class.MAGE }),
      new Hero({ name: "Elesis", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "Ronan", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "Lime", bp: 300_000, type: Class.ASSAULT }),
    ]
  }),
  new Member({
    name: "Lloyd", role: Roles.VETERAN, totalBP: 1234803,
    heroes: [
      new Hero({ name: "Elesis", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "Lime", bp: 300_000, type: Class.HEALER }),
      new Hero({ name: "Rin", bp: 300_000, type: Class.HEALER }),
      new Hero({ name: "Hwarin", bp: 300_000, type: Class.HEALER }),
    ]
  }),
  new Member({
    name: "Hotness", role: Roles.VETERAN, totalBP: 1224678,
    heroes: [
      new Hero({ name: "Tia", bp: 300_000, type: Class.TANK }),
      new Hero({ name: "Dio", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "Elesis", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "Lime", bp: 300_000, type: Class.HEALER }),
    ]
  }),
  new Member({
    name: "Kidd", role: Roles.VETERAN, totalBP: 1144894,
    isInactive: true,
    heroes: [
      new Hero({ name: "PLACEHOLDER", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "PLACEHOLDER", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "PLACEHOLDER", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "PLACEHOLDER", bp: 300_000, type: Class.ASSAULT }),
    ]
  }),
  new Member({
    name: "PapaTez", role: Roles.VETERAN, totalBP: 942214,
    isInactive: true,
    heroes: [
      new Hero({ name: "PLACEHOLDER", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "PLACEHOLDER", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "PLACEHOLDER", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "PLACEHOLDER", bp: 300_000, type: Class.ASSAULT }),
    ]
  }),
  new Member({
    name: "Riddokun", role: Roles.MEMBER, totalBP: 1346567,
    heroes: [
      new Hero({ name: "Elesis", bp: 376_998, type: Class.ASSAULT }),
      new Hero({ name: "Europa", bp: 324_316, type: Class.ASSAULT }),
      new Hero({ name: "Amy", bp: 325_244, type: Class.HEALER }),
      new Hero({ name: "Io", bp: 308_092, type: Class.RANGER }),
    ]
  }),
  new Member({
    name: "jovirone", role: Roles.MEMBER, totalBP: 1279769,
    heroes: [
      new Hero({ name: "Elesis", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "Lime", bp: 300_000, type: Class.HEALER }),
      new Hero({ name: "Ronan", bp: 300_000, type: Class.TANK }),
      new Hero({ name: "Rin", bp: 300_000, type: Class.HEALER }),
    ]
  }),
  new Member({
    name: "Jammwood", role: Roles.MEMBER, totalBP: 1186819,
    heroes: [
      new Hero({ name: "Elesis", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "Tia", bp: 300_000, type: Class.TANK }),
      new Hero({ name: "Lire", bp: 300_000, type: Class.RANGER }),
      new Hero({ name: "Lime", bp: 300_000, type: Class.HEALER }),
    ]
  }),
  new Member({
    name: "一期一会", role: Roles.MEMBER, totalBP: 1183015,
    heroes: [
      new Hero({ name: "Elesis", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "Amy", bp: 300_000, type: Class.HEALER }),
      new Hero({ name: "Io", bp: 300_000, type: Class.RANGER }),
      new Hero({ name: "Lass", bp: 300_000, type: Class.ASSAULT }),
    ]
  }),
  new Member({
    name: "DBKool", role: Roles.MEMBER, totalBP: 1119098,
    heroes: [
      new Hero({ name: "Ronan", bp: 247857, type: Class.TANK }),
      new Hero({ name: "Elesis", bp: 305_166, type: Class.ASSAULT }),
      new Hero({ name: "Nelia", bp: 289243, type: Class.MAGE }),
      new Hero({ name: "Amy", bp: 275_000, type: Class.HEALER }),
    ]
  }),
  new Member({
    name: "Joyce", role: Roles.MEMBER, totalBP: 1112878,
    heroes: [
      new Hero({ name: "Elesis", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "Lass", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "Io", bp: 300_000, type: Class.RANGER }),
      new Hero({ name: "Amy", bp: 300_000, type: Class.HEALER }),
    ]
  }),
  new Member({
    name: "33phy33", role: Roles.MEMBER, totalBP: 1086336,
    heroes: [
      new Hero({ name: "Asin", bp: 300_000, type: Class.TANK }),
      new Hero({ name: "Jin", bp: 300_000, type: Class.TANK }),
      new Hero({ name: "Amy", bp: 300_000, type: Class.HEALER }),
      new Hero({ name: "Lime", bp: 300_000, type: Class.HEALER }),
    ]
  }),
  new Member({
    name: "Etheris", role: Roles.MEMBER, totalBP: 991811,
    isInactive: true,
    heroes: [
      new Hero({ name: "PLACEHOLDER", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "PLACEHOLDER", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "PLACEHOLDER", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "PLACEHOLDER", bp: 300_000, type: Class.ASSAULT }),
    ]
  }),
  new Member({
    name: "Kaihime", role: Roles.MEMBER, totalBP: 869877,
    isInactive: true,
    heroes: [
      new Hero({ name: "PLACEHOLDER", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "PLACEHOLDER", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "PLACEHOLDER", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "PLACEHOLDER", bp: 300_000, type: Class.ASSAULT }),
    ]
  }),
  new Member({
    name: "Yuo", role: Roles.MEMBER, totalBP: 869684,
    heroes: [
      new Hero({ name: "Europa", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "Tia", bp: 300_000, type: Class.TANK }),
      new Hero({ name: "Lime", bp: 300_000, type: Class.HEALER }),
      new Hero({ name: "Nelia", bp: 300_000, type: Class.MAGE }),
    ]
  }),
  new Member({
    name: "Stagnys", role: Roles.MEMBER, totalBP: 863652,
    heroes: [
      new Hero({ name: "Nelia", bp: 300_000, type: Class.MAGE }),
      new Hero({ name: "Lime", bp: 300_000, type: Class.HEALER }),
      new Hero({ name: "Io", bp: 300_000, type: Class.RANGER }),
      new Hero({ name: "Sieghart", bp: 300_000, type: Class.ASSAULT }),
    ]
  }),
  new Member({
    name: "Arshio", role: Roles.MEMBER, totalBP: 744162,
    isInactive: true,
    heroes: [
      new Hero({ name: "PLACEHOLDER", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "PLACEHOLDER", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "PLACEHOLDER", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "PLACEHOLDER", bp: 300_000, type: Class.ASSAULT }),
    ]
  }),
  new Member({
    name: "WeTaco", role: Roles.MEMBER, totalBP: 666463,
    isInactive: true,
    heroes: [
      new Hero({ name: "PLACEHOLDER", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "PLACEHOLDER", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "PLACEHOLDER", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "PLACEHOLDER", bp: 300_000, type: Class.ASSAULT }),
    ]
  }),
  new Member({
    name: "Fran", role: Roles.MEMBER, totalBP: 639259,
    heroes: [
      new Hero({ name: "Elesis", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "Sieghart", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "Lass", bp: 300_000, type: Class.ASSAULT }),
      new Hero({ name: "Ronan", bp: 300_000, type: Class.ASSAULT }),
    ]
  }),
  new Member({
    name: "BryChai", role: Roles.MEMBER, totalBP: 681385,
    heroes: [
      new Hero({ name: "Elesis", bp: 133239, type: Class.ASSAULT }),
      new Hero({ name: "Lass", bp: 185847, type: Class.ASSAULT }),
      new Hero({ name: "Ley", bp: 216969, type: Class.MAGE }),
      new Hero({ name: "Amy", bp: 145330, type: Class.HEALER }),
    ]
  })
];
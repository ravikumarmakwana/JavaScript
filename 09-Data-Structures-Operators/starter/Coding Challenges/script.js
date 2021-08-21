const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
};

let [players1, players2] = game.players;
console.log('Players1 : ' + players1);
console.log('Players2 : ' + players2);

let [gk1, ...fieldPlayers1] = players1;
console.log('Goal Keeper for team 1 : ' + gk1);
console.log('Team 1 fieldPlayers1 : ' + fieldPlayers1);
let [gk2, ...fieldPlayers2] = players2;
console.log('Goal Keeper for team 2 : ' + gk2);
console.log('Team 2 fieldPlayers2 : : ' + fieldPlayers2);

let allPlayers = [...players1, ...players2];
console.log(`allPlayers : ${allPlayers}`);

let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log('players1Final : ' + players1Final);

//let { team1, x: draw, team2 } = game.odds;
let {
  odds: { team1, x: draw, team2 },
} = game;
console.log('team1 : ' + team1);
console.log('draw : ' + draw);
console.log('team2 : ' + team2);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored.`);
};
printGoals('a', 'b', 'c');
printGoals('a', 'b', 'c', 'd', 'e');
printGoals(...game.scored);

team1 < team2 && console.log('Team 1 more likely to Win');
team1 > team2 && console.log('Team 2 more likely to Win');

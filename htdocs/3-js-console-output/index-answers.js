const games = [
  {
    title: "Ra",
    ownerIds: [40, 12],
    rank: 7,
  },
  {
    title: "Beyond the Sun",
    ownerIds: [],
    rank: 2,
  },
];

function numOwners(game) {
  return game.ownerIds.length;
}

for (const game of games) {
  console.log(`${game.title} - ${numOwners(game)}`);
}

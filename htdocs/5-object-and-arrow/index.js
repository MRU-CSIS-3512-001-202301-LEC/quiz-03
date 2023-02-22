const editor = {
  name: "Don Turnbull",
  born: 1937,
  died: 2003,
};

const FIEND_FOLIO = {
  title: "The Fiend Folio",
  released: 1981,
  editor,
  monsters: [],
  addMonster: function (monster) {
    this.monsters.push(monster);
  },
  numMonsters: function () {
    this.monsters.length;
  },
};

// your suggested code for Q5-a would go here

console.log("1", FIEND_FOLIO.editor["born"]);

FIEND_FOLIO.addMonster("Beholder");
FIEND_FOLIO.addMonster("Blink Dog");

let blorp = (a, b) => a[b];

console.log("2", blorp(FIEND_FOLIO.monsters, 0));

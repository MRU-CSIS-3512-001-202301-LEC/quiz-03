const editor = {
  name: "Don Turnbull",
  born: 1937,
  died: 2003,
};

const FIEND_FOLIO = {
  title: "The Fiend Folio",
  released: 1981,
  pages: 128,
  editor,
  monsters: [],
  addMonster: function (monster) {
    this.monsters.push(monster);
  },
  numMonsters: function () {
    this.monsters.length;
  },
  toString: function () {
    return `${this.title} ${this.released}`;
  },
  listMonsters: function () {
    for (const monster of this.monsters) {
      console.log(monster);
    }
  },
};

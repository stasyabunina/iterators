export default class Team {
  constructor(...characters) {
    this.characters = characters;
  }

  [Symbol.iterator]() {
    let current;
    let i = 0;
    const team = this.characters;

    return {
      next() {
        i += 1;
        current = team[i - 1];

        if (i > team.length) {
          return {
            done: true,
          };
        }

        return {
          value: current,
          done: false,
        };
      },
    };
  }
}

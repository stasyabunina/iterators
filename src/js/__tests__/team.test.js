import Bowman from '../bowman';
import Magician from '../magician';
import Swordsman from '../swordsman';

import Team from '../team';

test('testing Team iterator', () => {
  const characterOne = new Bowman('Robin');
  const characterTwo = new Magician('Merlin');
  const characterThree = new Swordsman('Philippe');
  const myTeam = new Team(characterOne, characterTwo, characterThree);

  const iterator = myTeam[Symbol.iterator]();
  for (let i = 0; i <= myTeam.characters.length; i += 1) {
    expect(iterator.next().value).toEqual(myTeam.characters[i]);
  }
});

import Bowman from './bowman';
import Magician from './magician';
import Swordsman from './swordsman';

import Team from './team';

const characterOne = new Bowman('Robin');
const characterTwo = new Magician('Merlin');
const characterThree = new Swordsman('Philippe');
const myTeam = new Team(characterOne, characterTwo, characterThree);

const iterator = myTeam[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

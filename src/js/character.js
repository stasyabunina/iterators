export default class Character {
  constructor(name, type, attack, defense) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя персонажа должно содержать только символы, быть не меньше 2 и не больше 10 символов!');
    } else {
      this.name = name;
    }

    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (!types.includes(type)) {
      throw new Error('Такой тип персонажа не существует');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defense = defense;
  }
}

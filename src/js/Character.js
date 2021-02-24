// eslint-disable-next-line no-unused-vars
class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defense = 0;
    this.checkName(name);
  }

  checkName(name) {
    if (typeof name === 'string' && (name.length >= 2 && name.length <= 7)) {
      this.checkType(this.type);
    } else {
      throw new Error('Ошибка. В имени должно быть min - 2 символа, max - 10');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  checkType(type) {
    const accessType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    const accessTypeCheck = accessType.indexOf(type);
    if (accessTypeCheck === -1) {
      throw new Error('Ошибка. Тип должен быть один из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    }
  }

  printCharter() {
    // eslint-disable-next-line no-console
    console.log(`health: ${this.health}, level:  ${this.level}, Атака/защита: ${this.type}:${this.attack}/${this.defence}`);
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defense *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defense / 100);
    }
  }
}

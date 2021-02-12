// eslint-disable-next-line no-unused-vars
class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
    this.printCharter();
  }

  printCharter() {
    // eslint-disable-next-line no-console
    console.log(`health: ${this.health}, level:  ${this.level}, Атака/защита: ${this.type}:${this.attack}/${this.defence}`);
  }
}

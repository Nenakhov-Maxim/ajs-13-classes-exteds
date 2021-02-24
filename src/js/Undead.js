import Character from './Character';
/* eslint-disable eol-last */
// eslint-disable-next-line no-unused-vars
export default class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
    this.attack = 25;
    this.defence = 25;
  }
}
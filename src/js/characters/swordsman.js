import Character from './character';

export class Swordsman extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
    this.attack = 40;
    this.defence = 10;
  }
}

export const swordsman = new Swordsman('swo', 'Swordsman');

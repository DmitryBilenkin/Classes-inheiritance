import Character from './character';

export class Swordsman extends Character {
  constructor(name, type, health, level, attack = 40, defence = 10) {
    super(name, type, health, level);
    this.attack = attack;
    this.defence = defence;
  }
}

export const swordsman = new Swordsman('swo', 'Swordsman');

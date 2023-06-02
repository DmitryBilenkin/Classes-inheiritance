import Character from './character';

export class Magician extends Character {
  constructor(name, type, health, level, attack = 10, defence = 40) {
    super(name, type, health, level);
    this.attack = attack;
    this.defence = defence;
  }
}

export const magician = new Magician('mag', 'Magician');

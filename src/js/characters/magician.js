import Character from './character';

export class Magician extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
    this.attack = 10;
    this.defence = 40;
  }
}

export const magician = new Magician('mag', 'Magician');

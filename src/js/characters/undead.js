import Character from './character';

export class Undead extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
    this.attack = 25;
    this.defence = 25;
  }
}

export const undead = new Undead('un', 'Undead');

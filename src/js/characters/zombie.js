import Character from './character';

export class Zombie extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
    this.attack = 40;
    this.defence = 10;
  }
}

export const zombie = new Zombie('zomb', 'Zombie');

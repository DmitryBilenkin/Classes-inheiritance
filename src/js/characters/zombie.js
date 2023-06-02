import Character from './character';

export class Zombie extends Character {
  constructor(name, type, health, level, attack = 40, defence = 10) {
    super(name, type, health, level);
    this.attack = attack;
    this.defence = defence;
  }
}

export const zombie = new Zombie('bow', 'Zombie');

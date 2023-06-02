import Character from './character';

export class Daemon extends Character {
  constructor(name, type, health, level, attack = 10, defence = 40) {
    super(name, type, health, level);
    this.attack = attack;
    this.defence = defence;
  }
}

export const daemon = new Daemon('daem', 'Daemon');

import Character from './character';

export class Daemon extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
    this.attack = 10;
    this.defence = 40;
  }
}

export const daemon = new Daemon('daem', 'Daemon');

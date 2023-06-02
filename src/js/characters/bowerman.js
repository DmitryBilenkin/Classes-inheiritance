import Character from './character';

export class Bowerman extends Character {
  constructor(name, type, health, level, attack = 25, defence = 25) {
    super(name, type, health, level);
    this.attack = attack;
    this.defence = defence;
  }
}

export const bowerman = new Bowerman('bow', 'Bowerman');

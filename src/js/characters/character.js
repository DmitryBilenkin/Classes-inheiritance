export default class Character {
  constructor(name, type, health = 100, level = 1) {
    try {
      const typeArr = [
        'Bowerman',
        'Swordsman',
        'Magician',
        'Daemon',
        'Undead',
        'Zombie',
      ];

      if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
        this.name = name;
      } else {
        throw new Error('Имя персонажа задано некорректно');
      }
      if (typeArr.includes(type)) {
        this.type = type;
      } else {
        throw new Error('Такой тип персонажа не существует');
      }
      this.health = health;
      this.level = level;
    } catch (err) {
      console.error(err);
    }
  }

  levelUp() {
    try {
      if (this.health !== 0) {
        this.level += 1;
        this.attack *= 1.2;
        this.health = 100;
      } else {
        throw new Error('нельзя повысить левел умершего');
      }
    } catch (err) {
      console.error(err);
    }
  }

  damage(points) {
    try {
      if (this.health >= 0) {
        this.health -= points * (1 - this.defence / 100);
      } else {
        throw new Error('нельзя убить умершего');
      }
    } catch (err) {
      console.error(err);
    }
  }
}

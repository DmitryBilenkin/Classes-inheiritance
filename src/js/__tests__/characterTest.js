import Character from '../characters/character';

test('error name test', () => {
  expect(() => {
    const charTest = new Character('b', 'Bowerman');
    if (typeof charTest.name !== 'string' || charTest.name.length <= 2 || charTest.name.length >= 10) {
      throw new Error('Имя персонажа задано некорректно');
    }
  }).toThrowError('Имя персонажа задано некорректно');
});

test('error type test', () => {
  const typeArr = [
    'Bowerman',
    'Swordsman',
    'Magician',
    'Daemon',
    'Undead',
    'Zombie',
  ];
  const charTest = new Character('bow', 'Bower');
  expect(() => {
    if (!charTest.name.includes(typeArr)) {
      throw new Error('Такой тип персонажа не существует');
    }
  }).toThrowError('Такой тип персонажа не существует');
});

test('error levelUp health = 0 test', () => {
  const charTest = new Character('testName', 'Bowerman');
  charTest.health = 0;
  charTest.levelUp();
  expect(() => {
    if (charTest.health === 0) {
      throw new Error('нельзя повысить левел умершего');
    }
  }).toThrowError('нельзя повысить левел умершего');
});

test('error levelUp health != 0 test', () => {
  const charTest = new Character('testName', 'Bowerman');
  charTest.health = 1;
  charTest.levelUp();
  expect(charTest).toEqual({
    name: 'testName', type: 'Bowerman', health: 100, level: 2, attack: NaN,
  });
});

test('error damage health < 0 test', () => {
  const charTest = new Character('testName', 'Bowerman');
  charTest.health = -1;
  charTest.damage(15);
  expect(() => {
    if (charTest.health < 0) {
      throw new Error('нельзя убить умершего');
    }
  }).toThrowError('нельзя убить умершего');
});

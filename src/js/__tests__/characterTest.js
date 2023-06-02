import Character from '../characters/character';

test('error name test', () => {
  const charTest = new Character('t', 'Bowerman');
  expect(charTest.name).toEqual(undefined);
});

test('error type test', () => {
  const charTest = new Character('testName', 'Bowerm');
  expect(charTest.type).toEqual(undefined);
});

test('error levelUp health = 0 test', () => {
  const charTest = new Character('testName', 'Bowerman');
  charTest.health = 0;
  charTest.levelUp();
  expect(charTest.health).toEqual(0);
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
  expect(charTest.health).toEqual(-1);
});

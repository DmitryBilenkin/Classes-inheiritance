import { Swordsman } from '../characters/swordsman';

test('damage test', () => {
  const swoTest = new Swordsman('testName', 'Swordsman');
  swoTest.damage(20);
  expect(swoTest).toEqual({
    name: 'testName', type: 'Swordsman', health: 82, level: 1, attack: 40, defence: 10,
  });
});

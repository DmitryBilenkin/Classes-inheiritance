import { Zombie } from '../characters/zombie';

test('damage test', () => {
  const zombTest = new Zombie('testName', 'Zombie');
  zombTest.damage(20);
  expect(zombTest).toEqual({
    name: 'testName', type: 'Zombie', health: 82, level: 1, attack: 40, defence: 10,
  });
});

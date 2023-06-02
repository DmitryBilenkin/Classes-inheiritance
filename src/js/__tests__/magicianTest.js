import { Magician } from '../characters/magician';

test('damage test', () => {
  const magTest = new Magician('testName', 'Magician');
  magTest.damage(30);
  expect(magTest).toEqual({
    name: 'testName', type: 'Magician', health: 82, level: 1, attack: 10, defence: 40,
  });
});

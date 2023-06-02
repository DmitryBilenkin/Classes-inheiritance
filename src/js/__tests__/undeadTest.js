import { Undead } from '../characters/undead';

test('damage test', () => {
  const undTest = new Undead('testName', 'Undead');
  undTest.damage(40);
  expect(undTest).toEqual({
    name: 'testName', type: 'Undead', health: 70, level: 1, attack: 25, defence: 25,
  });
});

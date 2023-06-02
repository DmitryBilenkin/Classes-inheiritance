import { Bowerman } from '../characters/bowerman';

test('damage test', () => {
  const bowTest = new Bowerman('testName', 'Bowerman');
  bowTest.damage(20);
  expect(bowTest).toEqual({
    name: 'testName', type: 'Bowerman', health: 85, level: 1, attack: 25, defence: 25,
  });
});

import { Daemon } from '../characters/daemon';

test('damage test', () => {
  const bowTest = new Daemon('testName', 'Daemon');
  bowTest.damage(30);
  expect(bowTest).toEqual({
    name: 'testName', type: 'Daemon', health: 82, level: 1, attack: 10, defence: 40,
  });
});

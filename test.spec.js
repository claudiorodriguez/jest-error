import main from './packages/main';

test('is instance on jest', () => {
  expect(main()).toBe(true);
});

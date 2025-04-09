import { calculatePoints } from '../utils/calculatePoints';

test('calculates points correctly', () => {
  expect(calculatePoints(120)).toBe(90);
  expect(calculatePoints(80)).toBe(30);
  expect(calculatePoints(50)).toBe(0);
  expect(calculatePoints(200)).toBe(200);
});

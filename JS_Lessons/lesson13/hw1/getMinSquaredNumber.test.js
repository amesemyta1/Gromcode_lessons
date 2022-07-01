import { getMinSquaredNumber } from './getMinSquaredNumber.js';

it('should get min squared numbers', () => {
  const result = getMinSquaredNumber([]);

  expect(result).toEqual(null);
});

it('should get min squared numbers', () => {
  const result = getMinSquaredNumber(8);

  expect(result).toEqual(null);
});

it('should get min squared numbers', () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);

  expect(result).toEqual(4);
});

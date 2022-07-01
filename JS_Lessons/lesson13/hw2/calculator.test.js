import { calc } from './calculator';

it('should get calc number + number', () => {
  const result = calc('1 + 3');

  expect(result).toEqual('1 + 3 = 4');
});

it('should get calc number - number', () => {
  const result = calc('5 - 3');

  expect(result).toEqual('5 - 3 = 2');
});

it('should get calc number * number', () => {
  const result = calc('2 * 3');

  expect(result).toEqual('2 * 3 = 6');
});

it('should get calc number / number', () => {
  const result = calc('9 / 3');

  expect(result).toEqual('9 / 3 = 3');
});

it('should get calc not string', () => {
  const result = calc([1, 2, 3, 4, 5]);

  expect(result).toEqual(null);
});

import { getAdults, reverseArray, withdraw } from './index.js';

it('should get adults > 18', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });

  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('should get adults not object', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });

  expect(result).toEqual(null);
});

it('should get adults < 18', () => {
  const result = getAdults({ 'John Doe': 14, Tom: 17, Bob: 15 });

  expect(result).toEqual({});
});

it('should get withdraw', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

  expect(result).toEqual(37);
});

it('should get withdraw', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);

  expect(result).toEqual(-1);
});

it('should get calc not string', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Sara', 10);

  expect(result).toEqual(NaN);
});

it('should get reverse Array', () => {
  const result = reverseArray(['John Doe', 19, 'Tom', 17, 'Bob', 18]);

  expect(result).toEqual([18, 'Bob', 17, 'Tom', 19, 'John Doe']);
});

it('should get reverse object', () => {
  const result = reverseArray({ 'John Doe': 19, Tom: 17, Bob: 18 });

  expect(result).toEqual(null);
});

it('should get reverse []', () => {
  const result = reverseArray([]);

  expect(result).toEqual([]);
});

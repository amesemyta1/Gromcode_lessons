const getFiniteNumbers = arr => arr.slice().filter(num => Number.isFinite(num));

const getFiniteNumbersV2 = arr => arr.slice().filter(num => isFinite(num));

const getNaN = arr => arr.slice().filter(num => Number.isNaN(num));

const getNaNV2 = arr => arr.slice().filter(num => isNaN(num));

const getIntegers = arr => arr.slice().filter(num => Number.isInteger(num));

const testArr = [1, 1.1, 23, '22', 'text', NaN];

console.log(getFiniteNumbers(testArr));

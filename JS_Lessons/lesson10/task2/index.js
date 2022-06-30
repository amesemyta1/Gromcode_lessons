const getParsedIntegers = arr => arr.slice().map(num => Number.parseInt(num));

const getParsedIntegersV2 = arr => arr.slice().map(num => parseInt(num));

const getParsedFloats = arr => arr.slice().map(num => Number.parseFloat(num));

const getParsedFloatsV2 = arr => arr.slice().map(num => parseFloat(num));

testArr = [1, 1.1, 23, '22', 'text', NaN];

console.log(getFiniteNumbers(testArr));

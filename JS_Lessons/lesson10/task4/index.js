/**
 * @param {number[]} arr
 * @return {number}
 */
const getMaxAbsoluteNumber = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }

  if (arr.length === 0) {
    return null;
  }

  const absoluteValues = arr.map(num => Math.abs(num));

  return Math.max(...absoluteValues);
};

// examples
// ===> 10
console.log(getMaxAbsoluteNumber([-10, 10, -10]));
// ===> 2.1
console.log(getMaxAbsoluteNumber([2.1, 0, 1.6]));
// ===> 6
console.log(getMaxAbsoluteNumber([-6, 3, 5, -1]));
// ===> 777
console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20]));

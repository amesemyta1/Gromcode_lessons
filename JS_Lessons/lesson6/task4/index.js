function swap(numbers) {
  const [start, ...rest] = numbers;

  return [...rest, start];
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
  const arr = [];
  const numb = numbers[0];

  for (let i = 1; i < numbers.length; i += 1) {
    arr.push(numbers[i]);
  }
  arr.push(numb);
  return arr;
}

// examples
console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]

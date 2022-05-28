function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  let number = 0;
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    number = arr[i];
    result.unshift(number);
  }
  return result;
}

reverseArray([1, 2, 3, 4, 5, 6, 7, 8]);

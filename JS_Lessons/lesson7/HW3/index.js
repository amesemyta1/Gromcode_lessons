const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.filter(num => num % 2 === 0).map(num => num + delta);
};

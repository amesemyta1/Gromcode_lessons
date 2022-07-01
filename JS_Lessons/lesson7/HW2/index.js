const reverseArray = numbers => {
  if (!Array.isArray(numbers)) {
    return null;
  }

  return numbers.slice().reverse();
};

console.log(reverseArray([]));

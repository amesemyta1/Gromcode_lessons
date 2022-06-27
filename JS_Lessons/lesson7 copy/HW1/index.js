const squareArray = numbers => {
  if (!Array.isArray(numbers)) {
    return null;
  }

  return numbers.map(num => num * num);
};

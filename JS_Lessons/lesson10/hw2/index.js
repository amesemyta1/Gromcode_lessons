const getRandomNumbers = (length, from, to) => {
  const result = [...new Array(length)].map(() => Math.round(Math.random() * (to - from) + from));

  if (to - from < 1) {
    return null;
  }

  return result;
};

// examples
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]

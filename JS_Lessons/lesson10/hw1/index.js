const getTotalPrice = arr => {
  const price = arr.reduce((a, b) => a + b);

  return Math.floor(price * 100) / 100;
};

console.log(getTotalPrice([17.159, 10, 11.1, 15.12321, 17, 232]));

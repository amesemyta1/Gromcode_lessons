function sumOfSquares() {
  // eslint-disable-next-line prefer-rest-params
  return [...arguments].reduce((acc, elem) => {
    return acc + elem * elem;
  }, 0);
}

console.log(sumOfSquares(1, 2, 3, 4));

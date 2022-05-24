/**
 * @param {number} num
 * @return {undefined}
 */
function getPrimes(num) {
  let isPrime = 0;
  for (let i = 2; i <= num; i += 1) {
    isPrime = 1;
    for (let j = 2; j < i; j += 1) {
      if (i % j === 0) {
        isPrime = 0;
        break;
      }
    }
    if (isPrime === 1) console.log(i);
  }
}

console.log(getPrimes(19));

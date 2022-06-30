const cleanTransactionsList = arr => {
  const result = [];

  // eslint-disable-next-line array-callback-return
  arr.map(el => {
    const num = Number(el).toFixed(2);

    if (isNaN(num)) {
      return;
    }

    result.push('$' + num);
  });

  return result;
};

console.log(cleanTransactionsList(['  1.9 ', '16.4', 17, ' 1 dollar ']));

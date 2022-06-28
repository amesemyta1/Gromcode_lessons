const getTotalRevenue = transactions => {
    console.log(transactions.map(el => el.amount).reduce((el1, el2) => el1 + el2));
  };
  
  // examples
  const dayTransactions = [
    { userId: 22, amount: 60, operation: 'sell' },
    { userId: 22, amount: 160, operation: 'buy' },
    { userId: 44, amount: 90, operation: 'sell' },
  ];
  
  const result = getTotalRevenue(dayTransactions); // ==> 310
//   getTotalRevenue(dayTransactions);
//   console.log(result);
'use strict';

/**
 * @param {object[]} transactions
 * @return {number}
 */
function getTotalBalance(transactions) {
  let result = 0;

  for (let i = 0; i < transactions.length; i++) {
    result += transactions[i].amount;
  }
  console.log(result);
  return result;
}

// examples
const dayTransactions = [
  { id: 1001, amount: 60 },
  { id: 1002, amount: -160 },
  { id: 1003, amount: 2000 },
  { id: 1004, amount: -500 },
  { id: 1005, amount: 136 },
];

getTotalBalance(dayTransactions); // ===> 1536
// explanation: 60 - 160 + 2000 - 500 + 136 = 1536

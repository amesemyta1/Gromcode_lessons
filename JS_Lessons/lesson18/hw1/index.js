function saveFuncCalls(func) {
  const callsHistory = [];

  return function history(...args) {
    callsHistory.push(args);
    console.log(history.callsHistory);
    history.callsHistory = callsHistory;
    return func.call(this, ...args);
  };
}

// test without context

function getSum(firstNum, secondNum) {
  return firstNum + secondNum;
}

const sumWithMemory = saveFuncCalls(getSum);
console.log(sumWithMemory(4, 2));
console.log(sumWithMemory(9, 1));
console.log(sumWithMemory.callsHistory);

// text with context

const user = {
  id: 11,
  getId() {
    return this.id;
  },
};

const idWithMemory = saveFuncCalls(user.getId);
console.log(idWithMemory());
console.log(idWithMemory.apply({ id: 1000 }));
console.log(idWithMemory.callsHistory);

const createArrayOfFunctions = (len = 0) => {
  const result = [...new Array(len)];

  result.forEach((el, index) => {
    result[index] = function indexOfArray() {
      return index;
    };
  });

  return result;
};

console.log(createArrayOfFunctions());
console.log(createArrayOfFunctions(9)[5]()); // 5

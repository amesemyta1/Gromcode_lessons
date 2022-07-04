export const createCalculator = () => {
  let num = 0;

  const add = addNum => {
    num += addNum;
  };

  const decrease = addNum => {
    num -= addNum;
  };

  const reset = () => {
    num = 0;
  };

  const getMemo = () => {
    return num;
  };

  return { add, decrease, reset, getMemo };
};

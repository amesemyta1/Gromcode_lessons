let num = 0;

export const add = addNum => {
  return addNum + num;
};

export const decrease = addNum => {
  return addNum - num;
};

export const reset = () => {
  num = 0;
};

export const getMemo = () => {
  return num;
};

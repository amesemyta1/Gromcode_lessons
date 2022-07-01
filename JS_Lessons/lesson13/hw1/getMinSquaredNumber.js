export const getMinSquaredNumber = arr => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }

  const arrAbs = arr.map(el => Math.abs(el));
  const arrMin = Math.min(...arrAbs);

  return arrMin * arrMin;
};

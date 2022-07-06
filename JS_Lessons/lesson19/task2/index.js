const getOwnProps = obj => {
  const result = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const prop in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(prop) && typeof obj.prop !== 'function') {
      result.push(prop);
    }
  }
  return result;
};

const getOwnProps2 = obj => {
  return Object.keys(obj);
};

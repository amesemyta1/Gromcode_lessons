function removeDuplicates(array) {
  if (!Array.isArray(array)) {
    return null;
  }

  const result = [];

  for (let i = 0; i < array.length; i += 1) {
    if (!result.includes(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

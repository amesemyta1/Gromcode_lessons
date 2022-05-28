function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  sum = max + min;
  if (sum > 100) {
    return true;
  }
  return false;
}

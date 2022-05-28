function sortAsc(array) {
  const sortArr = array;
  for (let i = 0; i < array.length - 1; i += 1) {
    for (let j = 0; j < array.length - 1 - i; j += 1) {
      if (array[j + 1] < array[j]) {
        const n = array[j + 1];
        sortArr[j + 1] = array[j];
        sortArr[j] = n;
      }
    }
  }
  console.log(sortArr);
  return sortArr;
}

function sortDesc(array) {
  const sortArr = array;
  for (let i = 0; i < array.length - 1; i += 1) {
    for (let j = 0; j < array.length - 1 - i; j += 1) {
      if (array[j + 1] > array[j]) {
        const n = array[j + 1];
        sortArr[j + 1] = array[j];
        sortArr[j] = n;
      }
    }
  }
  console.log(sortArr);
  return sortArr;
}

sortAsc([2, 6, 7, 9, 23, 77, 11, 1, 44, 66]);
sortDesc([2, 6, 7, 9, 23, 77, 11, 1, 44, 66]);

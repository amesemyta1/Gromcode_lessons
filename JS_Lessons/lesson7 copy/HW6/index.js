const arrAverage = arr => (!Array.isArray(arr) ? null : arr.reduce((a, b) => a + b) / arr.length);

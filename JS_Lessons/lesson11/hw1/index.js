const splitString = (text, len = 10) => {
  if (!isNaN(text)) {
    return null;
  }

  const strArr = [];
  let startPosition = 0;

  while (true) {
    let chunk = text.substr(startPosition, len);

    if (chunk.length === 0) {
      break;
    }
    if (chunk.length < len) {
      chunk += '.'.repeat(len - chunk.length);
    }

    strArr.push(chunk.slice(0));
    startPosition += len;
  }

  return strArr;
};

// test

console.log(splitString('abcd qwed asdsd asdasdasd', 4));
console.log(splitString('abcd qwed asdsd asdasdasd'));

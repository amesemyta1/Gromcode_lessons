const splitText = (text, len = 10) => {
  if (!isNaN(text)) {
    return null;
  }

  console.log(len);
  const strArr = [];
  let startPosition = 0;

  while (true) {
    const chunk = text.substr(startPosition, len);

    if (chunk.length === 0) {
      break;
    }

    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += len;
  }

  return strArr.join('\n');
};

// test

console.log(splitText(123, 4));
console.log(splitText('abcd qwed asdsd asdasdasd'));

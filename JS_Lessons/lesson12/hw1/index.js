const reverseString = text => {
  if (!isNaN(text)) {
    return null;
  }

  return text.split('').reverse().join('');
};

console.log(reverseString('qwe asd zxc'));

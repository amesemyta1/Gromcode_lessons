const calc = expression => {
  const [a, operator, b] = expression.split(' ');
  let result;

  // eslint-disable-next-line default-case
  switch (operator) {
    case '+':
      result = +a + +b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = +a * +b;
      break;
    case '/':
      result = a / b;
      break;
  }

  return `${expression} = ${result}`;
};

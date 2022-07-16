// const sum1 = (a, b) => a + b;

// const mult = a => b => a * b;

// const twice = a => mult(a) + a;

// const triple = a => mult(a) * a;

export function mult(a) {
  return b => {
    return a * b;
  };
}

export function twice(a) {
  return mult(a)(2);
}

export function triple(a) {
  return mult(a)(3);
}

console.log(mult(5)(4));

console.log(twice(7));

console.log(triple(9));

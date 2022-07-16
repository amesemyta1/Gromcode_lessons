// const sum1 = (a, b) => a + b;

export const mult = a => b => a * b;

export const twice = a => mult(a);

export const triple = a => mult(a) * a;

// const test = mult(5)(4);

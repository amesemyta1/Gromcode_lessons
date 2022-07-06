function defer(func, ms) {
  return function () {
    // eslint-disable-next-line prefer-rest-params
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

const user = {
  name: 'Tom',
  sayHi() {
    console.log(`Hi, I'am ${this.name}!`);
  },
};

const deferredHi = defer(user.sayHi, 1000);

deferredHi.call({ name: 'Bob' });

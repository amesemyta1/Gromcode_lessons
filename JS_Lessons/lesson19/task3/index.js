function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

// eslint-disable-next-line consistent-return
User.prototype.setAge = function (age) {
  if (age < 0) {
    return false;
  }
  this.age = age;
  if (age >= 25) {
    this.age = age;
    console.log(`New photo request was sent for ${this.name}`);
  }
  if (age > 0) {
    return age;
  }
};

const user1 = new User('Tom', 17);
const user2 = new User('Bob', 21);
const user3 = new User('Sara', 36);

user1.sayHi();
console.log(user2.requestNewPhoto());
console.log(user2.setAge(27));
console.log(user2);

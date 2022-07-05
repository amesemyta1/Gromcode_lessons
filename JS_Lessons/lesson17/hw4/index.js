const user = {
  firstName: 'Jonh',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    [firstName, lastName] = fullName.split(' ');

    this.firstName = firstName;
    this.lastName = lastName;
  },
};

user.setFullName('Barrie Alien');

console.log(user);

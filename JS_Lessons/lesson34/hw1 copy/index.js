const baseUrl = 'https://62dacf26e56f6d82a76a312f.mockapi.io/api/v1/users';

function getUsersList() {
  return fetch(baseUrl).then(response => response.json());
}

function getUserById(userId) {
  // put your code here
}

function createUser(userData) {
  // put your code here
}

function deleteUser(userId) {
  // put your code here
}

function updateUser(userId, userData) {
  // put your code here
}

// examples
getUsersList().then(users => {
  console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
});

getUserById('2').then(userData => {
  console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
});

const newUserData = {
  email: 'cool@email.com',
  firstName: 'Iron',
  lastName: 'Man',
  age: 42,
};

createUser(newUserData).then(() => {
  console.log('User created');
});

const updatedUserData = {
  email: 'new@email.com',
  firstName: 'John',
  lastName: 'Doe',
  age: 17,
};

updateUser('1', updatedUserData).then(() => {
  console.log('User updated');
});

deleteUser('2').then(() => {
  console.log('User updated');
});

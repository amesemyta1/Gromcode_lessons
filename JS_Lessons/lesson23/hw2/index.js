/* eslint-disable max-classes-per-file */

class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map(el => el.name);
  }

  getUserIds() {
    return this._users.map(el => el.id);
  }

  getUserNameById(userId) {
    return this._users
      .filter(el => el.id === userId)
      .map(el => el.name)
      .pop();
  }
}

// examples
const user1 = new User('1', 'Tom', 'session-id');
const user2 = new User('2', 'Bob', 'session-id');
const user3 = new User('3', 'Zob', 'session-id');
const user4 = new User('4', 'Aob', 'session-id');
const arrUsers = [];
arrUsers.push(user1, user2, user3, user4);
const repUsers = new UserRepository(arrUsers);
console.log(repUsers);
console.log(repUsers.getUserNames());
console.log(repUsers.getUserIds());
console.log(repUsers.getUserNameById('2'));
// // получить свойства можем
// console.log(user.id); // ===> '1'
// console.log(user.name); // ===> 'Tom'
// console.log(user.sessionId); // ===> 'session-id'

// // но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует

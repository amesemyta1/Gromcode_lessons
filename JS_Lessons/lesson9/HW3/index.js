/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

const user = {
    name: 'Tom',
    age: 17,
  };
  
  /* присвой объекту свойство hobby со значением 'football' с помощью точки */
  user.hobby = 'football';

  const anotherKey = 'married';
  /* название свойства хранится в переменной anotherKey. Присвой объекту такое свойство со значением false */
  user.married = false;
  /* присвой объекту свойство 'favorite music' со значением 'rock' */
  user['favorite music'] = 'rock';
  /* присвой объекту свойство 'address', которое будет пустым объкетом */
  user.address = {};
  /* присвой объекту в 'address' свойство 'country', со значением 'Ukraine' */
  user.address.country = 'Ukraine';
  /* присвой объекту в 'address' свойство 'building', со значением 17 */
  user.address.building = 17;
  /* выведи в консоль итоговый объект user */
  console.log(user);

function getKeys(obj) {
    for(let key in obj) {
        arr.push(key);
    }
  }

  getKeys(user);
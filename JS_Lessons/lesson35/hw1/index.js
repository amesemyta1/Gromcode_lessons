export function parseUser(json) {
  try {
    const user = JSON.parse(json);
    return user;
  } catch (e) {
    return null;
  }
}

// const test = parseUser(`{ "name": "John", "age": 30 }`);
// console.log(test);

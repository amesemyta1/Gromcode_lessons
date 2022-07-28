/**
 * @param {string[]} users
 * @return {promise}
 */

const getUsersBlogs = users => {
  try {
    const promises = users.map(async el => {
      const response = await fetch(`https://api.github.com/users/${el}`);
      if (!response.ok) return null;

      return response.json().then(user => user.blog);
    });

    return Promise.all(promises);
  } catch (err) {
    throw new Error('error: ', err);
  }
};

// examples
// getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
// getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]

// algo
// 1. get users data
// 2. use 'map' on users massiv
// 3. map 'el' = 'userName'
// 4. use 'el' to get 'userData'
// 5. use 'userData' to get 'userBlog'

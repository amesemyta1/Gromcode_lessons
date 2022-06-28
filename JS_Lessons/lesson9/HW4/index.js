const getPeople = obj => Object.entries(obj)
    .map(room => room[1])
    .map(people => Object.values(people))
    .flat()
    .map(name => Object.values(name))
    .flat();
  // examples
  rooms = {
    room1: [
        { name: 'Jack' },
        { name: 'Andrey' },
        { name: 'Ann' },
        { name: 'Vasyl' },
    ],
    room2: [
        { name: 'Dan' },
    ],
    room3: [
        { name: 'Denis' },
        { name: 'Max' },
        { name: 'Alex' },
    ],
};
console.log(getPeople(rooms));
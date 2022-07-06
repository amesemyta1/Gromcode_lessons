const vehicle = {
  name: 'Argo',
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  name: 'Argo',
  hasWheels: false,
  liftAnchorUp() {
    console.log(`${this.name} lifting anchor up`);
  },
  liftAnchorDown() {
    console.log(`${this.name} lifting anchor down`);
  },
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    ship.move();
  },
  stopMachine() {
    ship.stop();
    console.log(`${this.name} lifting anchor down`);
  },
  __proto__: vehicle,
};

console.log(ship);
console.log(ship.startMachine());
console.log(ship.stopMachine());

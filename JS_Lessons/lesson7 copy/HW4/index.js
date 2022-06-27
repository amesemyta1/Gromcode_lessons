function withdraw(clients, balances, client, amount) {
  const indexClient = balances[clients.indexOf(client)];
  return indexClient < amount ? -1 : indexClient - amount;
}

withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
console.log(withdraw);
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
console.log(withdraw);

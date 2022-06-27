function withdraw(clients, balances, client, amount) {
  let money = 0;
  const notMoney = -1;

  for (let i = 0; i < clients.length; i += 1) {
    if (clients[i] === client) {
      money = balances[i] - amount;
      if (money < 0) {
        console.log(notMoney);
        return notMoney;
      }
      // eslint-disable-next-line no-param-reassign
      balances[i] = money;
    }
  }
  console.log(balances);
  console.log(money);
  return money;
}

withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);

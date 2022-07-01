/* eslint-disable no-restricted-syntax */

export const getAdults = obj => {
  const result = {};

  if (typeof getAdults !== 'object') {
    return null;
  }

  for (const key in obj) {
    if (obj[key] >= 18) {
      result[key] = obj[key];
    }
  }

  return result;
};

export function withdraw(clients, balances, client, amount) {
  const indexClient = balances[clients.indexOf(client)];
  return indexClient < amount ? -1 : indexClient - amount;
}

export const reverseArray = numbers => {
  if (!Array.isArray(numbers)) {
    return null;
  }

  return numbers.slice().reverse();
};

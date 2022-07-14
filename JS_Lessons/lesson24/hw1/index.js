export const getDiff = (startDate, endDate) => {
  const diff = Math.abs(Math.floor(endDate.getTime() - startDate.getTime()));
  console.log('start: ', startDate, '\nend: ', endDate);
  const days = parseInt(diff / (1000 * 60 * 60 * 24), 10);
  const hours = parseInt((diff / (1000 * 60 * 60)) % 24, 10);
  const minutes = parseInt((diff / (1000 * 60)) % 60, 10);
  const seconds = parseInt((diff / 1000) % 60, 10);
  console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

const test = getDiff(new Date(2022, 6, 1), new Date());

console.log(test);

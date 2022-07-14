export const getDiff = (startDate, endDate) => {
  const result = endDate.getTime() - startDate.getTime();
  console.log('start: ', startDate, '\nend: ', endDate);
  const days = Math.ceil(result / (1000 * 60 * 60 * 24));
  const hours = Math.ceil(result / (1000 * 60 * 60));
  const minutes = Math.ceil(result / (1000 * 60));
  const seconds = Math.ceil(result / 1000);
  console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

const test = getDiff(new Date(2022, 6, 1), new Date());

console.log(test);

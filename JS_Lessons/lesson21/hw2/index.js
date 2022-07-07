export const getItemsList = () => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
};

export const getItemsArray = () => {
  const elemenArray = Array.from(document.querySelectorAll('.tool'));
  console.dir(elemenArray);
  return elemenArray;
};

getItemsList();
getItemsArray();

export function squaredNumbers() {
  const element = document.querySelector('.number');
  const squareElement = element.dataset.number * element.dataset.number;
  console.log(squareElement);
  element.dataset.squaredNumber = squareElement;
}

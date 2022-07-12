function squaredNumbers() {
  const element = document.querySelectorAll('.number');
  for (let i = 0; i < element.length; i += 1) {
    const numberElement = element[i].dataset.number;
    const squaredElement = numberElement * numberElement;
    element[i].dataset.squaredNumber = squaredElement;
  }
}

console.log(squaredNumbers());

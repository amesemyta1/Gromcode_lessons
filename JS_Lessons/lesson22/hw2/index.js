const inputElem = document.querySelector('.text-input');

function consoleValue() {
  console.log(inputElem.value);
}

inputElem.addEventListener('change', consoleValue);

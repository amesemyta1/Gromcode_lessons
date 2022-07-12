const inputElem = document.querySelector('.text-input');

function consoleValue(event) {
  console.log(event.target.value);
}

inputElem.addEventListener('change', consoleValue);

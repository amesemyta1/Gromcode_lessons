const checkboxElem = document.querySelector('.task-status');

function consoleValue() {
  console.log(checkboxElem.checked);
  console.log(checkboxElem.value);
}

checkboxElem.addEventListener('change', consoleValue);

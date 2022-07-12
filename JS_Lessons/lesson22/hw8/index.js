const checkboxElem = document.querySelector('.task-status');

function consoleChecked(event) {
  console.log(event.target.checked);
}

checkboxElem.addEventListener('change', consoleChecked);

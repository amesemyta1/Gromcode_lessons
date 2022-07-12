const checkboxElem = document.querySelectorAll('.pagination__page');

function handleClick(event) {
  const numberElement = event.target.dataset.pageNumber;
  console.log(numberElement);
}

checkboxElem.forEach(elem => {
  elem.addEventListener('click', handleClick);
});

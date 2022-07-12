const btnElem = document.querySelector('.search__btn');
const inputElem = document.querySelector('.search__input');

function inputText() {
  console.log(inputElem.value);
}

btnElem.addEventListener('click', inputText);

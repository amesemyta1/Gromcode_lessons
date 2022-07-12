const buttonElem = document.querySelector('.single-use-btn');

function handleClick() {
  console.log('clicked');
  buttonElem.removeEventListener('click', handleClick);
}

buttonElem.addEventListener('click', handleClick);

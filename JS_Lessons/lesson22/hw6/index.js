const buttonElem = document.querySelectorAll('.btn');

function handleClick(event) {
  console.log(event.target.textContent);
}

buttonElem.forEach(btn => {
  btn.addEventListener('click', handleClick);
});

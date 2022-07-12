export function getTitle() {
  const text = document.querySelector('.title');
  console.log(text.textContent);
  return text.textContent;
}

export function getDescription() {
  const text = document.querySelector('.about');
  console.log(text.innerText);
  return text.innerText;
}

export function getPlans() {
  const text = document.querySelector('.plans');
  console.log(text.innerHTML);
  return text.innerHTML;
}

export function getGoal() {
  const text = document.querySelector('.goal');
  console.log(text.outerHTML);
  return text.outerHTML;
}

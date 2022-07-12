export function finishList() {
  const element1 = document.createElement('li');
  const element8 = document.createElement('li');
  const element4 = document.createElement('li');
  const element6 = document.createElement('li');
  const list = document.querySelector('.list');
  const special = document.querySelector('.special');
  element1.textContent = '1';
  list.prepend(element1);
  element8.textContent = '8';
  list.append(element8);
  element4.textContent = '4';
  special.before(element4);
  element6.textContent = '6';
  special.after(element6);
}

export function getSection(num) {
  const spanElements = document.querySelectorAll('span');

  for (let i = 0; i < spanElements.length; i += 1) {
    if (spanElements[i].dataset.number === String(num)) {
      const elementParent = spanElements[i].closest('.box');
      return elementParent.dataset.section;
    }
  }
}

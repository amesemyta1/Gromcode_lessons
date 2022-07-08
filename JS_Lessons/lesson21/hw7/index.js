export function createButton(buttonText) {
  const button = document.createElement('button');
  button.textContent = buttonText;
  const elBody = document.querySelector('body');
  elBody.append(button);
}
// test ---
// createButton('button');

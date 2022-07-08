export function finishForm() {
  const loginForm = document.querySelector('.login-form');
  const paswInput = document.querySelector('input');
  const input = document.createElement('input');

  input.setAttribute('type', 'text');
  input.setAttribute('name', 'login', 'type', 'text');
  loginForm.prepend(input);
  paswInput.setAttribute('type', 'password');
}

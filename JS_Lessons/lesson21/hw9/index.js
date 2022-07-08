export function finishForm() {
  const loginForm = document.querySelector('.login-form');
  const paswInput = document.querySelector('input');
  const input = document.createElement('input');
  input.setAttribute('name', 'login');
  paswInput.setAttribute('type', 'password');
  loginForm.prepend(input);
}

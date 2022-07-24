const baseUrl = 'https://62dacf26e56f6d82a76a312f.mockapi.io/api/v1/users';

const formElem = document.querySelector('.login-form');
const buttonElem = document.querySelector('.submit-button');
const formInputElem = document.querySelectorAll('.form-input');
const [email, nameElem, password] = formInputElem;

// input form

const checkedInputValue = e => {
  //   const textValue = e.target.value;
  if (email.reportValidity() && nameElem.reportValidity() && password.reportValidity()) {
    buttonElem.removeAttribute('disabled', '');
  }
};

email.addEventListener('input', checkedInputValue);
password.addEventListener('input', checkedInputValue);
nameElem.addEventListener('input', checkedInputValue);

// send form

const postFormData = formData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  }).then(response => response.json());
};

const onSubmit = e => {
  e.preventDefault();
  const { name, email, password } = Object.fromEntries(new FormData(formElem));
  const newUserData = {
    name,
    email,
    password,
  };
  console.log(newUserData);
  postFormData(newUserData).then(userData => {
    alert(JSON.stringify(userData));
    formElem.reset();
  });
};

formElem.addEventListener('submit', onSubmit);

// algo
// 1. get data from input fields
// 2. unlock button
// 3. send data to server
// 4. get an alert with data

// const isRequired = value => (value ? undefined : 'Required');
// const isEmail = value => (value.includes('@') ? undefined : 'Should be an email');

// const validatorsByField = {
//   email: [isRequired, isEmail],
//   password: [isRequired],
// };

// const validate = (fieldName, value) => {
//   const validators = validatorsByField[fieldName];
//   return validators
//     .map(validator => validator(value))
//     .filter(errorText => errorText)
//     .join(', ');
// };

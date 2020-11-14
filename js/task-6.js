const inputRef = document.querySelector('#validation-input');
const lengthAttribute = inputRef.getAttribute('data-length');

inputRef.addEventListener('change', event => {
  inputRef.classList.add('invalid');
  if (event.target.value.length >= lengthAttribute) {
    inputRef.classList.replace('invalid', 'valid');
  }
});

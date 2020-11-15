const inputRef = document.querySelector('#validation-input');
const lengthAttributeRef = inputRef.getAttribute('data-length');
const lengthAttribute = parseInt(lengthAttributeRef);

inputRef.addEventListener('change', event => {
  inputRef.classList.add('invalid');
  if (event.target.value.length === lengthAttribute) {
    inputRef.classList.replace('invalid', 'valid');
  }
});

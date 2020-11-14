const inputRef = document.querySelector('#name-input');
const labelRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
  labelRef.textContent = event.target.value;
  if (labelRef.textContent === '') {
    labelRef.textContent = 'незнакомец';
  }
});

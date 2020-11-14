const decrementRef = document.querySelector('button[data-action="decrement"]');
const incrementRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');

let counterValue = parseInt(valueRef.textContent);

const increaseValue = () => {
  valueRef.textContent = counterValue += 1;
};
const decreaseValue = () => {
  valueRef.textContent = counterValue -= 1;
};

incrementRef.addEventListener('click', increaseValue);
decrementRef.addEventListener('click', decreaseValue);

function random_rgba() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return (
    'rgba(' +
    o(r() * s) +
    ',' +
    o(r() * s) +
    ',' +
    o(r() * s) +
    ',' +
    r().toFixed(1) +
    ')'
  );
}

const controlsRef = document.querySelector('#controls');
const inputRef = document.querySelector('#controls > input');
const renderButtonRef = document.querySelector('button[data-action="render"]');
const destroyButtonRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

const createBoxes = amount => {
  for (let i = 0; i < amount; i += 1) {
    const item = document.createElement('div');
    item.style.backgroundColor = random_rgba();
    item.style.height = `${30 + i * 10}px`;
    item.style.width = `${30 + i * 10}px`;
    boxesRef.appendChild(item);
  }
};

const destroyBoxes = () => {
  boxesRef.innerHTML = '';
};

renderButtonRef.addEventListener('click', () => createBoxes(inputRef.value));

destroyButtonRef.addEventListener('click', () => destroyBoxes());

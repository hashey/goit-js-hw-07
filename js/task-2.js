const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const mainListRef = document.querySelector('#ingredients');

const createListItem = array =>
  array.map(arr => {
    const item = document.createElement('li');
    item.textContent = arr;
    return item;
  });

mainListRef.append(...createListItem(ingredients));

const categoriesRef = document.querySelector('#categories');

console.log(`В списке ${categoriesRef.childElementCount} категории.`);

categoriesRef.querySelectorAll('li.item').forEach(item => {
  const title = item.querySelector('h2');
  const items = item.querySelectorAll('ul > li');

  console.log(
    `Категория: ${title.textContent}\nКоличество элементов: ${items.length}`,
  );
});

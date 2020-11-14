const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('#gallery');

const createGaleriesItem = obj => {
  const item = document.createElement('li');
  const image = document.createElement('img');

  image.classList.add('js-img');
  item.classList.add('js-item');

  image.setAttribute('src', obj.url);
  image.setAttribute('alt', obj.alt);
  item.appendChild(image);
  return item;
};

const imagesHandler = array => array.map(object => createGaleriesItem(object));

galleryRef.append(...imagesHandler(images));

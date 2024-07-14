const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Pobranie referencji do listy ul.gallery
const gallery = document.querySelector('.gallery');

// Utworzenie łańcucha szablonów 
const galleryItems = images.map(image => {
  return `<li><img src="${image.url}" alt="${image.alt}"></li>`;
}).join('');

// Dodanie wszystkich elementów galerii do DOM w jednej operacji
gallery.insertAdjacentHTML('beforeend', galleryItems);

// Po uruchomieniu kodu w przeglądarce, obrazy zostana dodane do listy
// i wyświetlone w galerii obrazów
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Pobranie referencji do listy ul#ingredients
const ingredientsList = document.getElementById('ingredients');

const fragment = document.createDocumentFragment();

// Iteracja po tablicy składników
ingredients.forEach(ingredient => {
  // Utworzenie nowego elementu <li>
  const li = document.createElement('li');
  
  // Dodanie zawartości tekstowej do <li>
  li.textContent = ingredient;
  
  // Dodanie klasy item do <li>
  li.classList.add('item');
  
  // Dodanie <li> do fragmentu
  fragment.appendChild(li);
});

// Dodanie wszystkich <li> do listy ul#ingredients 
ingredientsList.appendChild(fragment);

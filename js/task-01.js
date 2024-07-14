// Listy kategorii
const categories = document.querySelectorAll('#categories .item');

// Liczba kategorii
console.log ('Number of categories: ' + categories.length);
const numberOfCategories = categories.length;

// Iterowanie kategorii i wyświetlanie jej szczegółów
categories.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const categoryElementsCount = category.querySelectorAll('ul li').length;

    console.log(`\nCategory: ${categoryTitle}`);
    console.log(`Elements: ${categoryElementsCount}`);
});

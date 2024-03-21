const categoriesList = document.getElementById('categories');
const categories = categoriesList.querySelectorAll('li.item');
const numCategories = categories.length;
console.log(`Number of categories: ${numCategories}`);
categories.forEach(category => {
  const headerText = category.querySelector('h2').textContent;
  const nestedElements = category.querySelectorAll('li');
  const numNestedElements = nestedElements.length - 1;
  console.log(
    `Category: ${headerText}, Number of elements: ${numNestedElements}`
  );
});

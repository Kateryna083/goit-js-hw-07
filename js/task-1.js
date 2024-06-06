// const categoriesList = document.getElementById("categories");
// // const categoriesList = document.querySelector("#categories");
// const categoriesItems = categoriesList.querySelectorAll(".item");

// // Порахуємо кількість категорій
// console.log(`Number of categories: ${categoriesItems.length}`);

// // Пройдемося по кожній категорії і виведемо назву та кількість елементів у кожній
// categoriesItems.forEach((category) => {
//   const categoryName = category.querySelector("h2").textContent;
//   const categoryElementsCount = category.querySelectorAll("li").length;
//   console.log(`Category: ${categoryName}`);
//   console.log(`Elements: ${categoryElementsCount}`);
// });

// 0000000000000000000000000000000000000000000000

const categoriesList = document.querySelector("#categories");
const categories = Array.from(categoriesList.querySelectorAll(".item"));

console.log(`Number of categories: ${categories.length}`);

categories.map((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const elements = category.querySelectorAll("li");
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elements.length}`);
});

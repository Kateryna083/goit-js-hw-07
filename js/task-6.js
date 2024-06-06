// Функція для отримання випадкового кольору у форматі HEX
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

// Функція для створення елементів зазначеної кількості з випадковими кольорами
function createBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");
  // Очищення вмісту контейнера перед додаванням нових елементів
  boxesContainer.innerHTML = "";

  // Перший розмір елемента
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    // Збільшення розмірів для наступного елемента
    size += 10;
    // Налаштування розмірів та кольору фону
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    // Додавання елемента у контейнер
    boxesContainer.appendChild(box);
  }
}

// Функція для очищення контейнера від елементів
function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  // Очищення контейнера
  boxesContainer.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const createBtn = document.querySelector("[data-create]");
  const destroyBtn = document.querySelector("[data-destroy]");
  const input = document.querySelector('input[type="number"]');

  createBtn.addEventListener("click", () => {
    const amount = parseInt(input.value);
    // Перевірка на коректність значення
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = ""; // Очищення значення вводу
    } else {
      console.error(
        "Invalid input value. Please enter a number between 1 and 100."
      );
    }
  });

  destroyBtn.addEventListener("click", destroyBoxes);
});

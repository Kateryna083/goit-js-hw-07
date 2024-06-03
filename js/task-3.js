const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  // Отримуємо поточне значення введеного імені та очищаємо його від пробілів по краях
  const name = nameInput.value.trim();

  // Перевіряємо, чи ім'я не є порожнім або не складається лише з пробілів
  if (name) {
    // Якщо ім'я не порожнє, виводимо його в спан #name-output
    nameOutput.textContent = name;
  } else {
    // Якщо ім'я порожнє або складається лише з пробілів, виводимо "Anonymous"
    nameOutput.textContent = "Anonymous";
  }
});

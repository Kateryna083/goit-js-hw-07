const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);

  loginForm.reset();
});

// Цей код спочатку отримує посилання на форму за допомогою document.querySelector('.login-form'). Потім він додає прослуховувач подій для події submit на цій формі.

// При спрацьовуванні події submit відбувається наступне:

// Викликається метод preventDefault(), щоб уникнути перезавантаження сторінки.
// Отримуються значення елементів форми та очищаються від пробілів по краях за допомогою методу trim().
// Перевіряється, чи заповнені всі поля форми. Якщо ні, виводиться повідомлення alert і виконання функції припиняється.
// Якщо всі поля заповнені, значення полів збираються в об'єкт formData.
// Об'єкт formData виводиться в консоль.
// Заповнені значення полів форми очищаються методом reset().

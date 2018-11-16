"use strict"
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = (login) => {
    return login.length >= 4 && login.length <= 16;
};

const isLoginUnique = (allLogins, login) => {
  for (const login of logins) {
    allLogins.includes(login);
  }
    return login;
};

const addLogin = (login) => {
    if (!isLoginValid(login)) {
        alert('ПОМИЛКА! Логін має бути від 4 до 16 символів!');
        return;
    }
    if (isLoginUnique(logins, login)) {
        alert('Такий логін вже використовується!');
        return;
    }
    logins.push(login);
    alert('Ваш логін внесено!');
};

// Вызовы функции для проверки
addLogin('Ajax'); // 'Логин успешно добавлен!'
addLogin('robotGoogles'); // 'Такой логин уже используется!'
addLogin('Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin('jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов's

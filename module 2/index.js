let userInput = '';
const numbers = [];
let total = 0;

do {
    userInput = prompt('Введіть число');

    if (userInput === 0 || userInput === null) {
        break;
      };
    numbers.push(userInput);

} while (true);

for (var i = 0; i < numbers.length; i++) {
 numbers[i]
};

for (let i = 0; i < numbers.length; i += 1) {
    total += +numbers[i];
};
alert(`Загальна сума дорівнює ${total}`);

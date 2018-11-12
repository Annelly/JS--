"use strict"
const products = {
  productDatabase: [
    {name: 'bread' , price: 10},
    {name: 'milk' , price: 15},
    {name: 'apples' , price: 20},
    {name: 'chicken' , price: 50},
    {name: 'cheese' , price: 40},
],
};
function Cashier({ name = 'manager' , productDatabase}) {
  this.name = name;
  this.productDatabase = productDatabase;
}
const onSuccess = (change) => console.log(`Спасибо за покупку, ваша сдача ${change}!`);
const onError = () => console.log('Очень жаль, вам не хватает денег на покупки');
const reset = () => return 0;

const getNumber = function(reset, onError, onSuccess) {
if (
 typeof onReset !== 'function' ||
 typeof onError !== 'function' ||
 typeof onSuccess !== 'function'
 ) {
 return;
  }

const getCustomerMoney = function(value) {
if (customerMoney += totalPrice) {
  onSuccess();
  return;
}

if (customerMoney -= totalPrice) {
 onError();
  return;
}
onReset()
}
const countTotalPrice = function(order) {

}
const countChange = function(totalPrice) {

}
const mango = new Cashier('Mango', products);

// Проверяем исходные значения полей
console.log(mango.name); // Mango
console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
console.log(mango.customerMoney); // 0

// Вызываем метод countTotalPrice для подсчета общей суммы
// передавая order - список покупок пользователя
const totalPrice = mango.countTotalPrice(order);

// Проверям что посчитали
console.log(totalPrice); // 110

// Вызываем getCustomerMoney для запроса денег покупателя
mango.getCustomerMoney(300);

// Проверяем что в поле с деньгами пользователя
console.log(mango.customerMoney); // 300

// Вызываем countChange для подсчета сдачи
const change = mango.countChange();

// Проверяем что нам вернул countChange
console.log(change); // 190

// Проверяем результат подсчета денег
if(change !== null) {
   // При успешном обслуживании вызываем метод onSuccess
  mango.onSuccess(change); // Спасибо за покупку, ваша сдача 190
} else {
  // При неудачном обслуживании вызываем метод onError
  mango.onError(); // Очень жаль, вам не хватает денег на покупки
}

// Вызываем reset при любом исходе обслуживания
mango.reset();

// Проверяем значения после reset
console.log(mango.customerMoney); // 0

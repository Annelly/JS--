"use strict"
const products = {
  productDatabase: [
    {product: 'bread' , price: 10},
    {product: 'milk' , price: 15},
    {product: 'apples' , price: 20},
    {product: 'chicken' , price: 50},
    {product: 'cheese' , price: 40},
],
};
function Cashier(name , productDatabase, customerMoney) {
  this.name = name;
  this.productDatabase = productDatabase;
  this.customerMoney = 0;

}

const getCustomerMoney = function(value) {
this.customerMoney = value;
}

const countTotalPrice = function(order) {
  const keys = Object.keys(order);
  for (const key in keys) {
        if(order[product] === productDatabase[product]){
          const totalPrice = productDatabase[price] * order[amount]
        }
      const change = totalPrice - customerMoney;
        }
    };

}
const onSuccess = function(countChange) {
  console.log(`Спасибо за покупку, ваша сдача ${change}!`);
}
const onError = function(countChange) {
  console.log('Очень жаль, вам не хватает денег на покупки');
}
const reset = function(countChange) {
   return 0;
}
const getNumber = function(reset, onError, onSuccess) {
if (
 typeof onReset !== 'function' ||
 typeof onError !== 'function' ||
 typeof onSuccess !== 'function'
 ) {
 return;
  }

const countChange = function(totalPrice) {
  if (customerMoney >= countTotalPrice) {
    onSuccess();
    return;
  }

  if (customerMoney <= countTotalPrice) {
   onError();
    return;
  }
  onReset()
  }
}
const order = [
  {product: 'bread', amount: 2},
  {product: 'milk', amount: 2},
  {product: 'apples', amount: 1},
  {product: 'cheese', amount: 1}
];
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

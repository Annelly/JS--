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
const Cashier = function(name , productDatabase, customerMoney) {
  this.name = name;
  this.productDatabase = productDatabase;
  this.customerMoney = 0;


  this.getCustomerMoney = (value) => {
  this.customerMoney = value;
  }

  this.countTotalPrice = (order) => {
    const keys = Object.keys(order);
    for (const key in keys) {
          if(order[product] === productDatabase[product]){
            this.totalPrice = () => {
              return productDatabase[price] * order[amount]
            }
          }
        }
      }

  this.onSuccess = (countChange) => {
    console.log(`Спасибо за покупку, ваша сдача ${change}!`);
  }

  this.onError = (countChange) => {
    console.log('Очень жаль, вам не хватает денег на покупки');
  }

  this.countChange = (totalPrice) => {
    if (customerMoney >= totalPrice) {
      onSuccess();
      return;
    }

    if (customerMoney <= totalPrice) {
     onError();
      return;
    }
   this reset = (countChange) => {
    return 0;
   }
    this.change = () => {
   return totalPrice - customerMoney;
   }
  }
};

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

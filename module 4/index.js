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

const getCustomerMoney = function(value)
if (customerMoney += totalPrice) {
  onSuccess();
  return;
}

if (customerMoney -= totalPrice) {
 onError();
  return;
}
onReset()
};

getNumber(reset, onError, onSuccess);

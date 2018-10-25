'use strict'

const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const userLogin = prompt('Hello user , please enter your login!');
const rightLogin = 'Please enter your password!';
const rightPassword = 'Welcome dear user';
const enterCanceled = 'Canceled';
const incorectInput = 'Admission is forbidden!';


if (userLogin === adminLogin) {
    let userPass = prompt(rightLogin);
    if (userPass === adminPassword) {
        alert(rightPassword);
    } else if (userPass === null) {
        alert(enterCanceled);
    } else {
        alert(incorectInput);
    }
} else if (userLogin === null) {
    alert(enterCanceled);
} else {
    alert(incorectInput);
}
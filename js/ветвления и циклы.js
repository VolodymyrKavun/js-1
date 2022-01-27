// ** Інструкція "if" 

// if (умова) {
//     // тіло if
//   }

//  !!! Вхідні дані, які приводяться до буля, називаються умовою. Умова ставиться після оператора "if" в круглих дужках. Якщо умова приводиться до "true", то виконується код у фігурних дужках тіла "if".

// let cost = 0;
// const subscription = "pro";

// if (subscription === "pro") {
//   cost = 100;
// }

// console.log(cost); // 100

// !!! Якщо умова приводиться до "false", код у фігурних дужках буде пропущений.

// let cost = 0;
// const subscription = "free";

// if (subscription === "pro") {
//   cost = 100;
// }

// console.log(cost); // 0



// ** Інструкція "if...else"

// if (умова) {
//     // тіло if
//   } else {
//     // тіло else
//   }

// !!! Розширює синтаксис "if" таким чином, що якщо умова приводиться до "false", виконається код у фігурних дужках після оператора "else".

// let cost;
// const subscription = "free";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 0

// !!! Якщо умова приводиться до "true", тіло блока "else" ігнорується.

// let cost;
// const subscription = "pro";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 100


// ** Інструкція "else...if"

// Конструкція "if...else" може перевірити і зреагувати на виконання або невиконання лише однієї умови.

// let cost;
// const subscription = "premium";

// if (subscription === "free") {
//   cost = 0;
// } else if (subscription === "pro") {
//   cost = 100;
// } else if (subscription === "premium") {
//   cost = 500;
// } else {
//   console.log("Invalid subscription type");
// }

// console.log(cost); // 500

// ! При першому true перевірки припиняться і виконається лише один сценарій, який відповідає цьому true. Тому, такий запис варто читати як: шукаю перший збіг умови, ігнорую все інше.




// *** Тернарний оператор
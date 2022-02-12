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

// * При першому true перевірки припиняться і виконається лише один сценарій, який відповідає цьому true. Тому, такий запис варто читати як: шукаю перший збіг умови, ігнорую все інше.

// *** Тернарний оператор Заміна 'if...else'

// <умова> ? <вираз_якщо_умова_правдива> : <вираз_якщо_умова_хибна></вираз_якщо_умова_хибна>

//  'if...else'
// let type;
// const age = 20;

// if (age >= 18) {
//   type = "adult";
// } else {
//   type = "child";
// }

// console.log(type); // "adult"

// *** Тернарний оператор

// const age = 20;
// const type = age >= 18 ? "adult" : "child";
// console.log(type); // "adult"

// ***  Інструкція `switch` використовується тільки для порівняння '==='

// switch (значення) {
//     case значення:
//       інструкції;
//       break;

//     case значення:
//       інструкції;
//       break;

//     default:
//       інструкції;
//   }

//  ПРИКЛАД

// let cost;
// const subscription = "premium";

// switch (subscription) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
//     break;

//   default:
//     console.log("Invalid subscription type");
// }

// console.log(cost); // 500

// *** Область видимості (variable scope). Змінна 'value'

// const value = 5;

// if (true) {
//   console.log("Block scope: ", value); // 5
// }

// console.log("Global scope: ", value); // 5

// === Будь-яка конструкція, яка використовує фігурні дужки {} (умови, цикли, функції тощо), створює нову локальну область видимості, і змінні, оголошені в цій області видимості, з використанням `let` або `const`, - недоступні за межами цього блоку.

// if (true) {
//     const value = 5;
//     console.log("Block scope: ", value); // 5
//   }

//   console.log("Global scope: ", value); // ReferenceError: value is not defined

// *Роз'яснення :
// Глобальна область вже присутня, створимо в ній змінну 'global'
// Потім, використовуючи оператор 'if', створимо блочну область видимості block 'A'
// Всередині області видимості block 'A' поставимо ще один оператор 'if', який створить вкладену область видимості block 'B'
// На одному рівні з block 'A', створимо область видимості block 'C', так само використовуючи оператор 'if'

// const global = "global";

// if (true) {
//   const blockA = "block A";

//   // Бачимо глобальну + локальну A
//   console.log(global); // 'global'
//   console.log(blockA); // block A

//   // Змінні blockB і blockC не знайдені в доступних областях видимості.
//   // Буде помилка звернення до змінної.
//   console.log(blockB); // ReferenceError: blockB is not defined
//   console.log(blockC); // ReferenceError: blockC is not defined

//   if (true) {
//     const blockB = "block B";

//     // Бачимо глобальну + зовнішню A + локальну B
//     console.log(global); // global
//     console.log(blockA); // block A
//     console.log(blockB); // block B

//     // Змінна blockC не знайдена в доступних областях видимості.
//     // Буде помилка звернення до змінної.
//     console.log(blockC); // ReferenceError: blockC is not defined
//   }
// }

// if (true) {
//   const blockC = "block C";

//   // Бачимо глобальну + локальну C
//   console.log(global); // global
//   console.log(blockC); // block C

//   // Змінні blockA і blockB не знайдені в доступних областях видимості.
//   // Буде помилка звернення до змінної.
//   console.log(blockA); // ReferenceError: blockA is not defined
//   console.log(blockB); // ReferenceError: blockB is not defined
// }

// // Бачимо лише глобальну
// console.log(global); // global

// // Змінні blockA, blockB і blockC не знайдені в доступних областях видимості.
// // Буде помилка звернення до змінної.
// console.log(blockA); // ReferenceError: blockA is not defined
// console.log(blockB); // ReferenceError: blockB is not defined
// console.log(blockC); // ReferenceError: blockC is not defined

// *** ЦИКЛИ

// * Цикл `while`

// Цикл з передумовою — цикл, який виконується, доки правдива якась умова, тіло може не виконатися жодного разу, якщо умова від самого початку - хибна.

// while (condition) {
//     // код, тіло циклу (statement)
//   }

// Конструкція while створює цикл, який виконує блок коду, доки умова перевірки оцінюється як `true`.

// === РОЗ'ЯСНЕННЯ :
// `condition`, тобто умова, оцінюється перед кожною ітерацією циклу.
// Якщо `condition` оцінюється як `true`, оператор `while` виконує `statement`.
// Якщо `condition` оцінюється як `false`, виконання циклу переривається і скрипт продовжує виконувати інструкції після циклу `while`.

// === ПРИКЛАД

// let counter = 0;

// while (counter < 10) {
//   console.log("counter: ", counter);
//   counter += 1;
// }

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// *** Цикл 'do...while'.
// Цикл з постумовою - цикл, в якому умова перевіряється після виконання тіла циклу. З цього випливає, що тіло завжди виконується хоча б один раз.

// do {
//     // statement
//   } while (condition);

// Конструкція 'do...while' створює цикл, який виконує блок коду доти, доки 'condition' не поверне 'false'.

// let password = "";

// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// *** Цикл 'for'.

// Цикл з лічильником - цикл, в якому певна змінна змінює своє значення із заданого початкового до кінцевого значення з деяким кроком, і для кожного значення цієї змінної тіло циклу виконується один раз.

// === for (initialization; condition; post-expression) {
//     // statements
//   }

// == Змінні-лічильники, за традицією, називаються літерами 'i', 'j' і 'k'.

// for (let i = 0; i <= 20; i += 5) {
//     console.log(i);
//   }

// * ПРИКЛАД

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum); // 6

// Згадаємо про операцію 'a % b' і виведемо остачу від ділення за допомогою циклу.

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// *** Оператор 'break'.  Перериває виконання циклу і передає управління на рядок після його тіла.

// for (let i = 0; i <= 5; i += 1) {
//     console.log(i);

//     if (i === 3) {
//       console.log("Знайшли число 3, перериваємо виконання циклу");
//       break;
//     }
//   }

//   console.log("Лог після циклу");

// *** Оператор 'continue'.

// Перериває не увесь цикл, а тільки виконання поточної ітерації. Його використовують, якщо зрозуміло, що на поточній ітерації циклу більше немає що робити або взагалі не потрібно нічого робити, і час переходити до наступної ітерації.

// Використовуємо цикл для введення тільки непарних чисел. Для парних i спрацьовує 'continue', виконання тіла припиняється і управління передається до наступної ітерації.

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
// }

// TODO: ==== Example 1 - Ввод пользователя и ветвления ====
// Используя конструкцию if..else и prompt, напиши код, который будет спрашивать: "Какое официальное название JavaScript?". Если пользователь вводит ECMAScript, то показывай alert со строкой "Верно!", в противном случае - "Не знаете? ECMAScript!"

// 1) const userInput = prompt("Какое официальное название JavaScript?");

// if (userInput?.toLowerCase() === "ecmascript") {
//   alert("Верно!");
// } else {
//   alert("Не знаете? ECMAScript!");
// }
// console.log(alert);

// 2) const userInput = prompt("Какое официальное название JavaScript?");
// let answer =
//   userInput?.toLowerCase() === "ecmascript"
//     ? "Верно!"
//     : "Не знаете? ECMAScript!";
// console.log(answer);

// === Example 2 - Отображение времени (if...else) ===
// Напиши скрипт для отображения часов и минут в консоли браузера в виде строки формата "14 ч. 26 мин.". Если значение переменной minutes равно 0, то выводи строку "14 ч.", без минут.

// 1) const hours = 14;
// const minutes = 26;
// let timestring;

// if (minutes > 0) {
//   timestring = `${hours} ч. ${minutes} мин.`;
// } else {
//   timestring = `${hours} ч.`;
// }
// console.log(timestring);

// 2) const hours = 14;
// const minutes = 26;
// let timestring = minutes > 0 ? `${hours} ч. ${minutes} мин.` : `${hours} ч.`;
// console.log(timestring);

// === Example 3 - Ветвеления ===
// Напиши скрипт, который выводит в консоль строку "Это положительное число", если в prompt пользователь ввел число больше нуля. Если был введен ноль, выводи в консоль строку "Это ноль". Если передали отрицательное число, в консоли должна быть строка "Это отрицательное число".

// const userInput = prompt("Введите число");
// const userInputNumber = Number(userInput);

// if (Number.isNaN(userInputNumber) || !userInput) {
//     console.log('Это не число');
// } else if (userInput > 0) {
//    console.log("Это положительное число");
// } else if (userInput < 0) {
//   console.log("Это отрицательное число");
// } else {
//    console.log("Это ноль");
// }

// === Example 4 - Вложенные ветвления ===
// Напиши скрипт, который сравнивает числа в переменных a и b. Если оба значения больше 100, то выведи в консоль максимальное из них. В противном случае в консоли должна быть сумма значения b и числа 512.

// const a = 120;
// const b = 180;

// 1) if (a > b) {
//   console.log(a);
// } else if (b > a) {
//   console.log(b);
// } else {
//   console.log(b + 512);
// }

// 2) if (a > 100 && b > 100) {
//   console.log(a > b ? a : b);
// } else {
//   console.log(b + 512);
// }

// === Example 5 - Форматирование ссылки (endsWith) ===
// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /. Если нет, добавь в конец значения link этот символ. Используй конструкцию if...else.

// 1) let link = "https://my-site.com/about";

// if (!link.endsWith("/")) {
//   link += "/";
// }

// console.log(link);

// 2) let link = "https://my-site.com/about";
// if (link[link.length - 1] !== "/") {
//   link += "/";
// }
// console.log(link);

// === Example 6 - Форматирование ссылки (includes и логическое «И») ===
// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /. Если нет, добавь в конец значения link этот символ, но только в том случае, если в link есть подстрока "my-site". Используй конструкцию if...else.

// let link = "https://my-site.com/about";
// // Пиши код ниже этой строки
// if (link.includes("my-site") && !link.endsWith("/")) {
//   link += "/";
// }
// // Пиши код выше этой строки
// console.log(link);

// === Example 7 - Форматирование ссылки (тернарный оператор) ===
// Выполни рефакторинг кода задачи номер 4 используя тернарный оператор.

// let link = "https://my-site.com/about";
// // if (link.includes("my-site") && !link.endsWith("/")) {
// //   link += "/";
// // }
// // Решение: тернарник
// link += link.includes("my-site") && !link.endsWith("/") ? "/" : "";
// console.log(link);

// === Example 8 - if...else и логические операторы ===
// Напиши скрипт который будет выводить в консоль браузера строку в зависимости от значения переменной hours.

// Если значение переменной hours:

// меньше 17, выводи строку "Pending"
// больше либо равно 17 и меньше либо равно 24, выводи строку "Expires"
// больше 24 , выводи строку "Overdue"

// const hours = 17;

// if (hours < 17) {
//   console.log("Pending");
// } else if (hours >= 17 && hours <= 24) {
//   console.log("Expires");
// } else {
//   console.log("Overdue");
// }

// === Example 9 - Дедлайн сдачи проекта (if...else) ===
// Напиши скрипт для отображения времени дедлайна сдачи проекта. Используй конструкцию if...else.

// Eсли до дедлайна 0 дней - выведи строку "Сегодня"
// Eсли до дедлайна 1 день - выведи строку "Завтра"
// Eсли до дедлайна 2 дня - выведи строку "Послезавтра"
// Eсли до дедлайна 3+ дней - выведи строку "Дата в будущем"
// const daysUntilDeadline = 3;
// // Пиши код ниже этой строки

// if (daysUntilDeadline === 0) {
//   console.log("Сегодня");
// } else if (daysUntilDeadline === 1) {
//   console.log("Завтра");
// } else if (daysUntilDeadline === 2) {
//   console.log("Послезавтра");
// } else {
//   console.log("Дата в будущем");
// }

// === Example 10 - Дедлайн сдачи проекта (switch) ===
// Выполни рефакторинг кода задачи номер 5 используя switch.

const daysUntilDeadline = 5;

// if (daysUntilDeadline === 0) {
//   console.log("Сегодня");
// } else if (daysUntilDeadline === 1) {
//   console.log("Завтра");
// } else if (daysUntilDeadline === 2) {
//   console.log("Послезавтра");
// } else {
//   console.log("Дата в будущем");
// }

// *Тернарник

// switch (daysUntilDeadline) {
//   case 0:
//     console.log("Сегодня");
//     break;

//   case 1:
//     console.log("Завтра");
//     break;

//   case 2:
//     console.log("Послезавтра");

//   default:
//     console.log("Дата в будущем");
// }

// === Example 11 - Цикл for ===
// Напиши цикл for который выводит в консоль браузера числа по возрастанию от min до max, но только если число кратное 5.

// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// === Example 12 - Ввод пользователя и ветвления ===
// Напиши скрипт, который будет спрашивать логин с помощью prompt и логировать результат в консоль браузера.

// Если посетитель вводит "Админ", то prompt запрашивает пароль
// Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
// В противном случае вывести строку "Я вас не знаю"
// Пароль проверять так:

// Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
// Иначе выводить строку "Неверный пароль"

// const userInput = prompt("enter login");

// if (userInput === "Админ") {
//   const password = prompt("enter password");

//   if (password === "Я админ") {
//     console.log("Здравствуйте!");
//   } else {
//     console.log("Неверный пароль");
//   }
// } else {
//   if ("login" === null || "login" === "") {
//     console.log("Отменено");
//   } else {
//     console.log("Я вас не знаю");
//   }
// }

"user strict";
// Строгий режим

// * Оголошення змінних

// const yearOfBirth = 1992;
// console.log(yearOfBirth);

// * константи і КОНСТАНТИ

// const COLOR_TEAL = "#009688";
// console.log(COLOR_TEAL);

// let age = 20;

// age = 45;
// console.log(age);

// * Звернення до зміннної

// // ❌ Неправильно, буде помилка
// age = 15; // ReferenceError: Cannot access 'age' before initialization
// console.log(age); // ReferenceError: age is not defined

// // Оголошення змінної age
// let age = 20;

// // ✅ Правильно, звертаємось після оголошення
// age = 25;
// console.log(age); // 25

// * Оператор "typeof"

// let username;
// console.log(typeof username); // "undefined"

// let inputValue = null;
// console.log(typeof inputValue); // "object"

// const quantity = 17;
// console.log(typeof quantity); // "number"

// const message = "JavaScript is awesome!";
// console.log(typeof message); // "string"

// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen); // "boolean"

// * Виведення даних

// const message = "JavaScript is awesome!";
// console.log(message); // JavaScript is awesome!

// const username = "Mango";
// console.log("Username is ", username); // Username is Mango

// * Виведення даних

// const message = "JavaScript is awesome!";
// console.log(message); // JavaScript is awesome!

// const username = "Mango";
// console.log("Username is ", username); // Username is Mango

// * Метод alert() виводить модальне вікно, текст якого відповідає значенню змінної (або літерала), яку передаємо в дужках.

// const message = "JavaScript is awesome!";
// alert(message);

// * Отримання даних "confirm()"

// Просимо клієнта підтвердити бронювання готелю
// і зберігаємо результат роботи confirm у змінну

// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

// * "prompt() "

// Запитуємо назву готеля, в якому хотів би зупинитися клієнт
// і зберігаємо результат виклику prompt у змінну.

// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);

// * Важлива особливість "prompt" полягає в тому, що незалежно від того, що ввів користувач, завжди повернеться рядок. Тобто, якщо користувач ввів 5, то повернеться не число 5, а рядок "5".

// const value = prompt("Please enter a number!");
// console.log(typeof value); // "string"
// console.log(value); // "5"

// *** Оператори
// * Математичні оператори

// const x = 10;
// const y = 5;

// // Додавання
// console.log(x + y); // 15

// // Віднімання
// console.log(x - y); // 5

// // Множення
// console.log(x * y); // 50

// // Ділення
// console.log(x / y); // 2

// // Остача від ділення
// console.log(x % y); // 0

// // Додавання із заміною (також є для всіх інших операторів)
// let value = 5;

// // Аналогічно запису value = value + 10;
// value += 10;
// console.log(value); // 15

// * Оператори порівняння
// a > b і a < b - більше/менше
// a >= b і a <= b - більше/менше або дорівнює
// a == b - рівність
// a != b - нерівність
// a === b - строга рівність
// a !== b - строга нерівність

// const x = 5;
// const y = 10;
// const z = 5;

// console.log("x > y:", x > y); // false
// console.log("x < y:", x < y); // true
// console.log("x < z:", x < z); // false
// console.log("x <= z:", x <= z); // true
// console.log("x === y:", x === y); // false
// console.log("x === z:", x === z); // true
// console.log("x !== y:", x !== y); // true
// console.log("x !== z:", x !== z); // false

// * Оператори рівності

// ✅ Добре, приведення типів не виконується
// console.log(5 === "5"); // false
// console.log(5 === 5); // true
// console.log(5 !== "5"); // true
// console.log(5 !== 5); // false
// console.log(1 === true); // false
// console.log(1 !== true); // true

// *** Числа
// * Приведення до числа  "Number(val)"

// const valueA = "5";
// console.log(Number(valueA)); // 5
// console.log(typeof Number(valueA)); // "number"

// const valueB = "random string";
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // "number"

// **/ Методи "Number.parseInt()"" і "Number.parseFloat()"

// * Метод "Number.parseInt()" парсить з рядка ціле число.
// console.log(Number.parseInt("5px")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("qweqwe")); // NaN

// * "Метод Number.parseFloat()" парсить з рядка дробове число.
// console.log(Number.parseFloat("5px")); // 5
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("qweqwe")); // NaN

// * Перевірка на число  "Number.isNaN(val)"  відповідає на запитання "Це Not A Number?"

// const validNumber = Number("51"); // 51
// console.log(Number.isNaN(validNumber)); // false

// const invalidNumber = Number("qweqwe"); // NaN
// console.log(Number.isNaN(invalidNumber)); // true

// * Додавання чисел з рухомою крапкою "toFixed()"

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 + 0.24).toFixed(2)); // 0.41

// *** Клас "Math"

// "Math.floor(num)" - повертає найбільше ціле число,
// менше, або яке дорівнює зазначеному числу
// console.log(Math.floor(1.7)); // 1

// // "Math.ceil(num)" - повертає найменше ціле число,
// // більше, або яке дорівнює зазначеному числу.
// console.log(Math.ceil(1.2)); // 2

// // "Math.round(num)" - повертає значення числа,
// // округленого до найближчого цілого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// // "Math.max(num1, num2, ...)" - повертає найбільше ціле число з набору
// console.log(Math.max(20, 10, 50, 40)); // 50

// // "Math.min(num1, num2, ...)" - повертає найменше ціле число з набору
// console.log(Math.min(20, 10, 50, 40)); // 10

// // "Math.pow(base, exponent)" - піднесення до степеня
// console.log(Math.pow(2, 4)); // 16

// // "Math.random()" - повертає псевдовипадкове число в діапазоні [0, 1)
// console.log(Math.random()); // випадкове число між 0 і 1
// console.log(Math.random() * (10 - 1) + 1); // псевдовипадкове число від 1 до 10

// ***** РЯДКИ

// const username = "Mango";
// console.log(username);

// * Конкатенація рядків  (додавання рядків.) "+"

// const message = "Mango " + "is" + " happy";
// console.log(message); // Mango is happy

// console.log(1 + "2"); // "12"
// console.log(1 + "2" + 4); // "124"
// console.log(1 + 2 + "4"); // "34"

// * Шаблонні рядки  "${вираз}"

// const guestName = "Манго";
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting); // "Welcome Mango, your room number is 207!"

// *** Властивості і методи рядків
// * Властивість "length"   (довжина рядка)

// const message = "Welcome to Bahamas!";
// console.log(message.length); // 19
// console.log("There is nothing impossible to him who will try".length); // 47

// * Метод "toLowerCase()"  перетворює всі його символи в нижній регістр.

// const message = "Welcome to Bahamas!";
// console.log(message.toLowerCase()); // "welcome to bahamas!"
// console.log(message); // "Welcome to Bahamas!"

// * Метод "toUpperCase()"  перетворює всі його символи в верхній регістр.

// const message = "Welcome to Bahamas!";
// console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log(message); // "Welcome to Bahamas!"

// * Приклад
// const BRAND_NAME = "SAMSUNG";
// const userInput = "saMsUng";
// const normalizedToUpperCaseInput = userInput.toUpperCase();

// console.log(userInput); // 'saMsUng'
// console.log(userInput === BRAND_NAME); // false
// console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
// console.log(normalizedToUpperCaseInput === BRAND_NAME); // true

// * Метод "indexOf()"  Повертає позицію (індекс), на якій знаходиться перший збіг підрядка або -1, якщо нічого не знайдено.

// const message = "Welcome to Bahamas!";
// console.log(message.indexOf("to")); // 8
// console.log(message.indexOf("hello")); // -1

// * Метод "includes()"  Перевіряє, чи міститься підрядок в рядку, повертає буль - true, якщо міститься, і false - в іншому випадку. Регістр символів в рядку і підрядку має значення, оскільки, наприклад, літера "a" не дорівнює літері "А".

// const productName = "Ремонтний дроїд";

// console.log(productName.includes("н")); // true
// console.log(productName.includes("Н")); // false
// console.log(productName.includes("дроїд")); // true
// console.log(productName.includes("Дроїд")); // false
// console.log(productName.includes("Ремонтний")); // true
// console.log(productName.includes("ремонтний")); // false

// * Метод "endsWith()"  Дозволяє визначити, чи завершується рядок символами (підрядком), зазначеними в дужках, повертаючи true або false.

// const jsFileName = "script.js";
// console.log(jsFileName.endsWith(".js")); // true

// const cssFileName = "styles.css";
// console.log(cssFileName.endsWith(".js")); // false

// * Методи "replace()" і "replaceAll()"  Повертає новий рядок, в якому перше (replace) або усі збіги (replaceAll) підрядка замінені на вказане значення.

// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

// * Метод "slice()"  Метод рядків slice (startIndex, endIndex) використовується для створення копії частини або всього рядка. Він робить копію елементів рядка від startIndex і до, але не включно endIndex і повертає новий рядок, не змінюючи оригінал.

// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"

// *** ЛОГІЧНІ ОПЕРАТОРИ
//  "6" хибних (falsy) значень, що приводяться до "false":
//     1.  "0"
//     2.  "Nan"
//     3.  "null"
//     4.  "undefined"
//     5.  "порожній рядок"
//     6.  "false"

// Абсолютно все інше приводиться до true.

// !!!Існує три логічні оператори, які використовуються для перевірки виконання множинних виразів:

// * 1. Оператор "&&"    (Логічне «І»)   "вираз && вираз"  це Бінарний оператор!!!

// У наступному прикладі обидві умови повернуть true, тому результатом всього виразу буде true - повернеться значення правого операнда.
// const age = 20;
// console.log(age > 10 && age < 30); // true && true -> true

// Якщо хоча б один із операндів буде приведений до false, результатом виразу буде його значення.
// const age = 50;
// console.log(age > 10 && age < 30); // true && false -> false
// console.log(age > 80 && age < 120); // false && true -> false

// !!!Тобто, логічне «І» зупиняється на хибному і повертає те, на чому зупинилось, або останній операнд.

// console.log(1 && 5); // true && true -> 5
// console.log(5 && 1); // true && true -> 1
// console.log(0 && 2); // false && true -> 0
// console.log(2 && 0); // true && false -> 0
// console.log("" && "Mango"); // false && true -> ""
// console.log("Mango" && ""); // true && false -> ""
// console.log("Mango" && "Poly"); // true && true -> "Poly"
// console.log("Poly" && "Mango"); // true && true -> "Mango"

// * 2. Оператор "||"    (Логічне «АБО»)   "вираз || вираз"   це Бінарний оператор!!!
// У наступному прикладі умова зліва поверне true, тому результатом всього виразу буде true - повернеться значення першого операнда, яке було приведене до true.
// const age = 5;
// console.log(age < 10 || age > 30); // true || false -> true

// В цьому випадку результатом теж буде true, оскільки хоча б один із операндів, в цьому випадку правий, був приведений до true.
// const age = 40;
// console.log(age < 10 || age > 30); // false || true -> true

// А тут жодна з умов не виконується, тому отримуємо false - значення останнього операнда.
// const age = 20;
// console.log(age < 10 || age > 30); // false || false -> false

// !!!Тобто, логічне «АБО» зупиняється на правді і повертає те, на чому зупинилося або останній операнд.
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true

// console.log(3 || false); // 3
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); // true

// * 3. Оператор "!"    (Логічне «НЕ»)   "!вираз"  це Унарний оператор!!!

// Оператор "!" приводить операнд до буля, якщо необхідно, а потім робить інверсію
//  - змінює його на протилежний true -> false або false -> true.

// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !"" -> !false -> true

// const isOnline = true;
// const isNotOnline = !isOnline; // !isOnline -> !true -> false

// TODO: ====== Example 1 - Базовые математические операторы =====

// Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = apples - grapes;
// console.log(diff);

// ====== Example 2 - Комбинированные операторы ======

// Замени выражение переопределения комбинированным оператором +=.

// let students = 100;
// students += 50;
// console.log(students);

// ====== Example 3 - Приоритет операторов ======

// Разбери приоритет операторов в инструкции присвоения значения переменной result.

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// ====== Example 4 - Класс Math ======

// Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения переменной value. Используй методы Math.floor(), Math.ceil() и Math.round(). Проверь что будет в консоли при значениях 27.3 и 27.9.

// const value = 27.5;
// console.log(Math.floor(value)); // 27
// console.log(Math.ceil(value)); // 28
// console.log(Math.round(value)); // 28

// ====== Example 5 - Шаблонные строки ======

// Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку.

// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;
// const bots = repairBots + defenceBots;
// const message = `Cyberdyne Systems has ${bots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// ==== Example 6 - Методы строк и чейнинг ====

// Напиши скрипт который рассчитывает индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк (специально для задачи). Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.

// Индекс массиы тела необходимо округлить до одной цифры после запятой;

// let weight = "88,3";
// let height = "1.75";

// const weightNum = Number(weight.replace(",", "."));
// const heightNum = Number(height);

// console.log(weightNum);
// console.log(heightNum);

// const bmi = (weightNum / Math.pow(heightNum, 2)).toFixed(1);
// console.log(bmi); // 28.8

// ==== Example 7 - Операторы сравнения и приведение типов ====

// Каким будет результат выражений?

// console.log(5 > 4); // true
// console.log(10 >= "7"); // true
// console.log("2" > "12"); // true
// console.log("2" < "12"); // false
// console.log("4" == 4); // true
// console.log("6" === 6); // false
// console.log("false" === false); // false
// console.log(1 == true); // true
// console.log(1 === true); // false
// console.log("0" == false); // true
// console.log("0" === false); // false
// console.log("Papaya" < "papaya"); // true
// console.log("Papaya" === "papaya"); // false
// console.log(undefined == null); // true
// console.log(undefined === null); // false

// ==== Example 8 - Логические операторы ====

// Каким будет результат выражений?

// console.log(true && 3); // 3
// console.log(false && 3); // false
// console.log(true && 4 && "kiwi"); // kiwi
// console.log(true && 0 && "kiwi"); // 0
// console.log(true || 3); // true
// console.log(true || 3 || 4); // true
// console.log(true || false || 7); // true
// console.log(null || 2 || undefined); // 2
// console.log((1 && null && 2) > 0); // false
// console.log(null || (2 && 3) || 4); // 3

// ==== Example 9 - Значение по умолчанию и оператор нулевого слияния ====

// Отрефактори код так, чтобы в переменную value присваивалось значение переменной incomingValue, если оно не равно undefined или null. В противном случае должно присваиваться значение defaultValue. Проверь работу скрипта для слепдующих значений переменной incomingValue: null, undefined, 0, false. Используй оператор ?? (nullish coalescing operator).

// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue || defaultValue;
// console.log(value);

// ==== Example 10 - Опертор % и методы строк ====

// Напиши скрипт который переведёт значение totalMinutes (количество минут) в строку в формате часов и минут HH:MM.

// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24:01
// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

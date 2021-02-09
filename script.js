// <!-- - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// let welcome = 'hello';
// let error = 'owu';
// let address = 'com';
// let country = 'ua';
// let number = '1';
// let price = '10';
// let deep = '-999';
// let step = '123';
// let pi = '3.14';
// let percent = '2.7';
// let time = '16';
// let red = 'true';
// let blue = 'false';


//   Вивести кожну змінну за допомогою: console.log , alert, document.write
// console.log(welcome);
// console.log(error);
// console.log(address);
// console.log(country);
// console.log(number);
// console.log(price);
// console.log(deep);
// console.log(step);
// console.log(pi);
// console.log(percent);
// console.log(time);
// console.log(red);
// console.log(blue);

// alert(welcome);
// alert(error);
// alert(address);
// alert(country);
// alert(number);
// alert(price);
// alert(deep);
// alert(step);
// alert(pi);
// alert(percent);
// alert(time);
// alert(red);
// alert(blue);

// document.write(welcome + '</br>' + error + '</br>' + address + '</br>' + country + '</br>' + number + '</br>' + price + '</br>' + deep + '</br>' + step + '</br>' + pi + '</br>' + percent + '</br>' + time + '</br>' + red + '</br>' + blue);


// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
// welcome = 'goodbye';
// error = 'company';
// address = 'domain';
// country = 'en';
// number = '2';
// price = '20';
// deep = '-666';
// step = '10000';
// pi = '14.3';
// percent = '7.2';
// time = '61';
// red = 'false';
// blue = 'true';


// Вивести кожну змінну за допомогою: console.log , alert, document.write
// console.log(welcome, error, address, country, number, price, deep, step, pi, percent, time, red, blue);

// alert(welcome);
// alert(error);
// alert(address);
// alert(country);
// alert(number);
// alert(price);
// alert(deep);
// alert(step);
// alert(pi);
// alert(percent);
// alert(time);
// alert(red);
// alert(blue);

// document.write(welcome + '</br>' + error + '</br>' + address + '</br>' + country + '</br>' + number + '</br>' + price + '</br>' + deep + '</br>' + step + '</br>' + pi + '</br>' + percent + '</br>' + time + '</br>' + red + '</br>' + blue);


// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// let userName = prompt('Введіть ім"я');
// let userSurname = prompt('По-батькові');
// let age = prompt('Ваш вік');

// document.write(`Вітаю ${userName} ${userSurname}. Тобі ${age} років`);


// - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).
// let person = `${userName} ${userSurname} ${age}`;


// - За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.
// let number1 = +prompt('Введіть номер 1');
// let number2 = +prompt('Введіть номер 2');
// let number3 = +prompt('Введіть номер 3');
// console.log(number1, number2, number3);


// - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.
// let number1 = parseInt(prompt('number1'));
// let number2 = parseInt(prompt('number2'));
// let number3 = parseInt(prompt('number3'));
// let number4 = parseInt(prompt('number4'));
// console.log(number1 + number2 + number3 + number4);


// - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat. 
// Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.
// let number1 = parseFloat(prompt('number1'));
// let number2 = parseFloat(prompt('number2'));
// let number3 = parseFloat(prompt('number3'));
// let result = number1 + number2 + number3;
// console.log(result);


// - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.
// let float1 = prompt('enter float');
// let number1 = parseFloat(float1);
// let round1 = Math.round(number1);

// let float2 = prompt('enter float');
// let number2 = parseFloat(float2);
// let round2 = Math.round(number2);

// let float3 = prompt('enter float');
// let number3 = parseFloat(float3);
// let round3 = Math.round(number3);
// console.log(round1 + round2 + round3);


// - За допомогою prompt() отримати 2 цілих числа.
// Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
// За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//   Example. Число 1 = 5. Число 2 = 2. Результат = 25 
// let number = prompt('number');
// let pow = prompt('pow');
// let result = Math.pow(number, pow);
// console.log(result);


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
// let a = 100;
// let b = '100';
// let c = true;
// console.log(typeof a, b, c);


// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//   В однакових виразаї не використовувати однакові оператори!!!
// console.log(5 < 6);
// console.log(5 > 6);
// console.log(5 == 6);
// console.log(5 === 6);
// console.log(10 == 10);
// console.log(10 === 10);
// console.log(10 != 10);
// console.log(10 !== 10);
// console.log(10 < 10);
// console.log(123 === '123');
// console.log(123 == '123');


// Додатково:
// - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
//   console.log(132 > 100 && 45 < 12 ); -
//   console.log(34 > 33 && 23 < 90 ); +
//   console.log(99 > 100 && 45 > 12 ); -
//   console.log(132 > 100 || 45 < 12 ); +
//   console.log(111 > 11 || 45 < 111 ); +
//   console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); +
//   console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); +
//   console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); -
//   console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); +
//   console.log(!!'-1'); +
//   console.log(!!-1); +
//   console.log(!!'0'); +
//   console.log(!!'null'); +
//   console.log(!!'undefined'); +
//   console.log(!!(3/'owu')); -
//   console.log((111 > 11 || 45 < 111) ||  !!'0'); +
//   console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); -
















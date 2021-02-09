// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let num = [10, 20, 30, 40, 50];
// console.log(num);

// let str = ['Ira', 'Katya', 'Vasya', 'Petya', 'Marysya'];
// console.log(str);

// let main = ['mars', 'venera', 999, -69, true];
// console.log(main);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let empty = [];
// empty[0] = 100;
// empty[1] = 999999;
// empty[2] = 'layout';
// console.log(empty);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
// document.write('<div>Lorem</div>');
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
// document.write('<div>Lorem '+ i +' </div>');
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while(i < 20) {
// document.write('<h1>Lorem</h1>');
// i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while(i < 20) {
// 	document.write('<h1>Lorem '+ i +'</h1>');
// 	i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let num = [10, 100, 1000, 10000, 100000, 20, 200, 2000, 20000, 200000];
// for (let i = 0; i < num.length; i++) {
// 	console.log(num[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let string = ['superman', 'batman', 'terminator', 'rembo', 'bond007', 'robocop', 'tor', 'neo', 'vorobej', 'vick'];
// for (let i = 0; i < string.length; i++) {
// 	console.log(string[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let box = ['girl', 'boy', true, false, -999];
// for (let i = 0; i < box.length; i++) {
// 	console.log(box[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let carton = [7, 1, 13, 'Marina', 'Nastya', 'Kolya', true, true, false];
// for (let i = 0; i < carton.length; i++) {
// 	if(typeof carton[i] === 'boolean') {
// 		console.log(carton[i]);
// 	}
// 	else {
// 	}
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let array = [7, 1, 13, 69, 'Marina', 'Nastya', 'Kolya', true, true, false];
// for (let i = 0; i < array.length; i++) {
// 	if (typeof array[i] === 'number') {
// 		console.log(array[i]);
// 	}
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let array = [7, 1, 13, 69, 'Marina', 'Nastya', 'Kolya', true, true, false];
// for (let i = 0; i < array.length; i++) {
// 	if (typeof array[i] === 'string') {
// 		console.log(array[i]);
// 	}
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let empty = [];
// empty[0] = 'yes';
// empty[1] = 'no';
// empty[2] = 'age';
// empty[3] = 666;
// empty[4] = 777;
// empty[5] = -999;
// empty[6] = true;
// empty[7] = false;
// empty[8] = 0;
// empty[9] = -1;
// for (let i = 0; i < empty.length; ++i) {
// 	console.log(empty[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
// 	console.log('step : ',i);
// 	document.write('step : ',i);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
// 	console.log(`step : ${i}`);
// 	document.write(`step : ${i} </br>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 200; i = i +2) {
// 	console.log(`step : ${i}`);
// 	document.write(`step : ${i} </br>`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i = i+=2) { 
// 	console.log(`step : ${i}`);
// 	document.write(`step : ${i} </br>`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 1; i < 100; i = i+=2) { 
// 	console.log(`step : ${i}`);
// 	document.write(`step : ${i} </br>`);
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// for (let m = 0; m <= 1; m++) {
// 	for (let s = 0; s < 60; s++) {
// 		document.write(`Хвилини: ${m} Секунди: ${s} <br>`)
// 		if (m === 1 && s === 59) break 
// 	}
// }

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// for (let h = 0; h <= 2; h++) {
// 	for (let m = 0; m < 60; m++) {
// 		if (h === 2 && m === 21) break
// 		for (let s = 0; s < 60; s++) {
// 			document.write(`Години: ${h} Хвилини: ${m} Секунди: ${s} <br>`)
// 			if (m === 20 && s === 0) break
// 		}
// 	}
// }
















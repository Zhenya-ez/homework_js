// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let array = ['a', 'b', 'c'];
// for (let i = 1; i <= 3; i++) {
// 	array.push(i);
// }
// console.log(array);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

// let array = [1, 2, 3];
// let newArray = array.reverse();
// console.log(array);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// let array = [1, 2, 3];
// for (let i = 4; i < 7; i++) {
// 	array.push(i);
	
// }
// console.log(array);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// let array = [1, 2, 3];
// for (let i = 6; i >= 4; i--) {
// 	array.unshift(i);
	
// }
// console.log(array);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

// let array = ['js', 'css', 'jq'];
// let first = array.shift();
// console.log(first);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

// let array = ['js', 'css', 'jq'];
// let last = array.pop();
// console.log(last);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].

// let num = [1, 2, 3, 4, 5];
// console.log(num.slice(3));

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].

// let num = [1, 2, 3, 4, 5];
// console.log(num.slice(0, 2));

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].

// let num = [1, 2, 3, 4, 5];
// console.log(num.splice(1, 2));
// console.log(num);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let num = [1, 2, 3, 4, 5];
// num.splice(3, 0, 'a', 'b', 'c');
// console.log(num);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let num = [1, 2, 3, 4, 5];
// num.splice(1, 0, 'a', 'b');
// num.splice(6, 0, 'c');
// num.splice(9, 0, 'e');
// console.log(num);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < 10; i++) {
// 	if (num[i]%2 === 0) {
// 		console.log(num[i]);
// 	}
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let empty = [];
// for (let i = 0; i < num.length; i++) {
// 	empty.push(num[i]);
// }
// console.log(empty);

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let empty = [];
// for (let i = 0; i < num.length; i++) {
// 	empty[i] = num[i];
// }
// console.log(empty);

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while

// let num = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < num.length ) {
// 	console.log(num[i]);
// 	i++
// }

// 2. перебрати його циклом for

// let num = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < num.length; i++) {
// 	console.log(num[i]);
	
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let num = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < num.length) {
// 	if (num[i] % 2 !== 0) {
// 		console.log(num[i]);
// 	}
// 	i++
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// let num = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < num.length; i++) {
// 	if (num[i] % 2 !== 0) {
// 		console.log(num[i]);
// 	}
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let num = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < num.length) {
// 	if (num[i] % 2 === 0) {
// 		console.log(num[i]);
// 	}
// 	++i;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// let num = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < num.length; i++) {
// 	if (num[i] % 2 === 0) {
// 		console.log(num[i]);
// 	}
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// let num = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < num.length; i++) {
// 	if (num[i] % 3 === 0) {
// 		(num[i] = 'okten');
		
// 	}
// }
// console.log(num);

// 8. вивести масив в зворотньому порядку.

// let num = [2,17,13,6,22,31,45,66,100,-18];
// let num2 = num.reverse();
// console.log(num2);

//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.

// let num = [];
// for (let i = 0; i < 50; i++) {
// 	num[i] = i*2;
// }
// console.log(num);

// - заповнити його 50 непарними числами за допомоги циклу.

// let num = [];
// for (let i = 0; i < 50; i++) {
// 	num[i] = i*2+1;
// }
// console.log(num);

// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)

// let num = [];
// for (let i = 0; i < 10; i++) {
// 	num[i] = Math.floor((Math.random()*95443-823)+8123)
	
// }
// console.log(num);

// let num = [];
// for (let i = 0; i < 10; i++) {
// 	num[i] = Math.floor((Math.random()*732-8)+8)
	
// }
// console.log(num);

//  2. вывести на консоль  каждый третий елемент

// let num = [];
// for (let i = 0; i < 10; i++) {
// 	num[i] = Math.floor((Math.random()*732-8)+8)
	
// }
// console.log(num);
// for (let i = 2; i < 10; i+=3) {
// 	console.log(num[i]);
// }

//  3. вывести на консоль  каждый третий елемент
//  но при условии что его значение является парным.

// let num = [];
// for (let i = 0; i < 10; i++) {
// 	num[i] = Math.floor((Math.random()*732-8)+8)
	
// }
// console.log(num);

// for (let i = 2; i < 10; i+=3) {
// 	if(num[i]%2 === 0) {
// 	console.log(num[i]);
// 	}
// }

//  4. вывести на консоль  каждый третий елемент
//  но при условии что он имеет парное значение и
//  записать их в другой массив.

// let num = [];
// for (let i = 0; i < 10; i++) {
// 	num[i] = Math.floor((Math.random()*732-8)+8);
	
// }
// console.log(num);

// let newNum = [];
// for (let i = 2; i < 10; i+=3) {
// 	if(num[i]%2 === 0) {
// 	newNum.push(num[i]);
// 	}
// }
// console.log(newNum);

//  5. Вывести каждый елемент массива у которого соседний с права элемент - парный

// let num = [];
// for (let i = 0; i < 10; i++) {
// 	num[i] = Math.floor((Math.random()*732-8)+8);
	
// }
// console.log(num);

// for (let i = 0; i < num.length; i++) {
// 	if(num[i+1]%2 === 0) {
// 		console.log(num[i]);
// 	}
// }

//   5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.

// let prices = [100, 250, 50, 168, 120, 345, 188];
// let result = (100 + 250 + 50 + 168 + 120 + 345 + 188)/prices.length;
// console.log(result);

// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let randomNumbers = [];
// for (let i = 0; i < 10; i++) {
// 	randomNumbers[i] = Math.floor(Math.random()*100*5) 
	
// }	
// console.log(randomNumbers);

// let randomNumbers2 = [];
// for (let i = 0; i < randomNumbers.length; i++) {
// 	randomNumbers2.push(randomNumbers[i]*5);
	
// }
// console.log(randomNumbers2);

// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
//  додати його в інший масив.

// let array = ['Vasya', 'Petya', 'Marysya', 10, 13, 999];
// let newArray = [];
// for (let i = 0; i < array.length; i++) {
// 	if(typeof array[i] === 'number') {
// 		newArray.push(array[i]);
// 	}
// }
// console.log(newArray);

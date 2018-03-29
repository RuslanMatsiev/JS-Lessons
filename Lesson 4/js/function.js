/*let options = {
	name: "test",
	width: 1024,
	height: 1024
}

options.bool = false;

options.colors = {
	border: "black",
	background: "red"
}
delete options.bool

for (let key in options) {
	console.log('Свойство ' + key + ' имеет значение '  +
		options[key])
}

console.log(Object.keys(options).length) */



/*arr.pop(); // метод удаляет последний элемент массива и возвращает этот элемент если написать console.log(arr.pop())
arr.push(6); //добавляет в конец массива последний элемент */
/*
arr.shift(); // удаляет первый элемент массива
arr.unshift(6); // добавляет элемент в начало массива  */

/*first[99] = 99;
console.log(first.length); //для массивов возвращает последний индекс массива +1

for (let i = 0; i < first.length; i++) {
	console.log(first[i]);
}
console.log(first);

first.forEach(function(item, i, first) {
	console.log(i + "; " + item + "(массив: " + first + ")")
})*/

/* Запись данных, введенных пльзователем через запятую 
let first =[];
let i = prompt ('', '');
first = i.split(',');

console.log(first); */


/* Превращение массива в строку
let first =["ып", " цук", " йцк", " кар"];
let i = first.join(',');

console.log(i); */

/*Сортировка массива только для букв
let first =["ып", " цук", " йцк", " кар"];
let i = first.sort();

console.log(i); */

/*Сортировка чисел в массиве
let first =[1, 43, 4, 12];
function sortNumbers(a,b) {
	return a - b
}
let i = first.sort(sortNumbers);

console.log(i); */

//
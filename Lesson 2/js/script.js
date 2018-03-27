var budget = prompt('Ваш бюджет на месяц?');
var nameShop = prompt('Название Вашего магазина?');
var time = 19;

mainList = {
	listBudget: budget,
	listNameShop: nameShop,
	shopGoods: [],
	employers: {
		name: 'Alex',
		age: 24,
		isMaried: true,
	},
	open: true
}

for (i = 0; i < 3; i++){
	let a = prompt('Какой тип товаров будем продавать?');
	if (typeof(a) === 'string' && typeof(a) !== null && a != '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	} else {
		alert('Введите корректные данные!');
		i--;
	}
}


/*	---------- Начало первого способа ----------

let i = 0;
while (i < 3) {
	let a = prompt('Какой тип товаров будем продавать?');
	if (typeof(a) === 'string' && typeof(a) !== null && a != '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
		i++;
	} else {
		alert('Введите корректные данные!');
	}
	
}
	
	---------- Конец первого способа ---------- */ 


/*	---------- Начало второго способа ----------

let i = 0;
do {
	let a = prompt('Какой тип товаров будем продавать?');
	if (typeof(a) === 'string' && typeof(a) !== null && a != '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
		i++;
	} else {
		alert('Введите корректные данные!');
	}
}
while (i < 3);

	---------- Конец второго способа ----------	*/ 




if (time < 0){
	console.log('Такого просто не может быть');
} else if (time > 8 && time < 20) {
	console.log('Время работать');
	} else if(time < 24) {
		console.log('Уже слишком поздно');
		} else {
			console.log('В сутках только 24 часа');
			}

console.log(mainList, 'Бюджет на день (руб): ' + budget/30);

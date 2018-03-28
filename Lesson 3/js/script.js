let budget,
	nameShop,
	time,
	price

function start() {
	budget = prompt('Ваш бюджет на месяц?');

	while (isNaN(budget) || budget == '' || budget == null) {
		budget = prompt('Ваш бюджет на месяц?');
	}

	nameShop = prompt('Название Вашего магазина?').toUpperCase();
	time = 19;
	price = 5000;	
}
start();

let mainList = {
	listBudget: budget,
	listNameShop: nameShop,
	shopGoods: [],
	employers: {},
	open: true,
	discount: true
}

function chooseGoods() {
	for (let i = 0; i < 3; i++){
		let a = prompt('Какой тип товаров будем продавать?');
		if (typeof(a) === 'string' && typeof(a) != null && a != '' && a.length < 50) {
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
		} else {
			i--;
		}
	}
}

chooseGoods();

function workTime(time) {
	if (time < 0){
		console.log('Такого просто не может быть');
	} else if (time > 8 && time < 20) {
		console.log('Время работать');
		} else if(time < 24) {
			console.log('Уже слишком поздно');
			} else {
				console.log('В сутках только 24 часа');
				}
}
workTime(18);

// Дисконтная система
function discSystem() {
	if (mainList.discount) {
	price = price * 0.8;
	console.log('Цена со скидкой ' + price);	
	} else {
		console.log('Цена без скидки ' + price);
		}
}
discSystem();

// Расчет дневного бюджета
function calcBudget() {
	let day = 30;
	alert('Бюджет на день (руб): ' + budget/day);
}
calcBudget();

//Найм сотрудников
function startEmploy() {
	for (let j = 1; j <= 4; j++) {
		let name = prompt('Ваше имя?');
		if (typeof(name) === 'string' && typeof(name) != null && name != '' && name.length < 100) {
			console.log('Имена добавлены!');
			mainList.employers[j] = name;
		} else {
			alert('Введите имя сотрудника')
			j--;
		}
	}
}
startEmploy();

console.log(mainList);


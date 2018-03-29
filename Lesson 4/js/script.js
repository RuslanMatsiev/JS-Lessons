let budget,
	nameShop,
	time,
	price;

let mainList = {
	listBudget: budget,
	listNameShop: nameShop,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems:[],
	start: function start() {
			budget = prompt('Ваш бюджет на месяц?');
			while (isNaN(budget) || budget === "" || budget === null) {
				budget = prompt('Ваш бюджет на месяц?');
			}
			nameShop = prompt('Название Вашего магазина?').toUpperCase();
			time = 19;
			price = 5000;	
	},
	chooseGoods: function chooseGoods() {
	for (let i = 0; i < 3; i++){
	let a = prompt('Какой тип товаров будем продавать?');
			if (typeof(a) === 'string' && typeof(a) != null && a != '' && a.length < 50) {
				console.log('Все верно!');
				mainList.shopGoods[i] = a;
			} else {
				i--;
			}
		}
	},
	workTime: function workTime(time) {
			if (time < 0){
				console.log('Такого просто не может быть');
			} else if (time > 8 && time < 20) {
				console.log('Время работать');
				mainList.open = true;
				} else if(time < 24) {
					console.log('Уже слишком поздно');
					} else {
						console.log('В сутках только 24 часа');
						}
	},
	// Дисконтная система
	discSystem: function discSystem() {
			if (mainList.discount) {
			price = price * 0.8;
			console.log('Цена со скидкой ' + price);	
			} else {
				console.log('Цена без скидки ' + price);
				}
	},
	// Расчет дневного бюджета
	calcBudget: function calcBudget() {
			let day = 30;
			alert('Бюджет на день (руб): ' + budget/day);
	},
	//Найм сотрудников
	startEmploy: function startEmploy() {
	for (let j = 1; j <= 4; j++) {
		let name = prompt('Ваше имя?');
			if (typeof(name) === 'string' && typeof(name) != null && name != '' && name.length < 100) {
				console.log('Имена добавлены!');
				mainList.employers[j] = name;
			} else {
				alert('Введите имя сотрудника');
				j--;
			}
		}

	},
	// Проверка + перечисление + что включает магазин
	chooseShopItems: function chooseShopItems() {
			let items = prompt('Перечислите через запятую Ваши товары', '');
			
				while (!isNaN(items) || items === null || items === '') {
					alert('Введите названия товаров');
					items = prompt('Перечислите через запятую Ваши товары', '');
				}
				mainList.chooseShopItems = items.split(',');
				mainList.chooseShopItems.push(prompt('Подождите, еще ', ''));
				mainList.chooseShopItems.sort();

				mainList.chooseShopItems.forEach(function(items, n) {
				alert('У нас Вы можете купить: ' + (n+1) + ' - ' + items);
				});
	},		
	shopTabs: function shopTabs() {
	console.log ('В нашем магазине есть');
	for (let key in mainList) {
		console.log(key);
	}
	}

};

console.log(mainList);


var budget = prompt('Ваш бюджет на месяц?');
var nameShop = prompt('Название Вашего магазина?');

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

for (j = 0; j < 3; j++) {
	mainList.shopGoods[j] = prompt('Какой тип товаров будем продавать?');
}

console.log(mainList, 'Бюджет на день (руб): ' + budget/30);

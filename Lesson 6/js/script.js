let open = document.getElementById('open-btn'),
	name_value = document.getElementsByClassName('name-value')[0],
	budget_value = document.getElementsByClassName('budget-value')[0],
	goods_value = document.getElementsByClassName('goods-value')[0],
	items_value = document.getElementsByClassName('items-value')[0],
	employers_value = document.getElementsByClassName('employers-value')[0],
	discount_value = document.getElementsByClassName('discount-value')[0],
	isopen_value = document.getElementsByClassName('isopen-value')[0],	

	goods_item = document.getElementsByClassName('goods-item'),
	goods_btn = document.getElementsByTagName('button')[1],
	budget_btn = document.getElementsByTagName('button')[2],
	employers_btn = document.getElementsByTagName('button')[3],
	choose_item = document.querySelector('.choose-item'),
	time_value = document.querySelector('.time-value'),
	count_budget_value = document.querySelector('.count-budget-value'),
	hire_employers_item = document.querySelectorAll('.hire-employers-item');


let budget,
	price;

open.addEventListener('click', () => {
	budget = prompt('Ваш бюджет на месяц?');
	while (isNaN(budget) || budget === "" || budget === null) {
		budget = prompt('Ваш бюджет на месяц?');
	}
	budget_value.textContent = budget;
	name_value.textContent = prompt('Название Вашего магазина?').toUpperCase();

});

goods_btn.addEventListener('click', () => {
	for (let i = 0; i < goods_item.length; i++) {
		let a = goods_item[i].value;
			if (typeof(a) === 'string' && typeof(a) != null && a.length < 50) {
				console.log('Все верно!');
				mainList.shopGoods[i] = a;
				goods_value.textContent = mainList.shopGoods;
			} else {
				i--;
			}
		}
});

choose_item.addEventListener('change', () => {
	let items = choose_item.value;
	if (isNaN(items) && items !== '') {
		mainList.shopItems = items.split(',').sort();
		items_value.textContent = mainList.shopItems;
	}
});

time_value.addEventListener('change', () => {
	let time = time_value.value;
	if (time < 0){
		console.log('Такого просто не может быть');
		mainList.open = false;
	} else if (time > 8 && time < 20) {
		console.log('Время работать');
		mainList.open = true;
		} else if(time < 24) {
			console.log('Уже слишком поздно');
			mainList.open = false;
			} else {
				console.log('В сутках только 24 часа');
				mainList.open = false;
				};
	if (mainList.open == true) {
		isopen_value.style.backgroundColor = 'green';
	} else {
		isopen_value.style.backgroundColor = 'red';
		}
});


budget_btn.addEventListener('click', () => {
	count_budget_value.value = budget / 30;
});

employers_btn.addEventListener('click', ()  => {
	for (let j = 0; j < hire_employers_item.length; j++) {
		let name = hire_employers_item[j].value;
		mainList.employers[j] = name;
		employers_value.textContent += mainList.employers[j] + ', ';
	}
});

const mainList = {
	listBudget: budget,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems:[],

	// Дисконтная система
	discSystem: function discSystem() {
			if (mainList.discount) {
			price = price * 0.8;
			console.log('Цена со скидкой ' + price);	
			} else {
				console.log('Цена без скидки ' + price);
				}
	},

	shopTabs:  function shopTabs() {
	console.log ('В нашем магазине есть');
	for (let key in mainList) {
		console.log(key);
	}
	}
};

console.log(mainList);
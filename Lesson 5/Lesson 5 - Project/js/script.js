let open_btn = document.getElementById('open-btn'),
	name = document.getElementsByClassName('name')[0],
	name_value = document.getElementsByClassName('name-value')[0],
	budget = document.getElementsByClassName('budget')[0],
	budget_value = document.getElementsByClassName('budget-value')[0],
	goods = document.getElementsByClassName('goods')[0],
	goods_value = document.getElementsByClassName('goods-value')[0],
	items = document.getElementsByClassName('items')[0],
	items_value = document.getElementsByClassName('items-value')[0],
	employers = document.getElementsByClassName('employers')[0],
	employers_value = document.getElementsByClassName('employers-value')[0],
	discount = document.getElementsByClassName('discount')[0],
	discount_value = document.getElementsByClassName('discount-value')[0],
	isopen = document.getElementsByClassName('isopen')[0],
	isopen_value = document.getElementsByClassName('isopen-value')[0],	
	goods_item = document.getElementsByClassName('goods-item'),
	btn = document.getElementsByTagName('button'),
	items_input = document.querySelector('input[id="items"]'),
	time_input = document.querySelector('input[id="time"]'),
	budget_input = document.querySelector('input[id="budget"]'),
	employers_item = document.querySelectorAll('input[type="text"]');

	console.log(open_btn);
	console.log(name);
	console.log(name_value);
	console.log(budget);
	console.log(budget_value);
	console.log(goods);
	console.log(goods_value);
	console.log(items);
	console.log(items_value);
	console.log(employers);
	console.log(employers_value);
	console.log(discount);
	console.log(discount_value);
	console.log(isopen);
	console.log(isopen_value);
	for (let i = 0; i < goods_item.length;  i++) {
		console.log(goods_item[i]);	
	}
	for (let j = 0; j < btn.length;  j++) {
		console.log(btn[j]);
	}	
	console.log(items_input);
	console.log(time_input);
	console.log(budget_input);
	for (let j = 0; j < employers_item.length;  j++) {
		console.log(employers_item[j]);
	}	

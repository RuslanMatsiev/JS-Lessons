let menu = document.querySelector('.menu'),		
	menu_item = document.querySelectorAll('.menu-item'),
	new_li = document.createElement('li'),
	title = document.getElementById('title'),
	column = document.getElementsByClassName('column')[1],
	adv = document.querySelector('.adv'),
	answer = prompt('Как Вы относитесь к технике Apple?'),
	prompt_apple = document.getElementById('prompt');

menu.insertBefore(menu_item[2], menu_item[1]);
menu.insertBefore(new_li, menu_item[4]);	
new_li.className = 'menu-item';
new_li.textContent = 'Пятый пункт';
document.body.style.background = 'url(img/apple_true.jpg)no-repeat center center';
title.textContent = 'Мы продаем только подлинную технику Apple';
column.removeChild(adv);
prompt_apple.textContent = answer;
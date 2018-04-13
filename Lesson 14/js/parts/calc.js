	function calc() {
	let persons = document.getElementsByClassName('counter-block-input')[0],
		restDays = document.getElementsByClassName('counter-block-input')[1],
		// Вводим новую переменную для поиска двух инпутов по тегу
		persrest = document.getElementsByTagName('input'),
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0;


	totalValue.innerHTML = 0;

	// Обращаемся только к двум первым инпутам через цикл
	// Плюс такого обращения - более короткий код,
	// минус - счетчик задан строго, и в случае добавления нового инпута 
	// придется менять крайнее значение счетчика
	for (let j = 0; j <= 1; j++) {

		// В функции запрещаем использование значений меньше 1 и дробных значений
		// посредством поиска: знака минуса, точки, зяпятой и нуля. 
		// Все эти символы и ноль в каждом из инпутов будут заменены на пустоту
		// во время их введения в каждое/любое из полей
		persrest[j].addEventListener('input', function() {

		// Обращаемся к заданным в функции инпутам, и применяем 
		// регулярные выражения, для спец. симаолов применяем экранирование	
		this.value = this.value.replace(/-|0|\.|\,/, '');

			// Производим проверку после того, как закончили изменения данных в каждом из полей.
			// Если введен один из запрещенных символов, очищаем поле и передаем в html блок сообщение			
			persrest[j].addEventListener('change', function(){
				if (this.value == '') {
						totalValue.innerHTML = 'Введите корректные значения';
					}
			});
		});
	}

	// После успешной проверки продолжаем вычисления
	persons.addEventListener('change', function(){
			personsSum = +this.value;
			total = (daysSum + personsSum)*4000;
			if (restDays.value == '') {
				totalValue.innerHTML = 0;
			} else {
				totalValue.innerHTML = total;
			}
		});

		restDays.addEventListener('change', function(){
			daysSum = +this.value
			total = (daysSum + personsSum)*4000;
			if (persons.value == '') {
				totalValue.innerHTML = 0;
			} else {
				totalValue.innerHTML = total;
			}
		});

		place.addEventListener('change', function(){
			if (restDays.value == '' || persons.value == '') {
				totalValue.innerHTML = 0;
			} else {
				let a = total;
				totalValue.innerHTML = a * this.options[this.selectedIndex].value;;
			}
		});
}

module.exports = calc;
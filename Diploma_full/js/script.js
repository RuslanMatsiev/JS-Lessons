window.addEventListener('DOMContentLoaded', function() {

// Прячем модальное окно, подложку, и показываем главную страницу -------------------------------------------
let overlay = document.getElementsByClassName('overlay')[0],
	main = document.getElementsByClassName('main')[0],
	custom = document.getElementsByClassName('custom')[0],
	closeModal = document.getElementById('popup-btn');

	closeModal.addEventListener('click', function() {					
		overlay.style.display = 'none';	
		main.style.display = 'none';
		custom.style.display = 'flex';
		for (let i = 0; i < custom.children.length; i++) {
			custom.children[i].style.display = 'block';
		}
	});


// Кастомизируем персонажа  ---------------------------------------------------------------------------------
let mainCardsItem = document.getElementsByClassName('main-cards-item'),
	newCardsItem = mainCardsItem[1].cloneNode(true),
	male = document.getElementById('male'),
	female = document.getElementById('female'),
	personSkin = document.getElementById('person-skin'),
	personClothes = document.getElementById('person-clothes'),
	personHair = document.getElementById('person-hair'),
	hair = document.querySelector('.hair'),
	hairStyle = document.querySelectorAll('.hair-style'),
	clothes = document.querySelector('.clothes'),
	clothesStyle = document.querySelectorAll('.clothes-style'),
	skin = document.querySelector('.skin'),
	skinColor = document.querySelectorAll('.skin-color'),
	personShoes = document.getElementsByClassName('person-shoes')[0],
	name = document.getElementById('name'),

	prev = document.querySelectorAll('.prev')[1],
	next = document.querySelectorAll('.next')[1],
	prev_1 = document.querySelectorAll('.prev')[2],
	next_1 = document.querySelectorAll('.next')[2],
	prev_2 = document.querySelectorAll('.prev')[0],
	next_2 = document.querySelectorAll('.next')[0];

	function lock() {
		// Отлючаем выбор пола по умолчанию и ставим "Заглушку" с блокировкой функций слайдеров
		// и первого текстового поля, так как первое текстовое поле разблокирует все остальные (код ниже), 
		// и стартовая картинка после нажатия на кнопку "Готово" отправится на карточку кандидата
		personSkin.style.cssText = 'background-image: url(img/skin/menwomen.png); width: 300px;';
		personClothes.style.backgroundImage = 'none';
		personHair.style.backgroundImage = 'none';
		personShoes.style.backgroundImage = 'none';
		prev.style.cssText = 'pointer-events: none; opacity: 0.3;';
		next.style.cssText = 'pointer-events: none; opacity: 0.3;';
		prev_1.style.cssText = 'pointer-events: none; opacity: 0.3;';
		next_1.style.cssText = 'pointer-events: none; opacity: 0.3;';
		prev_2.style.cssText = 'pointer-events: none; opacity: 0.3;';
		next_2.style.cssText = 'pointer-events: none; opacity: 0.3;';
		name.style.cssText = 'pointer-events: none; opacity: 0.3;';

		// Ставим картинки-заглушки на слайдеры
		hairStyle[0].style.cssText = 'background-image: url(img/sliderLock/default-slider.png); background-size: auto;';
		clothesStyle[0].style.cssText = 'background-image: url(img/sliderLock/default-slider.png); background-size: auto;';
		skinColor[0].style.cssText = 'background-image: url(img/sliderLock/default-slider.png); background-size: auto; background-position: center;'; 
	}
	lock()

	// Переключаемся на персонажа женского пола и показываем настройки для нее
	female.addEventListener('change', () => {
	    if (this.checked = true) {
	      	personSkin.style.cssText = 'background-image: url(img/skin/skin-4.png); width:;';
	      	personClothes.style.backgroundImage = 'url(img/clothes/construct/clothes-4.png)';
	      	personHair.style.backgroundImage = 'url(img/hair/construct/hair-4.png)';
	     	personShoes.style.backgroundImage = 'url(img/clothes/construct/shoes.png)';
			prev.style.cssText = 'pointer-events:; opacity:;';
			next.style.cssText = 'pointer-events:; opacity:;';	      	
			prev_1.style.cssText = 'pointer-events:; opacity:;';
			next_1.style.cssText = 'pointer-events:; opacity:;';	
			prev_2.style.cssText = 'pointer-events:; opacity:;';
			next_2.style.cssText = 'pointer-events:; opacity:;';	
			name.style.cssText = 'pointer-events:; opacity:;';     	
			skinColor[0].style.cssText = 'background-image:; background-size:;';	

	      	for (let i = 0; i < 3; i++ ){
	      		hairStyle[i].style.display = 'none';
	      		clothesStyle[i].style.display = 'none';
		      	
		      	for (let j = 3; j < 6; j++ ){
		      		hair.insertBefore(hairStyle[j], hairStyle[i-2]);
		      		clothes.insertBefore(clothesStyle[j], clothesStyle[i-2]);
		      		hairStyle[3].style.display = 'block';
		      		clothesStyle[3].style.display = 'block';	
		      	}
	      	}

			// Слайдер смены прически для женского пола
			let slideIndex = 4;
				
			showSlides(slideIndex);

			function showSlides(n) {
				if (n > hairStyle.length) {
					slideIndex = 4;
				}
				if (n < 4) {
					slideIndex = hairStyle.length;
				}
				for (let i = 0; i < hairStyle.length; i++) {
					hairStyle[i].style.display = 'none';
				}
				hairStyle[slideIndex - 1].style.display = 'block';
			}

			function plusSlides(n) {
				showSlides(slideIndex += n);                 
			}

			function currentSlide(n) {
				showSlides(slideIndex = n);
			}
			
			prev.addEventListener('click', () => {
				plusSlides(-1);	
				personHair.style.backgroundImage = `url(img/hair/construct/hair-${slideIndex}.png)`;
			});

			next.addEventListener('click', () => {
				plusSlides(1);
				personHair.style.backgroundImage = `url(img/hair/construct/hair-${slideIndex}.png)`;
			});
			
			// Слайдер смены одежды для женского пола
			let slideIndex_1 = 4;
				
			showSlides_1(slideIndex_1);

			function showSlides_1(m) {
				if (m > clothesStyle.length) {
					slideIndex_1 = 4;
				}
				if (m < 4) {
					slideIndex_1 = clothesStyle.length;
				}
				for (let j = 0; j < clothesStyle.length; j++) {
					clothesStyle[j].style.display = 'none';
				}
				clothesStyle[slideIndex_1 - 1].style.display = 'block';
			}

			function plusSlides_1(m) {
				showSlides_1(slideIndex_1 += m);                 
			}

			function currentSlide_1(m) {
				showSlides_1(slideIndex_1 = m);
			}
			
			prev_1.addEventListener('click', () => {
				plusSlides_1(-1);	
				personClothes.style.backgroundImage = `url(img/clothes/construct/clothes-${slideIndex_1}.png)`;
			});

			next_1.addEventListener('click', () => {
				plusSlides_1(1);
				personClothes.style.backgroundImage = `url(img/clothes/construct/clothes-${slideIndex_1}.png)`;
			});			

			// Слайдер смены цвета кожи для женского пола
			let slideIndex_2 = 1;
				
			showSlides_2(slideIndex_2);

			function showSlides_2(s) {
				if (s > skinColor.length) {
					slideIndex_2 = 1;
				}
				if (s < 1) {
					slideIndex_2 = skinColor.length;
				}
				for (let k = 0; k < skinColor.length; k++) {
					skinColor[k].style.display = 'none';
				}
				skinColor[slideIndex_2 - 1].style.display = 'block';
			}

			function plusSlides_2(s) {
				showSlides_2(slideIndex_2 += s);                 
			}

			function currentSlide_2(s) {
				showSlides_2(slideIndex_2 = s);
			}
			
			prev_2.addEventListener('click', () => {
				plusSlides_2(-1);	
				personSkin.style.backgroundImage = `url(img/skin/skin-${slideIndex_2+3}.png)`;
			});

			next_2.addEventListener('click', () => {
				plusSlides_2(1);
				personSkin.style.backgroundImage = `url(img/skin/skin-${slideIndex_2+3}.png)`;
			});			
		}
	});

	// Переключемся на персонажа мусжкого пола и показываем настройки для него
	male.addEventListener('change', () => {
    	if (this.checked = true) {
	      	personSkin.style.cssText = 'background-image: url(img/skin/skin-1.png); width:;';
	      	personClothes.style.backgroundImage = 'url(img/clothes/construct/clothes-1.png)';
	      	personHair.style.backgroundImage = 'url(img/hair/construct/hair-1.png)';
	 		personShoes.style.backgroundImage = 'url(img/clothes/construct/shoes.png)';
			prev.style.cssText = 'pointer-events:; opacity:;';
			next.style.cssText = 'pointer-events:; opacity:;';	      	
			prev_1.style.cssText = 'pointer-events:; opacity:;';
			next_1.style.cssText = 'pointer-events:; opacity:;';	
			prev_2.style.cssText = 'pointer-events:; opacity:;';
			next_2.style.cssText = 'pointer-events:; opacity:;';	
			name.style.cssText = 'pointer-events:; opacity:;';
			hairStyle[0].style.cssText = 'background-image: url(img/hair/slide/hair-1.png); background-size:;';
			clothesStyle[0].style.cssText = 'background-image: url(img/clothes/slide/clothes-1.png); background-size:;';
			skinColor[0].style.cssText = 'background-image:; background-size:;';	

	      	for (let i = 0; i < 3 ; i++ ){
	      		hairStyle[0].style.display = 'block';
		      	clothesStyle[0].style.display = 'block';
	      		hairStyle[i].style.display = '';
	      		clothesStyle[i].style.display = '';
		      	
		      	for (let j = 3; j < 6; j++ ){
		      		hair.insertBefore(hairStyle[i], hairStyle[j-2]);
		      		clothes.insertBefore(clothesStyle[i], clothesStyle[j-2]);
		      		hairStyle[j].style.display = 'none';
		      		clothesStyle[j].style.display = 'none';
		      	}
	      	}
			
			// Вызываем функцию слайдеров для кастомизации персонажа мужского пола
			maleSlider();	      	
		} 
	});
	
 	// Функция слайдеров для кастомизации персонажа мужского пола, которая вызывается, 
 	// в случае, когда страница загружена, и когд выбран мужской пол персонажа
 	function maleSlider() {

 		// Слайдер смены прически для мусжкого пола
		let slideIndex = 1;

		showSlides(slideIndex);

		function showSlides(n) {
			if (n > hairStyle.length-3) {
				slideIndex = 1;
			}
			if (n < 1) {
				slideIndex = hairStyle.length-3;
			}
			for (let i = 0; i < hairStyle.length; i++) {
				hairStyle[i].style.display = 'none';
			}
			hairStyle[slideIndex - 1].style.display = 'block';
		}

		function plusSlides(n) {
			showSlides(slideIndex += n);                 
		}

		function currentSlide(n) {
			showSlides(slideIndex = n);
		}
			
		prev.addEventListener('click', () => {
			plusSlides(-1);	
			personHair.style.backgroundImage = `url(img/hair/construct/hair-${slideIndex}.png)`;
		});

		next.addEventListener('click', () => {
			plusSlides(1);
			personHair.style.backgroundImage = `url(img/hair/construct/hair-${slideIndex}.png)`;
		});
	
		// Слайдер смены одежды для мусжкого пола	
		let slideIndex_1 = 1;
			
		showSlides_1(slideIndex_1);

		function showSlides_1(m) {
			if (m > clothesStyle.length-3) {
				slideIndex_1 = 1;
			}
			if (m < 1) {
				slideIndex_1 = clothesStyle.length-3;
			}
			for (let j = 0; j < clothesStyle.length; j++) {
				clothesStyle[j].style.display = 'none';
			}
			clothesStyle[slideIndex_1 - 1].style.display = 'block';
		}

		function plusSlides_1(m) {
			showSlides_1(slideIndex_1 += m);                 
		}

		function currentSlide_1(m) {
			showSlides_1(slideIndex_1 = m);
		}

		prev_1.addEventListener('click', () => {
			plusSlides_1(-1);	
			personClothes.style.backgroundImage = `url(img/clothes/construct/clothes-${slideIndex_1}.png)`;
		});

		next_1.addEventListener('click', () => {
			plusSlides_1(1);
			personClothes.style.backgroundImage = `url(img/clothes/construct/clothes-${slideIndex_1}.png)`;
		});			

		// Слайдер смены цвета кожи для мужского пола
		let slideIndex_2 = 1;
				
		showSlides_2(slideIndex_2);

		function showSlides_2(s) {
			if (s > skinColor.length) {
				slideIndex_2 = 1;
			}
			if (s < 1) {
				slideIndex_2 = skinColor.length;
			}
			for (let k = 0; k < skinColor.length; k++) {
				skinColor[k].style.display = 'none';
			}
			skinColor[slideIndex_2 - 1].style.display = 'block';
		}

		function plusSlides_2(s) {
			showSlides_2(slideIndex_2 += s);                 
		}

		function currentSlide_2(s) {
			showSlides_2(slideIndex_2 = s);
		}
			
		prev_2.addEventListener('click', () => {
			plusSlides_2(-1);	
			personSkin.style.backgroundImage = `url(img/skin/skin-${slideIndex_2}.png)`;
		});

		next_2.addEventListener('click', () => {
			plusSlides_2(1);
			personSkin.style.backgroundImage = `url(img/skin/skin-${slideIndex_2}.png)`;
		});	

	}

	// Вызов функции слайдеров при загрузке страницы для кастомизации персонажа мужского пола
	maleSlider();

	// Добавляем третью карточку и скрываем
	mainCardsItem[1].parentNode.insertBefore(newCardsItem, mainCardsItem[1].nextSibling);
	newCardsItem.style.display = 'none';

	// Получаем имя кандидата
	let nameNewPerson = document.getElementsByClassName('name')[2],
		age = document.getElementById('age'),
		ageNewPerson = document.getElementsByClassName('age')[2],
		sexNewPerson = document.getElementsByClassName('sex')[2],
		politicalView = document.getElementById('select'),
		politicalViewPerson = document.getElementsByClassName('views')[2],
		bio = document.getElementById('bio'),
		bioNewPerson = document.getElementsByClassName('bio')[2],
		readyBtn = document.getElementById('ready');

		// Отключаем реагирование на мышь и делаем полупрозрачными поля и кнопку
		readyBtn.style.cssText = 'pointer-events: none; opacity: 0.5;';
		age.style.cssText = 'pointer-events: none; opacity: 0.5;';
		bio.style.cssText = 'pointer-events: none; opacity: 0.5;';

		// Проверяем поле "Имя" на правильность заполнения
		name.addEventListener('input', () => {
			if (!name.value.match(/\d/) && name.value != null && name.value != '' && name.value.length > 1 ) {
				name.style.border = '1px solid #1f8ce2';
				// Если заполнили поле верно, "активируем" следующее поле
				age.style.cssText = 'pointer-events:; opacity:;';
			} else {
				name.style.border = '1px solid #e74c3c';
				readyBtn.style.cssText = 'pointer-events: none; opacity: 0.5;';
			}
		});

		// Првоеряем поле "Возраст" на правильность заполнения
		age.addEventListener('input', () => {
			if (!isNaN(age.value) && age.value != '' && age.value != null && age.value > 34 && age.value < 66) {
				age.style.border = '1px solid #1f8ce2';		
				// Если заполнили поле верно, "активируем" следующее поле
				bio.style.cssText = 'pointer-events:; opacity:;';
			} else {
				age.style.border = '1px solid #e74c3c';
				bio.style.cssText = 'pointer-events: none; opacity: 0.5;';
				readyBtn.style.cssText = 'pointer-events: none; opacity: 0.5;';				
			}
		});

		// Првоеряем поле "Биографию" на правильность заполнения
		bio.addEventListener('input', () => {
		if (bio.value != '' && bio.value != null && bio.value.length > 1) {
				bio.style.border = '1px solid #1f8ce2';
				// Делаем кнопку активной только после заполнения последнего текстового поля,
				// заполнение которого возможно только после заполнения двух предыдущих полей 
				readyBtn.style.cssText = 'pointer-events:; opacity:;';
			} else {
				bio.style.border = '1px solid #e74c3c';
				readyBtn.style.cssText = 'pointer-events: none; opacity: 0.5;';				
			}			
		});


	let years = 'лет',
		person = document.getElementsByClassName('person')[0],
		candidateBlock = document.getElementsByClassName('candidate-block')[2],
		result = document.getElementsByClassName('result')[2],
		oldPerson = document.getElementsByClassName('photo')[2],
		progressBar = document.getElementsByClassName('progress-bar'),
    	resultCount = document.getElementsByClassName('result-count');

		// Отправляем данные в третью карточку кандидата  ------------------------------------------------------
		readyBtn.addEventListener('click', () => {
			mainCardsItem[1].parentNode.insertBefore(newCardsItem, mainCardsItem[1].nextSibling);
			mainCardsItem[0].classList.remove('main-cards-item-active');
			newCardsItem.style.display = 'block';
			oldPerson.style.display = 'none';
			candidateBlock.insertBefore(person, result);

			mainCardsItem[1].style.display = 'block';
			main.style.display = 'block';
			custom.style.display = 'none';
			nameNewPerson.textContent = name.value;

			if (age.value > 40 && age.value < 42 || age.value > 50 && age.value < 52 || age.value > 60 && age.value < 62) {
				years = 'год';
			} else if (age.value > 34 && age.value < 41 || age.value > 44 && age.value < 51 || age.value > 54 && age.value < 61 || age.value > 64 && age.value < 66) {
				years = 'лет';
			} else if (age.value > 41 && age.value < 45 || age.value > 51 && age.value < 55 || age.value > 61 && age.value < 65) {
				years = 'года';
			}
			ageNewPerson.textContent = `${age.value} ${years}`;	

			if (male.checked) {
	       		sexNewPerson.textContent = 'Мужской';
	        } else {
	          	sexNewPerson.textContent = 'Женский';
	        }

	        politicalViewPerson.textContent = politicalView.value;
	        bioNewPerson.textContent = bio.value;
	       
	    	// Обнуляем результаты  ----------------------------------------------------------------------------
	       	for (let i = 0; i < progressBar.length; i++) {
	       		progressBar[i].style.height = '0';
	       	}
	       	for (let j = 0; j < resultCount.length; j++) {
	       		resultCount[j].textContent = '0%';
	       	}

			// Убираем обводку у всех кандидатов
			for (let k = 0; k < mainCardsItem.length; k++) {
				mainCardsItem[k].classList.remove('main-cards-item-active');	
			}	       	
		});


	// Сбрасываем результаты  ------------------------------------------------------------------------------
	let resetResult = document.getElementById('reset'),
		mainCards = document.getElementsByClassName('main-cards')[0],
		customChar = document.getElementsByClassName('custom-char')[0],
		select = document.getElementById('select');

	
		resetResult.addEventListener('click', () =>{
			mainCards.removeChild(newCardsItem);
			customChar.insertBefore(person ,readyBtn);
			main.style.display = 'none';
			custom.style.display = 'flex';
			
			// Очищаем поля
			name.value = '';
			age.value = '';
			bio.value = '';

			// Обнуляем выбор пола
			female.checked = false;
			male.checked = false;	

			// Возвращаем исходное значение select
			select.value = 'Либеральные';		

			// Функция сброса формы кастомизации
			lock();

			// Блокируем доп. поля, что не указаны в функции lock() и кнопку
			age.style.cssText = 'pointer-events: none; opacity: 0.3;';
			bio.style.cssText = 'pointer-events: none; opacity: 0.3;';
			readyBtn.style.cssText = 'pointer-events: none; opacity: 0.5;';	

			// Возвращаем слайдерам исходное положение, кроме слайдеров "заглушек"
			for (let i = 1; i < hairStyle.length; i++) {
				hairStyle[i].style.display = 'none';
				clothesStyle[i].style.display = 'none';
			}
			for (let j = 1; j < skinColor.length; j++) {
				skinColor[j].style.display = 'none';
			}

			// Вызываем функции выбора пола
			male.change = function() {};
			female.change = function() {};

			// Вызываем функции полей
			name.input = function() {};
			age.input = function() {};
			bio.input = function() {};
			

		});

	
	// Проводим честное голосование и делаем обводку у победителя  -----------------------------------------
	let voting  = document.getElementById('voting');

		voting.addEventListener('click', () => {
			
			let max = 100, min = 0, a, b, c; 
			
			a = Math.floor(Math.random() * (max - min));
		  	b = Math.floor(Math.random() * (max - a));
		  	c = Math.floor(Math.random() * (max - b));

		    if ((a + b) < max) {
		    	c = max - (a + b);
		    } 

		    if ((a + c) < max) {
		    	b = max - (a + c);
		    } 

		    if ((b + c) < max) {
		    	a = max - (b + c);
		    } 

		    resultCount[0].textContent = `${a}%`;
		    resultCount[1].textContent = `${b}%`;
		    progressBar[0].style.height = `${a}%`;
		    progressBar[1].style.height = `${b}%`;

		    resultCount[2].textContent = `${c}%`;
		    progressBar[2].style.height = `${c}%`;			    
			
	/*	let a, b, c, max = 100,
			s = resultCount.length;
			
		    a = Math.floor(Math.random() * max);
		    b = Math.floor(Math.random() * (max - a));
		    c = max - (a + b);
		    arr = [a, b, c];

		    for (let i = 0; i < s; i++) {
		    	resultCount[i].textContent = `${arr[i]}%`;
		    	progressBar[i].style.height = `${arr[i]}%`;
		    } */

		    if (a > b && a > c) {
		    	mainCardsItem[0].classList.add('main-cards-item-active');
		    	mainCardsItem[1].classList.remove('main-cards-item-active');
		    	mainCardsItem[2].classList.remove('main-cards-item-active');
		    }

		    if (b > a && b > c) {
		    	mainCardsItem[1].classList.add('main-cards-item-active');
		    	mainCardsItem[0].classList.remove('main-cards-item-active');
		    	mainCardsItem[2].classList.remove('main-cards-item-active');
		    }	    
		    
		    if (c > a && c > b) {
		    	mainCardsItem[2].classList.add('main-cards-item-active');
		    	mainCardsItem[1].classList.remove('main-cards-item-active');
		    	mainCardsItem[0].classList.remove('main-cards-item-active');
		    }

		});


	// Вмешиваемся в выборы  и делаем обводку у победителя ----------------------------------------------------
	let crime = document.getElementById('crime');

		crime.addEventListener('click', () => {

			let max = 75, min = 0, a, b, c; 
			
			a = Math.floor(Math.random() * (max - min));
		  	b = Math.floor(Math.random() * (max - a));
		  	c = Math.floor(Math.random() * (max - b));

		    if ((a + b) < max) {
		    	c = max - (a + b);
		    } 

		    if ((a + c) < max) {
		    	b = max - (a + c);
		    } 

		    if ((b + c) < max) {
		    	a = max - (b + c);
		    } 

		    resultCount[0].textContent = `${a}%`;
		    resultCount[1].textContent = `${b}%`;
		    progressBar[0].style.height = `${a}%`;
		    progressBar[1].style.height = `${b}%`;

		    resultCount[2].textContent = `${c+25}%`;
		    progressBar[2].style.height = `${c+25}%`;

		/*	let a, b, c, max = 75,
			s = resultCount.length;

			a = Math.floor(Math.random() * max);
			b = Math.floor(Math.random() * (max - a));
			c = (max - (a + b)) + 25;
			arr = [a, b, c];

			for (let i = 0; i < s -1; i++) {
			  	resultCount[i].textContent = `${arr[i]}%`;
			  	progressBar[i].style.height = `${arr[i]}%`;
			}

			resultCount[s-1].textContent = `${c}%`;
			progressBar[s-1].style.height = `${c}%`;*/

		    if (a > b && a > c) {
		    	mainCardsItem[0].classList.add('main-cards-item-active');
		    	mainCardsItem[1].classList.remove('main-cards-item-active');
		    	mainCardsItem[2].classList.remove('main-cards-item-active');
		    }
		
		    if (b > a && b > c) {
		    	mainCardsItem[1].classList.add('main-cards-item-active');
		    	mainCardsItem[0].classList.remove('main-cards-item-active');
		    	mainCardsItem[2].classList.remove('main-cards-item-active');
		    }

		    if (c > a && c > b) {
		    	mainCardsItem[2].classList.add('main-cards-item-active');
		    	mainCardsItem[1].classList.remove('main-cards-item-active');
		    	mainCardsItem[0].classList.remove('main-cards-item-active');
		    }
		
		});

});

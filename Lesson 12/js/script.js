// Запуск обрабочика после построения дерева DOM
$(document).ready(function() {

	// Отображение подложки и формы по клику на любую из 3 кнопок
	$('.text-center, nav li:eq(1)').on('click', function(){

		// Плавное появление подложки через прозрачность в теч. 1.5 сек
		$('.overlay').fadeIn(1500);

		// Показ скрытой формы за пределами рабочей области
		$('.modal').css({'margin-top': '-50em', 'display': 'block'});

		// Плавное появление формы сверху вниз в теч. 1 сек
		$('.modal').animate({marginTop: '5em',}, 1000);
	});

	// Исчезновение подложки и формы по клику на X
	$('.close').on('click', function(){

		// Плавное исчезновение подложки в теч. 1.5 сек
		$('.overlay').fadeOut(1500);

		// Плавно прячем форму вверх в теч. 1 сек
		$('.modal').animate({marginTop: '-50em'}, 1000);
	});	
});
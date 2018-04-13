function ajax() {
let message = {
	loading: 'Загрузка...',
	success: 'Спасибо! Скоро мы с Вами свяжемся',
	failure: 'Что-то пошло не так...'
};

let form = document.getElementsByClassName('main-form');

for (let j =  0; j < form.length; j++) {
	
	let form_footer = document.getElementsByTagName('form')[0];
		form_footer.classList.add('main-form');
		
	let input = form[j].getElementsByTagName('input'),
		statusMessage = document.createElement('div');
		statusMessage.classList.add('status');

		form[j].addEventListener('submit', function(event) {
			event.preventDefault();
			form[j].appendChild(statusMessage);

			// AJAX
			let request = new XMLHttpRequest();
			request.open("POST", 'server.php');
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoder");

			let formData = new FormData(form[j]);
			request.send(formData);

			request.onreadystatechange = function() {
				if (request.readyState < 4) {
					statusMessage.innerHTML = message.loading;
					} else if (request.readyState === 4) {
						if (request.status == 200 && request.status < 300) {
							statusMessage.innerHTML = message.success;
							//Добавляем контент на страницу
						}
						else {
							statusMessage.innerHTML = message.failure;
							}
						}
			};
			for (let i =  0; i < input.length; i++) {
				input[i].value = '';
				//Очищаем поля ввода
			}
		});
	}
	}

	module.exports = ajax;
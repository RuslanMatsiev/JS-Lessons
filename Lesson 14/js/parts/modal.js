function modal() {
let more = document.querySelector('.more'),
	description_btn = document.getElementsByClassName('description-btn'),
	overlay = document.querySelector('.overlay'),
	closes = document.querySelector('.popup-close');

	more.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	closes.addEventListener('click', function() {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

	function clickMore(j) {
		return function () {
			this.classList.add('more-splash');
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
		};
	}
	for (let j = 0; j < description_btn.length; j++){
		description_btn[j].addEventListener('click', clickMore(j));
	}
}

module.exports = modal;
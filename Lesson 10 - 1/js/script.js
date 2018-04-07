class createDiv {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = '70px';
		this.width = '200px';
		this.bg = '#1abc9c';
		this.fontSize = '18px';
		this.textAlign = 'right';
	}
	attributes() {
		let div = document.createElement('div');

			div.classList.add('first');
			document.body.appendChild(div);
			div.textContent = 'Это пробный текст';

			div.style.height = this.height;
			div.style.width = this.width;
			div.style.background = this.bg;
			div.style.fontSize = this.fontSize;
			div.style.textAlign = this.textAlign;
	}
}

const newDiv = new createDiv();
newDiv.attributes();

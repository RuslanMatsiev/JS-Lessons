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
			document.body.appendChild(div);
			div.textContent = 'Это пробный текст';
			div.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign};`;
	}
}

const newDiv = new createDiv();
newDiv.attributes();

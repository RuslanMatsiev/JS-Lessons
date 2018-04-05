let age = document.getElementById('age');

function showUser(surname, name) {
		this.surname = surname;
		this.name = name;
};

showUser.prototype.men = function(surname, name) {
	alert('Пользователь ' + this.surname + ' ' + this.name + ', его возраст ' + age.value + ' лет');
};

let dmitry = new showUser('Новиков', 'Дмитрий');

dmitry.men();



describe('Значение sum', function(){
	it('Возврат значения true', function(){
		assert.typeOf(sum(2,2), 'boolean');
	});
});

describe('Значение num', function(){
	it('Переменная равна 5', function(){
		assert.equal(num, 5);
	});
});

describe('Значение each', function () {
	it('Что возвращает?', function () {
		assert.typeOf(each(arr, myFunc), 'array');
	});
	it('Какой тип?', function () {
		assert.property(each(arr, myFunc), [1, 2, 3]);
	});
	it('Длина равна 3?', function () {
		assert.lengthOf(each(arr, myFunc), 3);
	});
});
import Item from "../src/Item";

describe('Valida a criação de um novo Item', function () {
	test('É possível criar um item válido', function () {
		const item = new Item(1, 'iPhone 14', 6999, 17, 17, 21);
		expect(item).toBeDefined();
	});

	test('Não é possível criar um item com dimensão inválida', function () {
		expect(() => new Item(1, 'iPhone 14', 6999, 17, 17, -10)).toThrow(new Error('Invalid item dimension'));
	});
});
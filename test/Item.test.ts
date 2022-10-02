import itemMock from './mocks/item.mock';

describe('Valida a criação de um novo Item', function () {
	test('É possível criar um item válido', function () {
		const item = itemMock.teclado;
		expect(item).toBeDefined();
	});

	test('Não é possível criar um item com dimensão inválida', function () {
		expect(() => itemMock.invalidItemDimension).toThrow(new Error('Invalid item dimension'));
	});
});
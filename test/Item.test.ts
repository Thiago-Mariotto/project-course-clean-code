import Dimension from '../src/domain/entity/Dimension';
import Item from '../src/domain/entity/Item';


describe('Valida a criação de um novo Item', function () {
	test('É possível criar um item válido', function () {
		const item = new Item(1, 'iPhone 14', 6999, new Dimension(17, 17, 10, 0.4))
		expect(item).toBeDefined();
	});

	test('Não é possível criar um item com dimensão inválida', function () {
		expect(() => new Item(1, 'iPhone 14', 6999, new Dimension(-17, -17, -10, -0.4)))
			.toThrow(new Error('Invalid dimensions'));
	});
});
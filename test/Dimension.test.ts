import Dimension from "../src/domain/entity/Dimension";

describe('Deve testar as dimesões de um item', function () {
	test('É possível criar um item com dimensões válidas', function () {
		const dimension = new Dimension(10, 10, 10, 9.5);
		expect(dimension).toBeDefined();
	});

	test('Não é possível criar uma dimensão negativa', function () {
		expect(() => new Dimension(-10, -10, -10, -9.5)).toThrow('Invalid dimensions');
	});
});
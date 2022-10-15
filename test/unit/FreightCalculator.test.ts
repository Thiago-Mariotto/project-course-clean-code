import Dimension from "../src/domain/entity/Dimension";
import FreightCalculator from "../src/domain/entity/FreightCalculator";
import Item from "../src/domain/entity/Item";

describe('Deve testar o frete', function () {
	test('deve calcular o valor do frete e retornar o valor mínimo', function () {
		const freight = FreightCalculator.calculate(new Item(5, 'Cafeteira', 500, new Dimension(17, 17, 21, 0.8)));
		expect(freight).toBe(10);
	});

	test('deve calcular o valor do frete acima do valor mínimo', function () {
		const freight = FreightCalculator.calculate(new Item(2, 'Guitarra', 4000, new Dimension(100, 30, 10, 3)));
		expect(freight).toBe(30);
	});
});
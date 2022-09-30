import Coupon from "../src/Coupon";
import Item from "../src/Item";
import Order from "../src/Order";

describe('Valida a criação de um novo pedido', function () {
	test('não deve criar um pedido com cpf inválido', function () {
		expect(() => new Order('123.456.798-96')).toThrow(new Error('Invalid CPF'));
	});

	test('deve criar um pedido com 3 itens e calcular o total', function () {
		const order = new Order('19361862170');
		order.addItem(new Item(1, 'Mouse', 250), 1);
		order.addItem(new Item(2, 'Teclado', 450), 1);
		order.addItem(new Item(1, 'Monitor', 1000), 2);
		const total = order.getTotal();
		expect(total).toBe(2700);
	});

	test('ao criar um pedido sem itens o total é 0', function () {
		const order = new Order('19361862170');
		const total = order.getTotal();
		expect(total).toBe(0);
	});

	test('deve criar um pedido com 3 itens e aplicar o cupom de desconto', function () {
		const order = new Order('19361862170');
		order.addItem(new Item(1, 'Monitor', 1000), 2);
		order.addCoupon(new Coupon('10OFF', 10, new Date()));
		const total = order.getTotal();
		expect(total).toBe(1800);
	});

	test('não deve criar um pedido com cupom expirado a 1 dia ou mais', function () {
		 const order = new Order('19361862170');
		order.addItem(new Item(1, 'Monitor', 1000), 2);
		expect(() =>
			order.addCoupon(new Coupon('10OFF', 10, new Date('01/01/2021'))))
			.toThrow(new Error('Coupon expired'));
	});

	test('não deve criar um pedido com cupom com cupom expirado a 1 hora ou mais', function () {
		const order = new Order('19361862170');
		order.addItem(new Item(1, 'Monitor', 1000), 2)
		var dateNow = new Date();
		const oneHour = (1000 * 60 * 60);
		var oneHourAgo = new Date(dateNow.getTime() - oneHour);
		expect(() =>
			order.addCoupon(new Coupon('10OFF', 10, new Date(oneHourAgo))))
			.toThrow(new Error('Coupon expired'));
	});

	test('não deve criar um pedido com cupom expirado a 1 minuto ou mais', function () {
		const order = new Order('19361862170');
		order.addItem(new Item(1, 'Monitor', 1000), 2)
		var dateNow = new Date();
		const oneMinute = (1000 * 60 * 60);
		var oneMinuteAgo = new Date(dateNow.getTime() - oneMinute);
		expect(() =>
			order.addCoupon(new Coupon('10OFF', 10, new Date(oneMinuteAgo))))
			.toThrow(new Error('Coupon expired'));
	});
});
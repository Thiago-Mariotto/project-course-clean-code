import Item from '../../src/Item';

const monitor = new Item(1, 'Monitor', 1000, 17, 17, 22, 1.2);
const mouse = new Item(2, 'Mouse', 250, 17, 17, 21, 0.3);
const teclado = new Item(3, 'Teclado', 450, 17, 17, 21, 0.7);
const invalidItemDimension = new Item(1, 'iPhone 14', 6999, 17, 17, -10, 0.4);

export default {
	monitor,
	teclado,
	mouse,
	invalidItemDimension
}
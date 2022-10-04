export default class OrderItem {
	constructor(readonly idItem: number, readonly price: number, readonly quantity: number) {
		if (this.quantity < 0) throw new Error('Invalid item quantity');
	}

	getTotal() {
		return this.price * this.quantity;
	}
}
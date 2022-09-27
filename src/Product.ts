export default class Product {
	public name: string;
	public description: string;
	public price: number;
	public quantity: number;

	constructor(name: string, price: number, quantity: number, description: string) {
		this.name = name;
		this.description = description;
		this.price = price;
		this.quantity = quantity;
		this.validatePrice(price);
		this.validateName(name);
		this.validateQuantity(quantity);
		this.validateDescription(description);
	};
	validatePrice(price: number) {
		if (this.price <= 0)
			throw new Error('Invalid product price');
	};
	validateName(name: string) {
		const MIN_PRODUCT_SIZE = 2;
		const MAX_PRODUCT_SIZE = 35;

		if (this.name.length <= MIN_PRODUCT_SIZE || this.name.length > MAX_PRODUCT_SIZE)
			throw new Error('Invalid product name');
	};
	validateQuantity(quantity: number) {
		if (this.quantity < 0)
			throw new Error('Invalid product quantity');
	}
	validateDescription(quantity: string) {
		const DESCRIPTION_MIN_SIZE = 10;
		if (this.description.length <= DESCRIPTION_MIN_SIZE)
			throw new Error('Invalid product description, need minimum 10 characters');
	}
	addQuantity(quantity: number) {
		this.quantity += quantity;
	}
	subtractQuantity(quantity: number) {
		this.quantity -= quantity;
	}
}
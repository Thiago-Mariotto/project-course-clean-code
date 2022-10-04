import Dimension from "./Dimension";

export default class Item {
	readonly idItem: number;
	readonly description: string;
	readonly price: number;

	constructor(idItem: number, description: string, price: number, readonly dimension: Dimension = new Dimension(0, 0, 0, 0)) {
		this.idItem = idItem;
		this.description = description;
		this.price = price;
	}

	getVolume() {
		return this.dimension.getVolume();
	}

	getDensity() {
		return this.dimension.getDensity();
	}
}
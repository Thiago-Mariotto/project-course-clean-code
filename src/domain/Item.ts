
export default class Item {
	readonly idItem: number;
	readonly description: string;
	readonly price: number;
	readonly height: number;
	readonly width: number;
	readonly depth: number;
	readonly weight: number;

	constructor(idItem: number, description: string, price: number, height: number, width: number, depth: number, weight: number) {
		this.idItem = idItem;
		this.description = description;
		this.price = price;
		this.depth = depth;
		this.height = height;
		this.width = width;
		this.weight = weight;
		if (!this.dimensionIsValid()) throw new Error('Invalid item dimension');
	}

	private dimensionIsValid() {
		return (this.depth < 0 || this.height < 0 || this.width < 0) ? false : true;
	}
}
export default class Dimension {
	constructor(
		readonly width: number,
		readonly height: number,
		readonly length: number,
		readonly weight: number
	) {
		if (this.weight <= 0 || this.height <= 0 || this.length <= 0 || this.width < 0)
			throw new Error('Invalid dimensions');
	}

	getVolume() {
		return (this.height / 100) * (this.length / 100) * (this.width / 100);
	}

	getDensity() {
		return this.weight / this.getVolume();
	}
}

import Item from "./Item";

export default class FreightCalculator {
	static _DISTANCE: number = 1000;
	static _MINFREIGHT: number = 10;

	static calculate(item: Item) {
		const freigth = FreightCalculator._DISTANCE * item.getVolume() * (item.getDensity() / 100);
		return freigth < this._MINFREIGHT ? this._MINFREIGHT : freigth;
	}
};
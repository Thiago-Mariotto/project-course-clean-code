export default class Coupon {
	readonly createdAt: Date;

	constructor(readonly name: string, readonly percentage: number, readonly expirationDate: Date) {
		this.createdAt = new Date();
		if (!this.couponIsActive()) throw new Error('Coupon expired');
	}

	getDiscount(total: number) {
		return (total * (this.percentage / 100));
	}

	couponIsActive() {
		const dateNow = new Date();
		return (this.expirationDate < dateNow) ? false : true;
	}
} 
import Coupon from "./Coupon";
import Cpf from "./Cpf";
import Item from "./Item";
import OrderItem from "./OrderItem";

export default class Order extends Cpf {
	private cpf: Cpf;
	orderItems: OrderItem[];
	coupon?: Coupon;

	constructor(cpf: string) {
		super(cpf);
		this.cpf = new Cpf(cpf);
		this.orderItems = [];
	}

	addItem(item: Item, quantity: number) {
		const itemIsAdded = this.orderItems.find(arrayItem => arrayItem.idItem === item.idItem);
		if (itemIsAdded) { throw new Error('Item has already been added'); }
		this.orderItems.push(new OrderItem(item.idItem, item.price, quantity));
	}

	addCoupon(coupon: Coupon) {
		this.coupon = coupon;
	}

	getTotal() {
		let total = this.orderItems.reduce((total, orderItem) => {
			total += orderItem.getTotal();
			return total;
		}, 0);
		if (this.coupon) {
			const discount = this.coupon.getDiscount(total);
			return total -= discount;
		}

		return total;
	}
}


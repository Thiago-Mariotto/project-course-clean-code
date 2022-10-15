import Coupon from "./Coupon";
import Cpf from "./Cpf";
import Item from "./Item";
import OrderItem from "./OrderItem";
export default class Order extends Cpf {
  cpf: Cpf;
  orderItems: OrderItem[];
  coupon?: Coupon;
  id?: string;

  constructor(cpf: string) {
    super(cpf);
    this.cpf = new Cpf(cpf);
    this.orderItems = [];
    this.id = this.generateId();
  }

  generateId(): string {
    const year = new Date().getFullYear().toString();
    const actualOrder = '1';
    const orderNumber = year + actualOrder.padStart(8, '0');
    return orderNumber;
  }

  getId() {
    return this.id;
  }

  addItem(item: Item, quantity: number) {
    this.itemIsAdded(item);
    this.orderItems.push(new OrderItem(item.idItem, item.price, quantity));
  }

  private itemIsAdded(item: Item) {
    const itemExits = this.orderItems.some((orderItem) => orderItem.idItem === item.idItem);
    if (itemExits) { throw new Error('Item has already been added'); }
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
export interface Order {
  id: number;
  timestamp: Date;
  store: string;
  products: {
    productID: number;
    quantity: number;
  }[];
  totalPrice: number;
  discountPrice: number;
  paymentMethod: string;
  queueNumber: number;
  waitingTime: number;
}

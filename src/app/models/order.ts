export interface Order {
  id: number;
  timestamp: Date;
  stall: string;
  products: {
    productID: number;
    quantity: number;
  }[];
  totalPrice: number;
  discountPrice: number;
  paymentMethod: string;
  queueNumber: number;
  status: 'complete' | 'pending' | 'paid' | 'preparing' | 'cancelled';
  waitingTime: number;
}

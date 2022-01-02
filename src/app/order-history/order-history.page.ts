import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
})
export class OrderHistoryPage implements OnInit {
  orders: Order[] = [
    {
      id: 1,
      timestamp: new Date(),
      store: 'Sushi Bar',
      products: [
        { productID: 1, quantity: 2 },
        { productID: 1, quantity: 2 },
        { productID: 1, quantity: 2 },
        { productID: 1, quantity: 2 },
      ],
      totalPrice: 100,
      discountPrice: 0,
      paymentMethod: 'cash',
      queueNumber: 1,
      waitingTime: 0,
    },
  ];

  constructor() {}
  ngOnInit() {}
}

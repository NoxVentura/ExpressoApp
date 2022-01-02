import { Component, OnInit } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  stall: string;
  description: string;
  price: number;
  image: string;
  prepTime: number;
  inStock: number;
  tags: string[];
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Chicken Rice',
      stall: 'Chicken Rice',
      description: 'A bowl of chicken rice',
      price: 3,
      image: 'https://i.imgur.com/qJfQZ9x.jpg',
      prepTime: 5,
      inStock: 30,
      tags: ['non-halal', 'rice'],
    },
  ];

  constructor() {}
  ngOnInit() {}
}

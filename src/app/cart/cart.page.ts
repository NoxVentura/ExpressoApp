import { Component, OnInit } from '@angular/core';
import { PickerController, PickerOptions } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  paymentOptions = [
    { text: 'Cash (pay at counter)', value: 'cash' },
    { text: 'Credit Card', value: 'credit' },
    { text: 'SingTel Dash (for liable customers only', value: 'dash' },
  ];

  constructor(private pickerController: PickerController) {}

  async showPicker() {
    let options: PickerOptions = {
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Ok',
          handler: (value: any) => console.log(value),
        },
      ],
      columns: [{ name: 'paymentOptions', options: this.paymentOptions }],
    };
    let picker = await this.pickerController.create(options);
    picker.present();
  }
  ngOnInit() {}
}

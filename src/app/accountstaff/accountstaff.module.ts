import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountstaffPageRoutingModule } from './accountstaff-routing.module';

import { AccountstaffPage } from './accountstaff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountstaffPageRoutingModule
  ],
  declarations: [AccountstaffPage]
})
export class AccountstaffPageModule {}

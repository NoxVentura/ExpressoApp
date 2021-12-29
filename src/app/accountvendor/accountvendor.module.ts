import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountvendorPageRoutingModule } from './accountvendor-routing.module';

import { AccountvendorPage } from './accountvendor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountvendorPageRoutingModule
  ],
  declarations: [AccountvendorPage]
})
export class AccountvendorPageModule {}

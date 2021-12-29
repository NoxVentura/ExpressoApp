import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomestaffPageRoutingModule } from './homestaff-routing.module';

import { HomestaffPage } from './homestaff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomestaffPageRoutingModule
  ],
  declarations: [HomestaffPage]
})
export class HomestaffPageModule {}

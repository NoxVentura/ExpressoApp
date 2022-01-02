import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomevendorPageRoutingModule } from './homevendor-routing.module';

import { HomevendorPage } from './homevendor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomevendorPageRoutingModule,
  ],
  declarations: [HomevendorPage],
})
export class HomevendorPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RegisterPageRoutingModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {
  users: any =[];
  

  constructor(private userService: UserService){

  }
}

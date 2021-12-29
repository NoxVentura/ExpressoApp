import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountstaffPage } from './accountstaff.page';

const routes: Routes = [
  {
    path: '',
    component: AccountstaffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountstaffPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountvendorPage } from './accountvendor.page';

const routes: Routes = [
  {
    path: '',
    component: AccountvendorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountvendorPageRoutingModule {}

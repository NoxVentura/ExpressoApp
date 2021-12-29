import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomestaffPage } from './homestaff.page';

const routes: Routes = [
  {
    path: '',
    component: HomestaffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomestaffPageRoutingModule {}

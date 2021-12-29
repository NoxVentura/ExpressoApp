import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomevendorPage } from './homevendor.page';

const routes: Routes = [
  {
    path: '',
    component: HomevendorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomevendorPageRoutingModule {}

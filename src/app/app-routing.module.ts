import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'homestaff',
    loadChildren: () => import('./homestaff/homestaff.module').then( m => m.HomestaffPageModule)
  },
  {
    path: 'accountstaff',
    loadChildren: () => import('./accountstaff/accountstaff.module').then( m => m.AccountstaffPageModule)
  },
  {
    path: 'homevendor',
    loadChildren: () => import('./homevendor/homevendor.module').then( m => m.HomevendorPageModule)
  },
  {
    path: 'accountvendor',
    loadChildren: () => import('./accountvendor/accountvendor.module').then( m => m.AccountvendorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

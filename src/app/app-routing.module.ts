import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomLoginComponent} from './custom-login/custom-login.component';
import {CustomRegisterComponent} from './custom-register/custom-register.component';
import {AuthGuard} from './@core/Login/auth.guard';

const routes: Routes = [
  { path: 'pages',  loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) , canActivate:[AuthGuard]},
  { path: 'login', component: CustomLoginComponent },
  { path: 'register', component: CustomRegisterComponent },
  { path: '', redirectTo: '/pages', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

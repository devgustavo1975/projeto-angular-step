import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelAdmin } from './painel-admin/painel-admin';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'painel-admin', component: PainelAdmin },
  {path: 'dashboard', component: Dashboard },
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
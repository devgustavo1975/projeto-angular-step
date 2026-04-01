import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { PainelAdmin } from './painel-admin/painel-admin';
import { Estoque } from './estoque/estoque';
import { Login } from './login/login';
import { RoleGuard } from './guard/role-guard';
import { AuthGuard } from './guard/auth-guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'estoque', component: Estoque },
  {
    path: 'painel-admin',
    component: PainelAdmin,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
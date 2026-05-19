import { NgModule } from '@angular/core';

import {
  RouterModule,
  Routes
} from '@angular/router';

import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { PainelAdmin } from './painel-admin/painel-admin';

import { RoleGuard } from './guards/role-guard';

const routes: Routes = [

  // LOGIN
  {
    path: 'login',
    component: Login
  },

  // DASHBOARD
  {
    path: 'dashboard',
    component: Dashboard
  },

  // PAINEL ADMINISTRATIVO PROTEGIDO
  {
    path: 'painel-adm',
    component: PainelAdmin,
    canActivate: [RoleGuard]
  },

  // ROTA INICIAL
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // ROTA NÃO ENCONTRADA
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
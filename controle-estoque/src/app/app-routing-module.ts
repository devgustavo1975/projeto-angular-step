import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { PainelAdmin } from './painel-admin/painel-admin';
import { FormUsuarios } from './componentes/formulario-registro/formulario-registro';

import { RoleGuard } from './guards/role-guard';

const routes: Routes = [

  {
    path: 'login',
    component: Login
  },

  {
    path: 'dashboard',
    component: Dashboard
  },

  {
    path: 'painel-admin',
    component: PainelAdmin,
    canActivate: [RoleGuard]
  },

  {
    path: 'formulario-registro',
    component: FormUsuarios
  },

  // REMOVA ESSAS ROTAS até criar os componentes
  // {
  //   path: 'produtos',
  //   component: ProdutosComponent
  // },
  //
  // {
  //   path: 'relatorios',
  //   component: RelatoriosComponent
  // },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
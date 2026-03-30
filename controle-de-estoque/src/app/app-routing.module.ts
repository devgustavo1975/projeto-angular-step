import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { LoginComponent } from './login/login.component';
import { PainelAdminComponent } from './painel-admin/painel-admin.component';
import { AuthGuard } from './guard/auth.guard';
import { RoleGuard } from './guard/role-guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'estoque', component: EstoqueComponent },
  {
    path: 'painel-admin',
    component: PainelAdminComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'admin' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

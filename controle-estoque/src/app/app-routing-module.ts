import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelAdmin } from './painel-admin/painel-admin';

const routes: Routes = [
  { path: 'painel-adm', component: PainelAdmin }, // ✅ Apenas esta rota
  { path: '', redirectTo: 'painel-adm', pathMatch: 'full' } // Rota inicial
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
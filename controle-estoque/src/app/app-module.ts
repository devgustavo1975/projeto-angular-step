import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PainelAdmin } from './painel-admin/painel-admin';
import { Estoque } from './estoque/estoque';
import { Login } from './login/login';
import { FormUsuarios } from './componentes/form-usuarios/form-usuarios';
import { ReactiveFormsModule } from '@angular/forms';
import { Dashboard } from './dashboard/dashboard';

@NgModule({
  declarations: [App, PainelAdmin, Estoque, Login, FormUsuarios, Dashboard],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
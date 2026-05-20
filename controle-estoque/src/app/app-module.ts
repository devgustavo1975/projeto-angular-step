import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

import { App } from './app';
import { Dashboard } from './dashboard/dashboard';
import { PainelAdmin } from './painel-admin/painel-admin';
import { Login } from './login/login';

import { FormUsuarios } from './componentes/formulario-registro/formulario-registro';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    App,
    Dashboard,
    PainelAdmin,
    Login,
    FormUsuarios
  ],

  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],

  providers: [],

  bootstrap: [App]
})

export class AppModule { }

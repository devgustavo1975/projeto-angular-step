import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { App } from './app';
import { PainelAdmin } from './painel-admin/painel-admin';
import { FormUsuarios } from './componentes/formulario-registro/formulario-registro';
import { Dashboard } from './dashboard/dashboard';

import { AppRoutingModule } from './app-routing-module';

@NgModule({

  declarations: [
    App,
    PainelAdmin,
    FormUsuarios,
    Dashboard
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

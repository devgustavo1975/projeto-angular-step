import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { App } from './app';
import { PainelAdmin } from './painel-admin/painel-admin';
import { FormUsuarios } from './componentes/formulario-registro/formulario-registro'; // ✅ Importado
import { AppRoutingModule } from './app-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    PainelAdmin,
    FormUsuarios // ✅ Declarado como pertencente ao módulo
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }

import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.html',
  styleUrls: ['./formulario-registro.css']
})

export class FormUsuarios {

  registroForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {

    this.registroForm = this.fb.group({

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      passwordHash: [
        '',
        Validators.required
      ],

      roles: [
        '',
        Validators.required
      ],

      firstName: [
        '',
        Validators.required
      ]

    });

  }

  registrar(): void {

    if (this.registroForm.valid) {

      console.log(
        this.registroForm.value
      );

    } else {

      this.registroForm.markAllAsTouched();

    }

  }

}
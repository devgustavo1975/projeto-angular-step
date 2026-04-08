import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../servicos/auth';

@Component({
  selector: 'app-form-usuarios',
  standalone: false,
  templateUrl: './formulario-registro.html',
  styleUrl: './formulario-registro.css',
})
export class FormUsuarios {
  constructor(@Inject(Auth) private authService: Auth) {}

  registroForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    roles: new FormControl('', Validators.required),
});

registrar() {
  this.authService.registrar(this.registroForm.value).subscribe({
    next: (response) => {
      console.log('Usuário registrado com sucesso:', response);
    },
    error: (error) => {
      console.error('Erro ao registrar usuário:', error);
    },
  });
}
}

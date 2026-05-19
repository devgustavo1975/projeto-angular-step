import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../servicos/auth';

@Component({
  selector: 'app-formulario-registro',
  standalone: false,
  templateUrl: './formulario-registro.html',
  styleUrl: './formulario-registro.css',
})
export class FormUsuarios {

  mensagem = '';
  erro = false;

  constructor(
    @Inject(AuthService) private authService: AuthService
  ) {}

  registroForm = new FormGroup({

    nome: new FormControl('', Validators.required),

    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    senha: new FormControl('', Validators.required),

    perfil: new FormControl('usuario', Validators.required),
  });

  registrar() {

    if (this.registroForm.invalid) {

      this.erro = true;
      this.mensagem = 'Preencha todos os campos corretamente.';

      return;
    }

    this.authService.registrar(this.registroForm.value).subscribe({

      next: (response) => {

        this.erro = false;

        this.mensagem = 'Usuário registrado com sucesso!';

        console.log('Usuário registrado com sucesso:', response);

        // Limpa formulário
        this.registroForm.reset({
          perfil: 'usuario'
        });
      },

      error: (error) => {

        this.erro = true;

        this.mensagem = 'Erro ao registrar usuário.';

        console.error('Erro ao registrar usuário:', error);
      },
    });
  }
}

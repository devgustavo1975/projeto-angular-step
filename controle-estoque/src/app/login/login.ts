import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../servicos/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private auth: Auth, private router: Router) {}

loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
});

login() {
  this.auth.login(this.loginForm.value).subscribe({
    next: (response:any) => {
      console.log('Usuário logado com sucesso:', response);
      this.router.navigate(['/dashboard']);
    },
    error: (error) => {
      console.error('Erro ao fazer login:', error);
    },
  });
}
}

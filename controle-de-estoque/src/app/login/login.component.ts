import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
 
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router, private auth: AuthService) {}
  login() {
    this.auth.login('usuario', 'admin');
    this.checkLogin();
}
  checkLogin() {
    if (this.auth.estaLogado()) {
      this.router.navigate(['/painel-admin']);
    }
  }
}

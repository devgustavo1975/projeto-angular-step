import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painel-admin',
  standalone: false,
  templateUrl: './painel-admin.html',
  styleUrl: './painel-admin.css',
})
export class PainelAdmin implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {

    // Recupera usuário salvo no localStorage
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');

    // Verifica se o usuário é administrador
    if (usuario.perfil !== 'admin') {
      alert('Acesso negado! Somente administradores podem acessar.');

      // Redireciona para o dashboard
      this.router.navigate(['/dashboard']);
    }
  }

  voltarDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
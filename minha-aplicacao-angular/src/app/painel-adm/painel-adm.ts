
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../services/usuarios';

@Component({
  selector: 'app-painel-adm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './painel-adm.html',
  styleUrl: './painel-adm.css'
})
export class PainelAdm implements OnInit {
  private usuarioService = inject(Usuario);

  usuarios: any[] = [];

  ngOnInit(): void {
    this.usuarioService.listarUsuarios().subscribe({
      next: (resposta: any[]) => {
        this.usuarios = resposta;
      },
      error: (erro: any) => {
        console.error('Erro ao buscar usuários:', erro);
      }
    });
  }
}
          
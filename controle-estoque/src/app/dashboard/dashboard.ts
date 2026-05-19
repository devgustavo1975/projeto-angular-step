import { Component, OnInit, signal } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard implements OnInit {

 produtos = signal<any[]>([]);
 carregando: boolean = true;

  constructor(private produto: Produto) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.carregando = true;

    this.produto.listarProdutos().subscribe({
      next: (res: any[]) => {
        this.produtos.set(res);
        this.carregando = false;
      },

      error: (err: any) => {
        console.error('Erro ao carregar produtos:', err);
        this.carregando = false;
      }
    });
  }
}
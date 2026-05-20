import { Component, OnInit, signal } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard implements OnInit {

  // Mantive o signal, definindo o tipo correto para maior segurança
  produtos = signal<Produto[]>([]);
  carregando = signal<boolean>(true); // Alterei para signal também, mantendo consistência

  constructor(private produtoService: Produto) { } // Melhorei o nome para deixar claro que é um serviço

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.carregando.set(true); // Atualiza o estado de carregamento

    this.produtoService.listarProdutos().subscribe({
      next: (res: Produto[]) => {
        this.produtos.set(res); // Atribui os dados ao signal
        this.carregando.set(false); // Finaliza o carregamento
      },
      error: (err: any) => {
        console.error('Erro ao carregar produtos:', err);
        this.carregando.set(false); // Mesmo com erro, finaliza o carregamento
      }
    });
  }
}
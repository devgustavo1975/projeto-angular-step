import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from '../produto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {

  produtos: any[] = [];
  carregando: boolean = true;

  constructor(@Inject(ProductService) private productService: ProductService) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.productService.listarProdutos().subscribe({
      next: (res) => {
        this.produtos = res;
        this.carregando = false;
      },
      error: (err) => {
        console.error('Erro ao carregar produtos', err);
        this.carregando = false;
      }
    });
  }
}
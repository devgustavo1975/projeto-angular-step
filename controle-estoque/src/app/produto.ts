import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Produto {

  // URL DA FAKE STORE API
  private apiUrl =
    'https://fakestoreapi.com/products';
rating: any;
price: any;
category: any;
title: any;
image: any;

  constructor(private http: HttpClient) { }

  // LISTAR TODOS OS PRODUTOS
  listarProdutos(): Observable<any[]> {

    return this.http.get<any[]>(
      this.apiUrl
    );
  }

  // BUSCAR PRODUTO POR ID
  buscarProdutoPorId(id: number): Observable<any> {

    return this.http.get<any>(
      `${this.apiUrl}/${id}`
    );
  }

  // BUSCAR CATEGORIAS
  listarCategorias(): Observable<any[]> {

    return this.http.get<any[]>(
      `${this.apiUrl}/categories`
    );
  }
}
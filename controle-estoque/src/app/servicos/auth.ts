import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  // URL BASE DA API
  private apiUrl =
    'https://projeto-node-step-git-main-fabios-projects-d2648344.vercel.app/api/auth';

  constructor(private http: HttpClient) { }

  // LOGIN
  login(credentials: any): Observable<any> {

    return this.http.post(
      `${this.apiUrl}/login`,
      credentials
    );
  }

  // REGISTRO
  registrar(dados: any): Observable<any> {

    return this.http.post(
      `${this.apiUrl}/register`,
      dados
    );
  }

  // SALVAR TOKEN
  salvarToken(token: string): void {

    localStorage.setItem('token', token);
  }

  // SALVAR USUÁRIO
  salvarUsuario(usuario: any): void {

    localStorage.setItem(
      'usuario',
      JSON.stringify(usuario)
    );
  }

  // OBTER TOKEN
  obterToken(): string | null {

    return localStorage.getItem('token');
  }

  // OBTER USUÁRIO
  obterUsuarioSalvo(): any {

    const usuario =
      localStorage.getItem('usuario');

    return usuario
      ? JSON.parse(usuario)
      : null;
  }

  // LOGOUT
  logout(): void {

    localStorage.removeItem('token');

    localStorage.removeItem('usuario');
  }

  // VERIFICA AUTENTICAÇÃO
  estaAutenticado(): boolean {

    return !!this.obterToken();
  }

  // VERIFICA SE É ADMIN
  ehAdministrador(): boolean {

    const usuario =
      this.obterUsuarioSalvo();

    return (
      usuario?.perfil === 'admin' ||
      usuario?.role === 'admin'
    );
  }

  // BUSCAR DADOS DO USUÁRIO LOGADO
  obterUsuarioLogado(): Observable<any> {

    const token = this.obterToken();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get(
      `${this.apiUrl}/me`,
      { headers }
    );
  }
}
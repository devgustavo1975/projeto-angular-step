import { Injectable } from '@angular/core';

import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';

import { Observable, of } from 'rxjs';

import {
  catchError,
  map
} from 'rxjs/operators';

import { AuthService } from '../servicos/auth';

@Injectable({
  providedIn: 'root'
})

export class RoleGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {

    // Verifica token
    const token = this.authService.obterToken();

    // Sem token -> login
    if (!token) {

      this.router.navigate(['/login']);

      return of(false);
    }

    // Busca usuário logado
    return this.authService.obterUsuarioLogado().pipe(

      map((usuario: any) => {

        // Verifica perfil admin
        if (
          usuario?.perfil === 'admin' ||
          usuario?.role === 'admin'
        ) {

          return true;
        }

        // Não é admin -> dashboard
        this.router.navigate(['/dashboard']);

        return false;
      }),

      catchError(() => {

        // Token inválido
        this.authService.logout();

        this.router.navigate(['/login']);

        return of(false);
      })
    );
  }
}
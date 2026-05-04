
import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'produtos',
    pathMatch: 'full',
  },
  {
    path: 'produtos',
    loadComponent: () =>
      import('./pages/lista-produtos/lista-produtos').then(
        (m) => m.ListaProdutos
      ),
  },
  {
    path: 'produto/:id',
    loadComponent: () =>
      import('./pages/detalhe-produto/detalhe-produto').then(
        (m) => m.DetalheProduto
      ),
  },
  {
    path: 'painel-adm',
    loadComponent: () =>
      import('./painel-adm/painel-adm').then(
        (m) => m.PainelAdm
      ),
    canActivate: [authGuard],
  },
  {
    path: 'componente-pai',
    loadComponent: () =>
      import('./pages/componente-pai/componente-pai').then(
        (m) => m.ComponentePai
      ),
  },
  {
    path: 'cadastro-usuario',
    loadComponent: () =>
      import('./pages/cadastro-usuario/cadastro-usuario').then(
        (m) => m.CadastroUsuario
      ),
  },
  {
    path: '**',
    redirectTo: 'produtos',
  }
];
          
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'notificacao',
    loadChildren: () => import('./notificacao/notificacao.module').then( m => m.NotificacaoPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'informacoes',
    loadChildren: () => import('./informacoes/informacoes.module').then( m => m.InformacoesPageModule)
  },
  {
    path: 'ajuda',
    loadChildren: () => import('./ajuda/ajuda.module').then( m => m.AjudaPageModule)
  },
  {
    path: 'dependentes',
    loadChildren: () => import('./dependentes/dependentes.module').then( m => m.DependentesPageModule)
  },
  {
    path: 'vacinas',
    loadChildren: () => import('./vacinas/vacinas.module').then( m => m.VacinasPageModule)
  },
  {
    path: 'carteirinha',
    loadChildren: () => import('./carteirinha/carteirinha.module').then( m => m.CarteirinhaPageModule)
  },
  {
    path: 'cadastro-vacina',
    loadChildren: () => import('./cadastro-vacina/cadastro-vacina.module').then( m => m.CadastroVacinaPageModule)
  },
  {
    path: 'cadastro-dependente',
    loadChildren: () => import('./cadastro-dependente/cadastro-dependente.module').then( m => m.CadastroDependentePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { Component } from '@angular/core';

import { InformacoesPage } from './informacoes/informacoes.page';
import { AjudaPage } from './ajuda/ajuda.page';
import { PerfilPage } from './perfil/perfil.page';
import { HomePage } from './home/home.page';
import { NotificacaoPage } from './notificacao/notificacao.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: '/home', icon: 'home' },
    { title: 'Perfil', url: '/perfil', icon: 'person' },
    { title: 'Notificações', url: '/notificacao', icon: 'notifications' },
    { title: 'Informações sobre vacinas', url: '/informacoes', icon: 'newspaper' },
    { title: 'Ajuda', url: '/ajuda', icon: 'help' }
  ];
  constructor() {}
}

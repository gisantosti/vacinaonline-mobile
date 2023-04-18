import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.page.html',
  styleUrls: ['./notificacao.page.scss'],
})
export class NotificacaoPage implements OnInit {

  public notificacoes;

  constructor() {
    this.notificacoes = [
      {descricao:'Sua vacina de Hepatite B vence em 10 dias.', data: 'Hoje'},
      {descricao:'Existe uma campanha de vacinação ativa na sua cidade.', data: '3 dias'},
      {descricao:'Já tomou a sua vacina contra a gripe?', data: '1 mês'},
    ];
  }

  ngOnInit() {
  }

}

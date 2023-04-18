import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dependentes',
  templateUrl: './dependentes.page.html',
  styleUrls: ['./dependentes.page.scss'],
})

export class DependentesPage implements OnInit {

  public dependentes;

  constructor(public navCtrl: NavController) {
    this.dependentes = [
      {nome: 'Maria', dataNasc: '01/02/2000'},
      {nome: 'João', dataNasc: '20/05/1990'},
      {nome: 'José', dataNasc: '18/11/2005'},
      {nome: 'Joana', dataNasc: '25/01/1999'}
    ];
  }

  ngOnInit() {
  }

}

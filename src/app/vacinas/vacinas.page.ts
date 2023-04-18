import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vacinas',
  templateUrl: './vacinas.page.html',
  styleUrls: ['./vacinas.page.scss'],
})
export class VacinasPage implements OnInit {

  public vacinas;

  constructor(public navCtrl: NavController) {
    this.vacinas = [
      {nome: 'Hepatite B', dataCad: '01/02/2021', dataVenc: '01/05/2021'},
      {nome: 'Tetano', dataCad: '20/05/2001'},
      {nome: 'Gripe', dataCad: '18/11/2005'}
    ];
  }

  ngOnInit() {
  }

}

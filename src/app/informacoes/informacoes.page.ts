import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.page.html',
  styleUrls: ['./informacoes.page.scss'],
})
export class InformacoesPage implements OnInit {

  public informacoes;

  constructor() {
    this.informacoes = [
      {titulo: 'Hepatite B', descricao: 'Os adultos (incluindo idosos) que não tiverem comprovação de vacinação contra a hepatite B,' +
                                        'devem receber o esquema completo com 3 doses.'},
      {titulo: 'Triplice viral',descricao: 'A SRC (tríplice viral, MMR) está disponível para mulheres até 49 e homens até 39 anos,' +
                                            ' que não tenham comprovação de vacinação anterior.'},
      {titulo: 'Influenza',descricao: 'A vacina contra gripe (influenza) está disponível anualmente,' +
                                      ' durante a Campanha Nacional de Vacinação do Idoso.'}
    ];
  }

  ngOnInit() {
  }

}

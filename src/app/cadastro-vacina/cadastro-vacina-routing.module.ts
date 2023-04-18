import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroVacinaPage } from './cadastro-vacina.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroVacinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroVacinaPageRoutingModule {}

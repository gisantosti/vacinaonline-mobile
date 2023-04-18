import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroVacinaPageRoutingModule } from './cadastro-vacina-routing.module';

import { CadastroVacinaPage } from './cadastro-vacina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroVacinaPageRoutingModule
  ],
  declarations: [CadastroVacinaPage]
})
export class CadastroVacinaPageModule {}

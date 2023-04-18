import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarteirinhaPageRoutingModule } from './carteirinha-routing.module';

import { CarteirinhaPage } from './carteirinha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarteirinhaPageRoutingModule
  ],
  declarations: [CarteirinhaPage]
})
export class CarteirinhaPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategorieTitlePageRoutingModule } from './categorie-title-routing.module';

import { CategorieTitlePage } from './categorie-title.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategorieTitlePageRoutingModule
  ],
  declarations: [CategorieTitlePage]
})
export class CategorieTitlePageModule {}

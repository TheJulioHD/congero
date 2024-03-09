import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CongresoDetailsPageRoutingModule } from './congreso-details-routing.module';

import { CongresoDetailsPage } from './congreso-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CongresoDetailsPageRoutingModule
  ],
  declarations: [CongresoDetailsPage]
})
export class CongresoDetailsPageModule {}

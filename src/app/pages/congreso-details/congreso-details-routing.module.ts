import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CongresoDetailsPage } from './congreso-details.page';

const routes: Routes = [
  {
    path: '',
    component: CongresoDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CongresoDetailsPageRoutingModule {}

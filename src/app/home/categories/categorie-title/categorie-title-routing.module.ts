import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategorieTitlePage } from './categorie-title.page';

const routes: Routes = [
  {
    path: '',
    component: CategorieTitlePage
  },
  {
    path: ':idCourse',
    loadChildren: () => import('./courses/courses.module').then( m => m.CoursesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategorieTitlePageRoutingModule {}

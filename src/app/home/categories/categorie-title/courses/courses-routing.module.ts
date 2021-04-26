import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesPage } from './courses.page';

const routes: Routes = [
  {
    path: '',
    component: CoursesPage
  },
  {
    path: ':idchapter',
    loadChildren: () => import('./chapters/chapters.module').then( m => m.ChaptersPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesPageRoutingModule {}

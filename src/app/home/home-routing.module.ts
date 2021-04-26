import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes =[

  {
    path: 'tabs',
    component: HomePage,
    children: [  {
      path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
    },
    {
      path: 'note',
      loadChildren: () => import('./note/note.module').then( m => m.NotePageModule)
      },
    {
      path:'',
      redirectTo: '/home/tabs/categories',
      pathMatch: 'full'
    }
  ]
  },
  {
    path:'',
    redirectTo: '/home/tabs/categories',
    pathMatch: 'full'
  }
  ];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

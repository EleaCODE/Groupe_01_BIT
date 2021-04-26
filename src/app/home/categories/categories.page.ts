import { Component, OnInit, NgModule } from '@angular/core';
import { CategorieService } from 'src/app/categorie.service';
import { Categorie } from '../categories.model';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})

export class CategoriesPage implements OnInit {
showCategorie : Categorie[];
  constructor( private categorieService: CategorieService) { }

  ngOnInit() {
    this.showCategorie= this.categorieService.getCategorie()
  }


}


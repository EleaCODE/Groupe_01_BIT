import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from 'src/app/categorie.service';
import { Categorie } from '../../categories.model';

@Component({
  selector: 'app-categorie-title',
  templateUrl: './categorie-title.page.html',
  styleUrls: ['./categorie-title.page.scss'],
})
export class CategorieTitlePage implements OnInit {

  showCategorie: Categorie;

  constructor(private route:ActivatedRoute, private categorieService: CategorieService ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
      let id=paramMap.get('idCategorie');
      this.showCategorie=this.categorieService.getOneCategorie(id);
      console.log(this.showCategorie)
    })
  }

}

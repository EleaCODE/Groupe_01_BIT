import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from 'src/app/categorie.service';
import {Chapters } from 'src/app/home/chapters.model';
import { Courses } from 'src/app/home/course.model';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.page.html',
  styleUrls: ['./chapters.page.scss'],
})
export class ChaptersPage implements OnInit {

  showCategorie: Courses;

  constructor(private route:ActivatedRoute, private categorieService: CategorieService ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
      let id=paramMap.get('idchapter');
      let idCat=paramMap.get('idCategorie');
      this.showCategorie=this.categorieService.getOneCategorie(idCat).courses.find(cour=>cour.id=id);
      console.log(this.showCategorie.title)
    })
  }
}

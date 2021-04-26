import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from 'src/app/categorie.service';
import { Categorie } from 'src/app/home/categories.model';
import { Chapters } from 'src/app/home/chapters.model';
import { Courses } from 'src/app/home/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

  showCategorie: Courses;

  constructor(private route:ActivatedRoute, private categorieService: CategorieService ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
      let id=paramMap.get('idCourse');
      let idCat=paramMap.get('idCategorie');
      this.showCategorie=this.categorieService.getOneCategorie(idCat).courses.find(cour=>cour.id=id);
      console.log(this.showCategorie.title)
    })
  }
}

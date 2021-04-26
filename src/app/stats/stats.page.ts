import { Component, OnInit } from '@angular/core';
import { Chapters } from '../home/chapters.model';
import { Courses } from '../home/course.model';
import { Stat } from './stats.model';
import { StatsService } from './stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {

  categorieViewed : Stat[];
  courseViewed: Courses[];
  chapterViewed: Chapters[];

  constructor( private statservice: StatsService) { }

  ngOnInit() {
    this.categorieViewed= this.statservice.getCategorie()
    this.courseViewed= this.statservice.getCategorie()
    this.chapterViewed= this.statservice.getCategorie()
  }
  delete(){
    this.categorieViewed=[],
    this.courseViewed= [],
    this.chapterViewed=[]
  }
}

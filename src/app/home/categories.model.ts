import { Title } from "@angular/platform-browser";
import { ChaptersPage } from "./categories/categorie-title/courses/chapters/chapters.page";
import { CoursesPage } from "./categories/categorie-title/courses/courses.page";
import { Courses } from "./course.model";
export class Categorie{
constructor(
  public id?: string,
  public title? : string,
  public description?: string,
  public imageUrl?: string,
  public courses?: Courses[]
){}

}


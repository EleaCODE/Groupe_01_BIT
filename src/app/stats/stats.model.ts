import { Courses } from "./course.model";

export class Stat{
  constructor(
    public id?: string,
    public title? : string,
    public description?: string,
    public imageUrl?: string,
    public courses?: Courses[]
  ){}

  }

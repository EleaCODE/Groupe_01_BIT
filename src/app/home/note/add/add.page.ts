import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Note } from '../note.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  saveNote:FormGroup= this.fb.group({
    titleInput:[[],Validators.required],
    contentInput:[[],Validators.required]
  })

  constructor(private fb:FormBuilder ) { }

  ngOnInit() {
  }
  addNote(){
    if (this.saveNote.valid){
      let content: Note={
        title:this.saveNote.get('titleInput').value,
        content:this.saveNote.get('contentInput').value


    }
    console.log(content);
    } else {
      console.log("invalid form")
    }
  }

}


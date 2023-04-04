import { Component } from '@angular/core';
import {Note} from "./note.model";
import {NotesComponent} from "./notes/notes.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Notes-App';

  listOfNotes: Note[] = [];

  onNoteCreated(noteData: Note){
    this.listOfNotes.push({
      name: noteData.name,
      description: noteData.description

    })
    console.log(this.listOfNotes);
  }

  onNoteDeleted(){
    this.listOfNotes.splice(0, 1);
    console.log(this.listOfNotes);
  }

  // notes: Note[] = [
  //   new Note('test', 'test'),
  //   new Note('test', 'test'),
  //   new Note('test', 'test'),
  //   new Note('test', 'test'),
  //   new Note('test', 'test')
  // ];
  //
  // onNoteCreated(noteData: Note){
  //   this.notes.push({
  //     name: noteData.name,
  //     description: noteData.description
  //
  //   })
  //   console.log(this.notes);
  // }
}

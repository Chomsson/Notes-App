import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Note} from "../note.model";

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  @ViewChild('noteName') nameInputRef!: ElementRef;
  @ViewChild('noteDescription') descInputRef!: ElementRef;
  @Output() noteCreated = new EventEmitter<Note>();
  @Output() deleteNote = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  public onAddNoteClick(nameInput: HTMLTextAreaElement, descInput: HTMLTextAreaElement){
    const noteName = this.nameInputRef.nativeElement.value;
    const noteDesc = this.descInputRef.nativeElement.value;
    const newNote = new Note(noteName, noteDesc);
    this.noteCreated.emit(newNote);
  }

  onDeleteClick(){
    this.deleteNote.emit();
  }
}

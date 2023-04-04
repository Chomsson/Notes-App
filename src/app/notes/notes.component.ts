import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from "../note.model";
import {ControlPanelComponent} from "../control-panel/control-panel.component";



@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  @Input() note!: Note;
  @Input() notes!: Note[];
  constructor() {
  }

  ngOnInit(): void {
  }




}

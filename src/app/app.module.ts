import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import {FormsModule} from "@angular/forms";
import { NoteItemComponent } from './notes/note-item/note-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    ControlPanelComponent,
    NoteItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

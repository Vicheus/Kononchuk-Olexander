import {Component, OnInit} from "@angular/core";
import {CalendarService} from "../_services/calendar.service";
import {Note} from "../shared/models/note";

@Component({
  selector: 'note-editor',
  providers: [CalendarService],
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.sass']
})
export class NoteEditorComponent implements OnInit {

  noteTypes;

  newNote: Note = new Note();

  notes;

  constructor(private _cs: CalendarService) {
  }

  ngOnInit() {
    this.noteTypes = this._cs.getNoteTypes();
  }

  onSubmit() {
    console.log()
  }

}

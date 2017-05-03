import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {CalendarService} from "../_services/calendar.service";
import {Note} from "../shared/models/note";

@Component({
  selector: 'note-editor',
  providers: [CalendarService],
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.sass']
})
export class NoteEditorComponent implements OnInit {

  @Output() noteCreated = new EventEmitter();

  noteTypes;

  newNote: Note = new Note();

  active: boolean = true;

  constructor(private _cs: CalendarService) {
  }

  ngOnInit() {
    this.noteTypes = this._cs.getNoteTypes();
  }

  onSubmit() {
    this.noteCreated.emit({note: this.newNote});
    // console.log(this.newNote);

    this.newNote = new Note();
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

}

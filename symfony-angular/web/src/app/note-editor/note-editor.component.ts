import {Component, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {CalendarService} from "../_services/calendar.service";
import {Note} from "../shared/models/note";
import {DialogComponent, DialogService} from "ng2-bootstrap-modal";

@Component({
  selector: 'note-editor',
  providers: [CalendarService],
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.sass']
})
export class NoteEditorComponent extends DialogComponent<Note, Note | boolean> implements OnInit, OnChanges {

  id: number;
  noteTitle: string;
  color: string;
  type: string;
  text: string;
  date: Date;
  deleteNote: boolean;

  noteTypes;

  defaultColor = "#337ab7";

  newNote: Note = new Note();

  active: boolean = true;

  constructor(private _cs: CalendarService,
              dialogService: DialogService) {
    super(dialogService);
  }

  ngOnInit() {
    this.noteTypes = this._cs.getNoteTypes();

    this.newNote.id = this.id;
    this.newNote.noteTitle = this.noteTitle;
    this.newNote.color = this.color;
    this.newNote.type = this.type;
    this.newNote.text = this.text;
    this.newNote.date = this.date;
    this.newNote.deletedAt = false;
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  apply(form) {
    if (form.valid) {
      this.result = this.newNote;

      this.newNote = new Note();
      this.active = false;
      setTimeout(() => this.active = true, 0);

      this.close();
    }
  }

  remove() {
    this.newNote.deletedAt = true;
    this.result = this.newNote;

    this.newNote = new Note();
    this.active = false;
    setTimeout(() => this.active = true, 0);

    this.close();
  }

}

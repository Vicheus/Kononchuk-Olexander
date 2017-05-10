import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {Note} from "app/shared/models/note";
import {CalendarService} from "app/_services/calendar.service";
import {NoteEditorComponent} from "app/note-editor/note-editor.component";
import {DialogService} from "ng2-bootstrap-modal";

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']
})
export class NoteComponent implements OnInit, OnChanges {

  @Input() day: Date;
  @Input() notes: Note[];

  note: Note[];

  today = new Date();

  constructor(public _cs: CalendarService,
              public dialogService: DialogService) {
  }

  ngOnInit() {
    this.note = this.notes;
  }

  ngOnChanges(changes: SimpleChanges) {
  }


  onNoteCreated(event) {
    this._cs.addNewNote(event);
  }

  showPopup() {
    this.dialogService.addDialog(NoteEditorComponent,
      {
        titleMessage: 'Create',
        currentDate: this.day
      },
      {closeByClickingOutside: true}
    ).subscribe((result) => {
      //We get dialog result
      if (result && result instanceof Note) {
        result.id = this.note[this.note.length - 1].id + 1;
        this.note.push(result);
        this._cs.addNewNote(result);
      }
      // console.log(this._cs.notes);
      console.log(result);
    });
  }

  editNote(n, event) {
    console.log(n);
    event.stopPropagation();
    this.dialogService.addDialog(NoteEditorComponent,
      {
        titleMessage: 'Edit',
        id: n.id,
        currentDate: n.currentDate,
        noteTitle: n.noteTitle,
        color: n.color,
        type: n.type,
        text: n.text
      },
      {closeByClickingOutside: true}
    ).subscribe((result) => {
      //We get dialog result
      if (result && result instanceof Note) {
        let positionFrom = result.id - 1;
        let positionTo = result.id;
        this.note.splice(positionFrom, positionTo, result);
        this._cs.editNote(positionFrom, positionTo, result);
        console.log(this._cs.notes);
      }
    });
  }

}

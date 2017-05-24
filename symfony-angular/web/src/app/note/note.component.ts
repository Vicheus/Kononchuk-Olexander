import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {Note} from "../shared/models/note";
import {CalendarService} from "../_services/calendar.service";
import {NoteEditorComponent} from "../note-editor/note-editor.component";
import {DialogService} from "ng2-bootstrap-modal";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']
})
export class NoteComponent implements OnInit, OnChanges {

  @Input() day: Date;

  note: Note[];
  subscription: Subscription;

  today = new Date();

  constructor(public _cs: CalendarService,
              public dialogService: DialogService) {
  }

  ngOnInit() {
    this.subscription = this._cs.noteItem$.subscribe(data => {
      this.note = data
    });
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onNoteCreated(event) {
    this._cs.addNewNote(event);
  }

  createNote() {
    this.dialogService.addDialog(NoteEditorComponent,
      {
        date: this.day
      },
      {closeByClickingOutside: true}
    ).subscribe((result) => {
      //We get dialog result
      if (result && result instanceof Note) {
        result.id = this.note[this.note.length - 1].id + 1;
        this.note.push(result);
        this._cs.addNewNote(result);
      }
      console.log(result);
    });
  }

  editNote(n, event) {
    console.log(n);
    event.stopPropagation();
    this.dialogService.addDialog(NoteEditorComponent,
      {
        id: n.id,
        date: n.currentDate,
        note_title: n.note_title,
        color: n.color,
        type: n.type,
        text: n.text,
        deletedAt: true
      },
      {closeByClickingOutside: true}
    ).subscribe((result) => {
      //We get dialog result
      if (result && result instanceof Note && !result.deletedAt) {
        let positionFrom = result.id - 1;
        let positionTo = result.id;
        this.note.splice(positionFrom, positionTo, result);
        this._cs.editNote(positionFrom, positionTo, result);
        console.log(this._cs.notes);
      } else if (result && result instanceof Note && result.deletedAt === true) {
        console.log('deleted');
        let positionFrom = result.id - 1;
        // let positionTo = result.id;
        this.note.splice(positionFrom, 1);
        this._cs.deleteNote(positionFrom, 1);
        console.log(this._cs.notes);
      }
    });
  }

}

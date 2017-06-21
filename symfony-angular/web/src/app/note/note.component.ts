import {Component, Input, OnInit} from "@angular/core";
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
export class NoteComponent implements OnInit {

  @Input() day: Date;

  note: Note[];
  subscription: Subscription;

  today = new Date();

  constructor(public _cs: CalendarService,
              public dialogService: DialogService) {
  }

  ngOnInit() {
    this.subscription = this._cs.noteItem$.subscribe(data => {
      if (data) {
        data.map( (val) => { val.date = new Date(val.date) } );
      };
      this.note = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  createNote() {
    this.dialogService.addDialog(NoteEditorComponent,
      {
        date: this.day
      },
      {closeByClickingOutside: true}
    ).subscribe((result) => {
      if (result && result instanceof Note) {
        this._cs.noteItem$.subscribe(data => {
          data.push(result);
        });
        this._cs.addNewNote(result);
      }
    });
  }

  editNote(n, event) {
    event.stopPropagation();
    this.dialogService.addDialog(NoteEditorComponent,
      {
        id: n.id,
        noteTitle: n.noteTitle,
        date: n.date,
        color: n.color,
        type: n.type,
        text: n.text,
        deletedAt: false
      },
      {closeByClickingOutside: true}
    ).subscribe((result) => {
      if (result && result instanceof Note && !result.deletedAt) {
        this._cs.noteItem$.subscribe(data => {
          let positionFrom = null;
          data.forEach((item, index) => {if(item.hasOwnProperty('id') && item.id === result.id) {positionFrom = index}});
          data.splice(positionFrom, 1, result);
        });
        this._cs.editNote(result);
      } else if (result && result instanceof Note && result.deletedAt === true) {
        console.log('deleted');
        this._cs.noteItem$.subscribe(data => {
          let positionFrom = null;
          data.forEach((item, index) => {if(item.hasOwnProperty('id') && item.id === result.id) {positionFrom = index}});
          data.splice(positionFrom, 1);
        });
        this._cs.deleteNote(result);
      }
    });
  }

}

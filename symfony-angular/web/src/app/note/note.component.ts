import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Note} from '../shared/models/note';
import {CalendarService} from '../_services/calendar.service';
import {NoteEditorComponent} from '../note-editor/note-editor.component';
import {DialogService} from 'ngx-bootstrap-modal';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']
})
export class NoteComponent implements OnInit, OnDestroy {

  @Input() day: Date;

  notes: Note[];
  subscription: Subscription;

  today = new Date();

  constructor(public _cs: CalendarService,
              public dialogService: DialogService) {
  }

  ngOnInit() {
    this.subscription = this._cs.notesObservable.subscribe(
      (data) => {
        if (data) {
          this.notes = data;
        }
      },
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  createNote() {
    this.dialogService.addDialog(NoteEditorComponent,
      {date: this.day},
    ).subscribe(result => {
      if (result && result instanceof Note) {
        this._cs.notesObservable.subscribe(data => data.push(result));
        this._cs.addNewNote(result);
        this._cs.getNotes();
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
    ).subscribe((result) => {
      if (result && result instanceof Note && result.deletedAt === false) {
        this._cs.notesObservable.subscribe(data => {
          let positionFrom = null;
          data.forEach((item, index) => {
            if (item.hasOwnProperty('id') && item.id === result.id) {
              positionFrom = index;
            }
          });
          data.splice(positionFrom, 1, result);
        });
        this._cs.editNote(result);
      } else if (result && result instanceof Note && result.deletedAt === true) {
        console.log('deleted');
        this._cs.notesObservable.subscribe(data => {
          let positionFrom = null;
          data.forEach((item, index) => {
            if (item.hasOwnProperty('id') && item.id === result.id) {
              positionFrom = index;
            }
          });
          data.splice(positionFrom, 1);
        });
        this._cs.deleteNote(result);
      }
    });
  }

}

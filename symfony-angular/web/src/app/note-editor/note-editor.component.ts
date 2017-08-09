import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Note} from '../shared/models/note';
import {DialogComponent, DialogService} from 'ngx-bootstrap-modal';
import {NoteTypes} from '../shared/models/noteTypes';
import {NoteType} from '../shared/models/NoteType';

@Component({
  selector: 'app-note-editor',
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

  noteTypes: NoteType[];
  defaultColor = '#337ab7';
  newNote: Note = new Note();
  active = true;

  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  ngOnInit() {
    this.noteTypes = NoteTypes;

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

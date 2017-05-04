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

  promptMessage: string = '';

  @Input() day: Date;
  @Input() notes: Note[];

  note: Note[];

  today = new Date();

  // clicked = false;

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
      {titleMessage: 'Name dialog'},
      {autoCloseTimeout: 10000, closeByClickingOutside: true}
    ).subscribe((message) => {
      //We get dialog result
      this.promptMessage = message;
    });
  }

  // showPopup() {
  //   this.clicked = false;
  //   setTimeout(() => this.c = false, 2);
  //
  //   setTimeout(() => this.clicked = true, 0);
  // }

}

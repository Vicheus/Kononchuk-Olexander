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
        titleMessage: 'Enter the task please'
      },
      {closeByClickingOutside: true}
    ).subscribe((result) => {
      //We get dialog result
      if (result && result instanceof Note) {
        this.note.push(result);
        this._cs.addNewNote(result);
      }
      console.log(this._cs.notes);
    });
  }

  editNote(n, event) {
    event.stopPropagation();
    console.log(n);
  }

}

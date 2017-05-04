import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from "@angular/core";
import {CalendarService} from "../_services/calendar.service";
import {Note} from "../shared/models/note";
import {DialogComponent, DialogService} from "ng2-bootstrap-modal";

export interface FormModel {
  titleMessage: string;
  id: number;
  title: string;
  color: string;
  type: string;
  text: string;
  date: Date;
}

@Component({
  selector: 'note-editor',
  providers: [CalendarService],
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.sass']
})
export class NoteEditorComponent extends DialogComponent<FormModel, any> implements OnInit, OnChanges, FormModel {
  titleMessage: string;
  id: number;
  title: string;
  color: string;
  type: string;
  text: string;
  date: Date;

  @Output() noteCreated = new EventEmitter();
  // @Output() formClosed = new EventEmitter();
  // @Input() c: boolean;

  noteTypes;

  newNote: Note = new Note();

  active: boolean = true;

  // clicked = false;

  constructor(private _cs: CalendarService,
              dialogService: DialogService) {
    super(dialogService);
  }

  ngOnInit() {
    this.noteTypes = this._cs.getNoteTypes();
  }

  ngOnChanges(changes: SimpleChanges) {
    // this.clicked = changes.c.currentValue;
  }

  onSubmit() {
    this.noteCreated.emit({note: this.newNote});

    this.newNote = new Note();
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  // removeForm() {
  //   this.clicked = true;
  //
  //   this.formClosed.emit({formClosed: this.clicked});
  // }

  apply() {
    this.close();
  }

}

import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {Note} from "app/shared/models/note";

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

  constructor() {
  }

  ngOnInit() {
    this.note = this.notes;
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes.notes.currentValue);
    // this.note = changes.notes.currentValue;
  }

}

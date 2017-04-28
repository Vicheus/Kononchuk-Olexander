import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']
})
export class NoteComponent implements OnInit {

  @Input() day: Date;

  today = new Date();

  constructor() {
  }

  ngOnInit() {
  }

}

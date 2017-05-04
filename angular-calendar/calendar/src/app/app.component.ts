import {Component, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {CalendarService} from "app/_services/calendar.service";
import {Note} from "app/shared/models/note";

@Component({
  selector: 'calendar',
  providers: [CalendarService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnChanges {

  currentDate: Date;

  notes: Note[];

  setNewCurrentDate(y = null, m = null, d = null) {
    this.currentDate = new Date(y, m, d);
  }

  setDefaultCurrentDate() {
    this.currentDate = new Date();
  }

  nextMonthButton() {
    this.setNewCurrentDate(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
  }

  previousMonthButton() {
    this.setNewCurrentDate(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
  }

  todayButton() {
    this.setDefaultCurrentDate();
  }

  constructor(private _cs: CalendarService) {
  }

  ngOnInit() {
    this.setDefaultCurrentDate();
    this.notes = this._cs.getNotes();
  }

  ngOnChanges(changes: SimpleChanges) {

  }

}

import {Component, OnInit} from "@angular/core";
import {CalendarService} from "./_services/calendar.service";
import {Note} from "./shared/models/note";

@Component({
  selector: 'calendar',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  currentDate: Date;

  notes: Note[] = null;

  getApiNotes(data) {
    this._cs.changeNote(data);
  }

  getNewNotes() {
    let result;
    this._cs.getNewNotes()
      .subscribe(
        res => result = res,
        error => console.log("Error happened" + error),
        () => {
          this.getApiNotes(result);
        }
      );
  }

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
    this.getNewNotes();
  }

}

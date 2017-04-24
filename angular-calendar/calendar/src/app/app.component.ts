import {Component, OnInit} from "@angular/core";
import {CalendarService} from "app/_services/calendar.service";

@Component({
    selector: 'calendar',
    providers: [ CalendarService ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  currentDate: Date;

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

  constructor() {
  }

  ngOnInit() {
    this.setDefaultCurrentDate();
  }
}

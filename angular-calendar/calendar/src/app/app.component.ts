import { Component, OnInit } from "@angular/core";
import { CalendarService } from 'app/_services/calendar.service';

@Component({
    selector: 'calendar',
    providers: [ CalendarService ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  month;

  // nextMonthButton() {
  //   this.month.currentDate = this._cs.setNewCurrentDate(this.month.currentDate.getFullYear(), this.month.currentDate.getMonth() + 1, 1);
  //
  //   this.month.getDaysFromCurrentMonth();
  //   this.month.getDaysFromPreviousMonth();
  //   this.month.getDaysFromNextMonth();
  // }
  //
  // previousMonthButton() {
  //   this.month.currentDate = this._cs.setNewCurrentDate(this.month.currentDate.getFullYear(), this.month.currentDate.getMonth() - 1, 1);
  //
  //   this.month.getDaysFromCurrentMonth();
  //   this.month.getDaysFromPreviousMonth();
  //   this.month.getDaysFromNextMonth();
  // }
  //
  // todayButton() {
  //   this.month.currentDate = new Date();
  //
  //   this.month.getDaysFromCurrentMonth();
  //   this.month.getDaysFromPreviousMonth();
  //   this.month.getDaysFromNextMonth();
  // }

  constructor(
    private _cs: CalendarService
  ) {}

  ngOnInit() {
    this.month = this._cs.getMonth();
  }
}

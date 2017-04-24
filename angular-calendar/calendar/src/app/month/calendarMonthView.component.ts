import {Component, OnInit} from "@angular/core";
import { CalendarService } from 'app/_services/calendar.service';

@Component({
    selector: 'month-view',
    providers: [ CalendarService ],
    templateUrl: './calendarMonthView.component.html',
    styleUrls: ['./calendarMonthView.component.css']
})
export class MonthViewComponent implements OnInit {

  month;

  constructor(
    private _cs: CalendarService
  ) {}

  ngOnInit() {
    this.month = this._cs.getMonth();
    // this._cs.getDaysFromCurrentMonth();
    // this._cs.getDaysFromPreviousMonth();
    // this._cs.getDaysFromNextMonth();
  }

}

import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {CalendarService} from "app/_services/calendar.service";
import {Month} from "app/shared/models/month";

@Component({
    selector: 'month-view',
  providers: [CalendarService, Month],
    templateUrl: './calendarMonthView.component.html',
  styleUrls: ['./calendarMonthView.component.sass']
})
export class MonthViewComponent implements OnInit, OnChanges {

  @Input() cD: Date;

  currentDate: Date;

  prevMonthDateArray: Date[];
  nextMonthDateArray: Date[];
  currMonthDateArray: Date[];

  constructor(private month: Month
  ) {}

  getDaysFromPreviousMonth() {
    let prevMonthDateArray: Date[] = [];

    let startDayCurrentMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1).getDay();
    let previousMonthCountDays = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 0).getDate();
    let diffDays;

    (startDayCurrentMonth === 1) ?
      diffDays = 0 :
      (startDayCurrentMonth === 0) ?
        diffDays = 1 :
        diffDays = 8 - startDayCurrentMonth;
    let startDayPreviousMonth = previousMonthCountDays - 6 + diffDays;

    for (let i = startDayPreviousMonth; i <= previousMonthCountDays; i++) {
      let day = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, i);
      prevMonthDateArray.push(day);
    }

    this.prevMonthDateArray = prevMonthDateArray;
  }

  getDaysFromNextMonth() {
    let nextMonthDateArray: Date[] = [];
    let endDayCurrentMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDay();
    let endDayNextMonth = 7 - endDayCurrentMonth;

    for (let i = 1; i <= endDayNextMonth; i++) {
      let day = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, i);
      nextMonthDateArray.push(day);
    }

    this.nextMonthDateArray = nextMonthDateArray;
  }

  getDaysFromCurrentMonth() {
    let currMonthDateArray: Date[] = [];
    let daysCount = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
    for (let i = 1; i <= daysCount; i++) {
      let day = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), i);
      currMonthDateArray.push(day);
    }

    this.currMonthDateArray = currMonthDateArray;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.currentDate = changes.cD.currentValue;
    this.getDaysFromCurrentMonth();
    this.getDaysFromPreviousMonth();
    this.getDaysFromNextMonth();
  }

}

import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Month} from '../shared/models/month';

@Component({
  selector: 'app-month-view',
  providers: [Month],
  templateUrl: './calendarMonthView.component.html',
  styleUrls: ['./calendarMonthView.component.sass']
})
export class MonthViewComponent implements OnInit, OnChanges {

  @Input() cD: Date;

  currentDate: Date;
  prevMonthDateArray: Date[];
  nextMonthDateArray: Date[];
  currMonthDateArray: Date[];

  constructor(private month: Month) {}


  getDaysFromPreviousMonth() {
    const prevMonthDateArray: Date[] = [];

    const startDayCurrentMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1).getDay();
    const previousMonthCountDays = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 0).getDate();
    let diffDays;

    (startDayCurrentMonth === 1) ?
      diffDays = 0 :
      (startDayCurrentMonth === 0) ?
        diffDays = 1 :
        diffDays = 8 - startDayCurrentMonth;
    const startDayPreviousMonth = previousMonthCountDays - 6 + diffDays;

    for (let i = startDayPreviousMonth; i <= previousMonthCountDays; i++) {
      const day = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth() - 1,
        i,
        this.currentDate.getHours(),
        this.currentDate.getMinutes(),
        this.currentDate.getSeconds()
      );
      prevMonthDateArray.push(day);
    }

    this.prevMonthDateArray = prevMonthDateArray;
  }

  getDaysFromNextMonth() {
    const nextMonthDateArray: Date[] = [];
    const endDayCurrentMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDay();
    const endDayNextMonth = 7 - endDayCurrentMonth;

    for (let i = 1; i <= endDayNextMonth; i++) {
      const day = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth() + 1,
        i,
        this.currentDate.getHours(),
        this.currentDate.getMinutes(),
        this.currentDate.getSeconds()
      );
      nextMonthDateArray.push(day);
    }

    this.nextMonthDateArray = nextMonthDateArray;
  }

  getDaysFromCurrentMonth() {
    const currMonthDateArray: Date[] = [];
    const daysCount = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
    for (let i = 1; i <= daysCount; i++) {
      const day = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth(),
        i,
        this.currentDate.getHours(),
        this.currentDate.getMinutes(),
        this.currentDate.getSeconds()
      );
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

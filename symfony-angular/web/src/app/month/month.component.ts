import {Component, Input, OnChanges, OnInit, SimpleChanges, Output, EventEmitter} from '@angular/core';
import {Month} from '../shared/models/DateHelper';
import {Subscription} from 'rxjs/Subscription';
import {CalendarService} from '../_services/calendar.service';
import {Note} from '../shared/models/note';

@Component({
  selector: 'app-month-view',
  providers: [Month],
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.sass']
})
export class MonthViewComponent implements OnInit, OnChanges {

  @Input() set cD(value: Date) {
      // console.log(value);
      this.currentDate = value;
      this.getDaysFromCurrentMonth();
      this.getDaysFromPreviousMonth();
      this.getDaysFromNextMonth();
  };
  @Output() currentDateChanged = new EventEmitter();

  get cD() {
      return this.currentDate;
  }

  currentDate: Date;
  prevMonthDateArray: Date[];
  nextMonthDateArray: Date[];
  currMonthDateArray: Date[];
  subscription: Subscription;
  notes: Note[];

  constructor(private month: Month, private _cs: CalendarService) {}


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
        this.currentDate.getSeconds(),
      );
      currMonthDateArray.push(day);
    }

    this.currMonthDateArray = currMonthDateArray;
  }

  getNotesForDate(date) {
      if (!this.notes || this.notes.length === 0) {
          return;
      }
      return this.notes.filter(note => note.date.toDateString() === date.toDateString());
  }

    onCurrentDateChange($event: Date) {
        this.currentDateChanged.emit($event);
    }

  ngOnInit() {
      this.subscription = this._cs.notesObservable.subscribe(
          (data) => {
              if (data) {
                  this.notes = data;
              }
          },
      );
  }

    ngOnChanges(changes: SimpleChanges) {
    }

}

import { Injectable } from '@angular/core';
import { Month } from '../shared/models/month';

@Injectable()
export class CalendarService {

  constructor(
    // private _month: Month
  ) { }

  getMonth() {
    return Month;
  }

  // setNewCurrentDate(year, month, date){
  //   this._month.currentDate = new Date(year, month, date);
  // }
  //
  // getDaysFromPreviousMonth() {
  //   let prevMonthDateArray: Date[] = [];
  //
  //   let startDayCurrentMonth = new Date(this._month.currentDate.getFullYear(), this._month.currentDate.getMonth(), 1).getDay();
  //   let previousMonthCountDays = new Date(this._month.currentDate.getFullYear(), this._month.currentDate.getMonth(), 0).getDate();
  //   let diffDays;
  //
  //   (startDayCurrentMonth === 1) ?
  //     diffDays = 0 :
  //     (startDayCurrentMonth === 0) ?
  //       diffDays = 1 :
  //       diffDays = 8 - startDayCurrentMonth;
  //   let startDayPreviousMonth = previousMonthCountDays - 6 + diffDays;
  //
  //   for (let i = startDayPreviousMonth; i <= previousMonthCountDays; i++) {
  //     let day = new Date(this._month.currentDate.getFullYear(), this._month.currentDate.getMonth() - 1, i);
  //     prevMonthDateArray.push(day);
  //   }
  //
  //   this._month.prevMonthDateArray = prevMonthDateArray;
  // }
  //
  // getDaysFromNextMonth() {
  //   let nextMonthDateArray: Date[] = [];
  //   let endDayCurrentMonth = new Date(this._month.currentDate.getFullYear(), this._month.currentDate.getMonth() + 1, 0).getDay();
  //   let endDayNextMonth = 7 - endDayCurrentMonth;
  //
  //   for (let i = 1; i <= endDayNextMonth; i++) {
  //     let day = new Date(this._month.currentDate.getFullYear(), this._month.currentDate.getMonth() + 1, i);
  //     nextMonthDateArray.push(day);
  //   }
  //
  //   this._month.nextMonthDateArray = nextMonthDateArray;
  // }
  //
  // getDaysFromCurrentMonth() {
  //   let currMonthDateArray: Date[] = [];
  //   let daysCount = new Date(this._month.currentDate.getFullYear(), this._month.currentDate.getMonth() + 1, 0).getDate();
  //   for (let i = 1; i <= daysCount; i++) {
  //     let day = new Date(this._month.currentDate.getFullYear(), this._month.currentDate.getMonth(), i);
  //     currMonthDateArray.push(day);
  //   }
  //
  //   this._month.currMonthDateArray = currMonthDateArray;
  // }

}

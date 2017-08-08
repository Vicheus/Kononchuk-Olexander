import {Component, OnInit, OnChanges, SimpleChanges, Input, DoCheck} from '@angular/core';
import {Month} from '../shared/models/month';

@Component({
  selector: 'app-week-view',
  template: `
      <section class="section_dates container">
          <div class="row">

              <div class="daysOfWeek">
                  <div class="dayHead" *ngFor="let day of month.daysOfWeek">
                      {{ day }}
                  </div>
              </div>

              <div class="cellDateContainer">
                  <app-note *ngFor="let day of weekDays"
                            [day]="day" class="dayCell">
                  </app-note>
              </div>

          </div>

      </section>
      <br><br><br>`,
  styleUrls: ['../month/calendarMonthView.component.sass'],
  providers: [Month],
})
export class WeekViewComponent implements OnInit, OnChanges, DoCheck {

  private _currentDate: Date;
  private _year: number;
  private _month: number;
  private _date: number;
  private _day: number;
  private startDate: Date;
  private weekDays = [];

  @Input() set cD(value: Date) {
    this._currentDate = value;
    this._year = value.getFullYear();
    this._month = value.getMonth();
    this._date = value.getDate();
    this._day = value.getDay();
    this.startDate = new Date(this._year, this._month, this._date - this._day + 1);
    let i = 0;
    while ( i < 7) {
      const day = new Date();
      day.setDate(this.startDate.getDate() + i);
      this.weekDays.push(day);
      i++;
    }
    console.log(this.weekDays);
  }

  get cD(): Date {
    return this._currentDate;
  }

  constructor(private month: Month) {}

  ngOnChanges(changes: SimpleChanges) {
  }

  ngDoCheck() {
  }

  ngOnInit() {
  }

}

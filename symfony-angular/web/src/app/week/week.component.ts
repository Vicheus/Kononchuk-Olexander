import {Component, OnInit, OnChanges, SimpleChanges, Input, DoCheck, Output, EventEmitter} from '@angular/core';
import {Month} from '../shared/models/DateHelper';
import {Note} from '../shared/models/note';
import {CalendarService} from '../_services/calendar.service';
import {Subscription} from 'rxjs/Subscription';

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
                            [cD]="cD"
                            [notes]="getNotesForDate(day)"
                            [day]="day" class="dayCell" (currentDateChanged)="onCurrentDateChange($event)">
                  </app-note>
              </div>

          </div>
          
          <div class="row">
              <app-day-view [cD]="_currentDate">
              </app-day-view>
          </div>

      </section>`,
  styleUrls: ['../month/month.component.sass'],
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
    private subscription: Subscription;
    public notes: Note[];

    @Input() set cD(value: Date) {
        this.weekDays = [];
        this._currentDate = value;
        this._year = value.getFullYear();
        this._month = value.getMonth();
        this._date = value.getDate();
        this._day = value.getDay();
        this.startDate = this.month.getStartOfWeek(this._year, this._month, this._date, this._day);
        let i = 0;
        while (i < 7) {
            const day = new Date(this.startDate);
            day.setDate(this.startDate.getDate() + i);
            this.weekDays.push(day);
            i++;
        }
    };
    @Output() currentDateChanged = new EventEmitter();

    get cD(): Date {
        return this._currentDate;
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

    constructor(private month: Month, private _cs: CalendarService) {}

    ngOnChanges(changes: SimpleChanges) {
    }

    ngDoCheck() {
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

}

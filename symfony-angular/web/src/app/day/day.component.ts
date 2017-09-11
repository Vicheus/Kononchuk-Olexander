import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Month} from '../shared/models/DateHelper';
import {Note} from '../shared/models/note';
import {CalendarService} from "../_services/calendar.service";
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-day-view',
  template: `
      <section class="section_dates container">
          <div class="row">

              <div class="header">
                  {{ _currentDate | date:'fullDate' }}
              </div>

              <div class="cellContainer">
                  <div class="note" [style.background-color]="note.color" *ngFor="let note of getNotesForDate(_currentDate)">
                      <div class="controls-container">
                          <img class="edit-item" src="./web/src/assets/img/edit.svg" alt="edit">
                          <input class="check-item" type="checkbox">
                          <div class="remove-item"></div>
                      </div>
                      <div class="text-center">
                          {{note.noteTitle}}
                      </div>
                      <div class="note_description">
                          <span>Todo: </span>{{note.text}}
                      </div>
                  </div>
              </div>

          </div>
      </section>`,
  styleUrls: ['./day.component.sass'],
  providers: [Month, Note],
})
export class DayViewComponent implements OnInit, OnDestroy {

    private _currentDate: Date;
    private _year: number;
    private _month: number;
    private _date: number;
    private _day: number;
    private notes: Note[] = [];
    private subscription: Subscription;


    @Input() set cD(value: Date) {
        this._currentDate = value;
        this._year = value.getFullYear();
        this._month = value.getMonth();
        this._date = value.getDate();
        this._day = value.getDay();
        // this.subscription = this._cs.getNotesByDate(this._currentDate).subscribe(notes => this.notes = notes);
    }

    get cD(): Date {
        return this._currentDate;
    }

    get titles(): String[] {
        return this.notes.length !== 0 ? Object.keys(this.notes[0]) : [''];
    }

    constructor(private _cs: CalendarService) {}

    getNotesForDate(date) {
        if (!this.notes || this.notes.length === 0) {
            return;
        }
        return this.notes.filter(note => note.date.toDateString() === date.toDateString());
    }

    noteItemDone(event) {
        console.log(event);
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

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}

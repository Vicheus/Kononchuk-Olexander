import {Component, OnInit, OnChanges, SimpleChanges, Input, DoCheck, OnDestroy} from '@angular/core';
import {Month} from '../shared/models/month';
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
                  <!--<table>-->
                      <!--<thead>-->
                        <!--<th *ngFor="let title of titles">{{title}}</th>-->
                      <!--</thead>-->
                      <!--<tbody>-->
                      <!--<tr *ngFor="let note of notes; trackById">-->
                          <!--<td *ngFor="let key of titles">-->
                              <!--{{ note[key] }}-->
                          <!--</td>-->
                      <!--</tr>-->
                      <!--</tbody>-->
                  <!--</table>-->
                  <div class="note" [style.background-color]="note.color" *ngFor="let note of notes">
                      <div class="controls-container">
                          <img class="edit-item" src="../../assets/img/edit.png" alt="edit">
                          <div class="remove-item"></div>
                          <input class="check-item" type="checkbox">
                      </div>
                      <div *ngFor="let key of titles">
                          <div *ngIf="isDate(note[key]); then dateTemplate else normalTemplate"></div>
                          <ng-template #dateTemplate>{{key}}: {{note[key] | date:'short'}}</ng-template>
                          <ng-template #normalTemplate>{{key}}: {{note[key]}}</ng-template>
                      </div>
                  </div>
                  <div class="addNew">
                      <div class="add"></div>
                  </div>
              </div>

          </div>

      </section>
      <br><br><br>`,
  styleUrls: ['./dayView.component.sass'],
  providers: [Month, Note],
})
export class DayViewComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

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
  }

  get cD(): Date {
    return this._currentDate;
  }

  get titles(): String[] {
    return this.notes.length !== 0 ? Object.keys(this.notes[0]) : [''];
  }

  isDate(value) {
    return value instanceof Date;
  }

  constructor(private _cs: CalendarService) {}

  ngOnChanges(changes: SimpleChanges) {
  }

  ngDoCheck() {
  }

  ngOnInit() {
    this.subscription = this._cs.getNotesByDate(this._currentDate).subscribe(notes => this.notes = notes);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

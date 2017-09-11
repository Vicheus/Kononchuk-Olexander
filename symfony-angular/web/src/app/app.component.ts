import {Component, OnInit} from '@angular/core';
import {CalendarService} from './_services/calendar.service';
import {Note} from './shared/models/note';

@Component({
  selector: 'app-calendar',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {

    currentDate: Date;
    notes: Note[] = [];
    private currentView = 'month';

    constructor(private _cs: CalendarService) {}

    setNotesObservable(data) {
        this._cs.changeNotesSource(data);
    }

    getNewNotes() {
        let result;
        this._cs.getNotes()
          .subscribe(
            (res) => { result = res; },
            error => console.log('Error happened' + error),
            () => { this.setNotesObservable(result); }
          );
    }

    setNewCurrentDate(y = null, m = null, d = null) {
        this.currentDate = new Date(y, m, d);
    }

    setDefaultCurrentDate() {
        this.currentDate = new Date();
    }

    nextButton() {
        if (this.currentView === 'month') {
            this.setNewCurrentDate(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
        } else if (this.currentView === 'week') {
            this.currentDate = new Date(this.currentDate.setDate(this.currentDate.getDate() + 7));
        } else if (this.currentView === 'day') {
            this.currentDate = new Date(this.currentDate.setDate(this.currentDate.getDate() + 1));
        }
    }

    previousButton() {
        if (this.currentView === 'month') {
            this.setNewCurrentDate(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
        } else if (this.currentView === 'week') {
            this.currentDate = new Date(this.currentDate.setDate(this.currentDate.getDate() - 7));
        } else if (this.currentView === 'day') {
            this.currentDate = new Date(this.currentDate.setDate(this.currentDate.getDate() - 1));
        }
    }

    todayButton() {
        this.setDefaultCurrentDate();
    }

    changeView(event) {
        window.localStorage.currentView = event.target.value.toLowerCase();
        this.currentView = event.target.value.toLowerCase();
    }

    onCurrentDateChange($event: Date) {
        this.currentDate = $event;
    }

    ngOnInit() {
        this.setDefaultCurrentDate();
        this.getNewNotes();
        this.currentView = window.localStorage.currentView;
    }

}

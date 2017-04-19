import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'month-view',
    templateUrl: './calendarMonthView.component.html',
    styleUrls: ['./calendarMonthView.component.css']
})
export class MonthViewComponent implements OnInit {

    currentDate: Date = new Date();

    dayOfWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    dateArray: Date[] = [];

    previousMonthDateArray: Date[] = [];

    getDaysFromPreviousMonth() {
        let startDayCurrentMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1).getDay();
        let previousMonthCountDays = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 0).getDate();
        let diffDays = startDayCurrentMonth - 1;
        let startDayPreviousMonth = previousMonthCountDays - 6 + diffDays;

        for (let i = startDayPreviousMonth; i <= previousMonthCountDays; i++) {
            let day = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, i);
            this.previousMonthDateArray.push(day);
        }

        return previousMonthCountDays;
    }

    getDateArray(): void {
        let daysCount = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
        for (let i = 1; i <= daysCount; i++) {
            let day = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), i);
            this.dateArray.push(day);
        }
    }

    constructor() {
    }

    ngOnInit() {
        this.getDateArray();
        this.getDaysFromPreviousMonth();
    }

}

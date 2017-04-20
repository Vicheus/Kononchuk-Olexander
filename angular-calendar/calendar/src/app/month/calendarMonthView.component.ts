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

    nextMonthDateArray: Date[] = [];

    temp;

    getDaysFromPreviousMonth() {
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
            this.previousMonthDateArray.push(day);
        }
    }

    getDaysFromNextMonth() {
        let endDayCurrentMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDay();
        let endDayNextMonth = 7 - endDayCurrentMonth;

        for (let i = 1; i <= endDayNextMonth; i++) {
            let day = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, i);
            this.nextMonthDateArray.push(day);
        }
    }

    getDateArray(): void {
        let daysCount = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
        for (let i = 1; i <= daysCount; i++) {
            let day = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), i);
            this.dateArray.push(day);
        }
    }

    nextMonthButton() {
        this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);

        this.dateArray = [];
        this.previousMonthDateArray = [];
        this.nextMonthDateArray = [];

        this.getDateArray();
        this.getDaysFromPreviousMonth();
        this.getDaysFromNextMonth();
    }

    previousMonthButton() {
        this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);

        this.dateArray = [];
        this.previousMonthDateArray = [];
        this.nextMonthDateArray = [];

        this.getDateArray();
        this.getDaysFromPreviousMonth();
        this.getDaysFromNextMonth();
    }

    todayButton() {
        this.currentDate = new Date();

        this.dateArray = [];
        this.previousMonthDateArray = [];
        this.nextMonthDateArray = [];

        this.getDateArray();
        this.getDaysFromPreviousMonth();
        this.getDaysFromNextMonth();
    }

    constructor() {
    }

    ngOnInit() {
        this.getDateArray();
        this.getDaysFromPreviousMonth();
        this.getDaysFromNextMonth();
    }

}

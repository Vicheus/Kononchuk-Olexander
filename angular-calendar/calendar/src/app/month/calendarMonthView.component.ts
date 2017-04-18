import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'month-view',
    templateUrl: './calendarMonthView.component.html',
    styleUrls: ['./calendarMonthView.component.css']
})
export class MonthViewComponent implements OnInit {

    date: Date = new Date();

    dayOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    dateArray: Date[] = [];

    firstDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1);

    getDateArray(): void {
        let daysCount = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
        for (let i = 1; i <= daysCount; i++) {
            let day = new Date(this.date.getFullYear(), this.date.getMonth(), i);
            this.dateArray.push(day);
        }
    }

    constructor() {
    }

    ngOnInit() {
        this.getDateArray();
    }

}

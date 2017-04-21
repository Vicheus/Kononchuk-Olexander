/**
 * Created by shura on 21.04.17.
 */
export class CalendarDate {
    currentDate: Date;
    daysOfWeek: string[];


    constructor() {
        this.currentDate = new Date();
        this.daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    }
}
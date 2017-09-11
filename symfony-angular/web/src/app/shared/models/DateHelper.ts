export class Month {
    daysOfWeek: string[] = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ];
    weekendDays: number[] = [0, 6];

    getStartOfWeek = (year: number, month: number, day: number, dayNumber: number) => {
        return dayNumber === 0
            ? new Date(year, month, day - 6)
            : new Date(year, month, day - dayNumber + 1);
    };
}

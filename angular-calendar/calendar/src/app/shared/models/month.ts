/**
 * Created by shura on 21.04.17.
 */
export class Month {
  currentDate: Date = new Date();
  daysOfWeek: string[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];
  prevMonthDateArray: Date[] = [];
  nextMonthDateArray: Date[] = [];
  currMonthDateArray: Date[] = [];

  constructor() {}

}

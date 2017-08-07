import {Component, OnInit, OnChanges, SimpleChanges, Input} from '@angular/core';
import {Month} from '../shared/models/month';

@Component({
  selector: 'app-week-view',
  templateUrl: './weekView.component.html',
  styleUrls: ['./weekView.component.sass'],
  providers: [Month],
})
export class WeekViewComponent implements OnInit, OnChanges {

  @Input() cD: Date;

  constructor(private month: Month) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.cD);
  }

  ngOnInit() {
  }

}

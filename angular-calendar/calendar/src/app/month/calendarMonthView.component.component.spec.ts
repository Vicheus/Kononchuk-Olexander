import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {MonthViewComponent} from "./calendarMonthView.component";

describe('MonthViewComponent', () => {
    let component: MonthViewComponent;
    let fixture: ComponentFixture<MonthViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MonthViewComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MonthViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

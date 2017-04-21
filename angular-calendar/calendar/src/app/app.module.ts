import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AlertModule} from "ng2-bootstrap";

import {AppComponent} from "./app.component";
import {MonthViewComponent} from "./month/calendarMonthView.component";
import {CalendarDate} from "./shared/models/calendarDate";

@NgModule({
    declarations: [
        AppComponent,
        MonthViewComponent,
        CalendarDate
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AlertModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

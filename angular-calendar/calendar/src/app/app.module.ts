import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AlertModule} from "ng2-bootstrap";

import {AppComponent} from "./app.component";
import {MonthViewComponent} from "./month/calendarMonthView.component";
import {WeekViewComponent} from "./week/weekView.component";

@NgModule({
  declarations: [
    AppComponent,
    MonthViewComponent,
    WeekViewComponent
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

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AlertModule} from 'ngx-bootstrap';
import {DateTimePickerModule} from 'ng-pick-datetime';
import {ColorPickerModule} from 'ngx-color-picker';
import {BootstrapModalModule} from 'ngx-bootstrap-modal';
import {CalendarService} from './_services/calendar.service';

import {AppComponent} from './app.component';
import {MonthViewComponent} from './month/month.component';
import {WeekViewComponent} from './week/week.component';
import {DayViewComponent} from './day/day.component';
import {NoteComponent} from './note/note.component';
import {NoteEditorComponent} from './note-editor/note-editor.component';
import {AddNoteComponent} from './add-note/add-note.component';

@NgModule({
    declarations: [
        NoteEditorComponent,
        AppComponent,
        MonthViewComponent,
        WeekViewComponent,
        DayViewComponent,
        NoteComponent,
        AddNoteComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        DateTimePickerModule,
        ColorPickerModule,
        BootstrapModalModule,
        AlertModule.forRoot()
    ],
    entryComponents: [
        NoteEditorComponent
    ],
    providers: [CalendarService],
    bootstrap: [AppComponent],
})

export class AppModule {
}

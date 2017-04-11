/**
 * Created by shura on 10.04.17.
 */
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {UserComponent} from "./users/user.component";
import {UserProfileComponent} from "./users/user.profile.component";
import {UserFormComponent} from "./users/user-form.component";
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {appRouting} from "./app.routing";
import {NotFoundComponent} from "./not_found/not_found.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        appRouting
    ],
    declarations: [
        AppComponent,
        UserComponent,
        UserProfileComponent,
        UserFormComponent,
        AboutComponent,
        HomeComponent,
        ContactComponent,
        NotFoundComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
/**
 * Created by shura on 11.04.17.
 */
import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {NotFoundComponent} from "./not_found/not_found.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', component: NotFoundComponent}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
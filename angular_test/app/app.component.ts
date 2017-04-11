/**
 * Created by shura on 10.04.17.
 */
import {Component} from "@angular/core";

@Component({
    selector: 'app',
    templateUrl: `./app/app.component.html`,
    styles: [`
        .active {
            color: #000;
        }
    `]
})
export class AppComponent {
    message: string = 'This is the sample message';
}
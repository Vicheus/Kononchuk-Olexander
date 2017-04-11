/**
 * Created by shura on 11.04.17.
 */
import {Component} from "@angular/core";
import {User} from "../shared/models/user";

@Component({
    selector: 'user-app',
    templateUrl: `app/users/user.component.html`,
    styleUrls: [`app/users/user.component.css`]
})
export class UserComponent {
    message: string = 'Hello!';
    users: User[] = [
        {id: 25, name: 'Chris', username: 'sevilayha'},
        {id: 26, name: 'Nick', username: 'nicky'},
        {id: 27, name: 'Holly', username: 'good-holly'}
    ];
    activeUser: User;

    selectUser(user) {
        this.activeUser = user;
        console.log(this.activeUser);
    }

    onUserCreated(event) {
        this.users.push(event.user);
    }
}
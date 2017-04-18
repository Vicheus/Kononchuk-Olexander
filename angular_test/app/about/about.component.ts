/**
 * Created by shura on 11.04.17.
 */
import {Component} from "@angular/core";

export class User {
    id: number;
    name: string;
    username: string;
    avatar: string;
}

const users: User[] = [
    {
        id: 1,
        name: 'Chris',
        username: 'sevilayha',
        avatar: 'https://pbs.twimg.com/profile_images/422816823302561793/Hg3LD8K7_400x400.jpeg'
    },
    {
        id: 2,
        name: 'Nick',
        username: 'whatnicktweets',
        avatar: 'https://pbs.twimg.com/profile_images/502500686588690432/wXBzuCBj_400x400.jpeg'
    },
    {
        id: 3,
        name: 'Holly',
        username: 'hollylawly',
        avatar: 'https://pbs.twimg.com/profile_images/721918869821005824/2qT_RY5M_400x400.jpg'
    }
];

@Component({
    selector: 'about-page',
    styles: [`
    `],
    template: `
        i am the about page
    `
})

export class AboutComponent {
}
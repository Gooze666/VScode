import {Component} from 'angular2/core'
import {AuthorService} from './author.service'

@Component({
    selector: 'authors',
    template: `
    <h1>Authors</h1>
    {{title}}
    <ul>
        <li *ngFor="#author of authors">
        {{ author }}
        </li>
    </ul>
    `,
    providers: [AuthorService]
})

export class AuthorComponent{
    title = "Famous authors";
    authors: string[];

    constructor(authorService: AuthorService){
        this.authors = authorService.getAuthors();
    }
}
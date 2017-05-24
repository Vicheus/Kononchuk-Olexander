import {Injectable} from "@angular/core";
import {Note} from "../shared/models/note";
import {NoteTypes} from "../shared/models/noteTypes";
import {Http, Response} from "@angular/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Rx";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class CalendarService {

  private _notesSource = new BehaviorSubject<Note[]>(null);

  private baseUrl: string = environment.production ? 'http://localhost:8000' : 'http://localhost:8000/app_dev.php';
  private notesUrl: string = '/notes';

  constructor(private http: Http) {
  }

  notes: Note[] = [
    {
      id: 1,
      note_title: 'string',
      color: '#e920e9',
      type: 'Home',
      text: 'string',
      date: new Date(),
      deletedAt: false
    },
    {
      id: 2,
      note_title: 'string',
      color: '#fff500',
      type: 'Home',
      text: 'string',
      date: new Date(),
      deletedAt: false
    },
    {
      id: 3,
      note_title: 'string',
      color: '#2889e9',
      type: 'Home',
      text: 'string',
      date: new Date(),
      deletedAt: false
    },
    {
      id: 4,
      note_title: 'string',
      color: '#e920e9',
      type: 'Home',
      text: 'string',
      date: new Date(),
      deletedAt: false
    },
    {
      id: 5,
      note_title: 'string',
      color: '#2889e9',
      type: 'Home',
      text: 'string',
      date: new Date(),
      deletedAt: false
    },
    {
      id: 6,
      note_title: 'string',
      color: '#2889e9',
      type: 'Home',
      text: 'string',
      date: new Date(),
      deletedAt: false
    }
  ];

  changeNote(data) {
    this._notesSource.next(data);
  }

  noteItem$ = this._notesSource.asObservable();

  getNoteTypes() {
    return NoteTypes;
  }

  protected handleError(error: any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getNewNotes() {

    return this.http.get(this.baseUrl + this.notesUrl)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  addNewNote(note) {
    this.notes.push(note);
  }

  editNote(posFrom, posTo, note) {
    this.notes.splice(posFrom, posTo, note);
  }

  deleteNote(posFrom, count) {
    this.notes.splice(posFrom, count);
  }

}

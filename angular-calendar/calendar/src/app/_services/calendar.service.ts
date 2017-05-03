import {Injectable} from "@angular/core";
import {NoteTypes} from "../shared/models/noteTypes";
import {Note} from "../shared/models/note";

@Injectable()
export class CalendarService {

  notes: Note[] = [
    {
      id: 1,
      title: 'string',
      color: 'string',
      type: 'string',
      text: 'string',
      date: new Date()
    }
  ];

  getNoteTypes() {
    return NoteTypes;
  }

  getNotes() {
    return this.notes;
  }

  addNewNote(note) {
    this.notes.push(note);
  }

  constructor() {
  }

}

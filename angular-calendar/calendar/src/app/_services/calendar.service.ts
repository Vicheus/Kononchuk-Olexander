import {Injectable} from "@angular/core";
import {NoteTypes} from "../shared/models/noteTypes";
import {Note} from "../shared/models/note";

@Injectable()
export class CalendarService {

  notes: Note[] = [
    {
      titleMessage: '',
      id: 1,
      noteTitle: 'string',
      color: 'red',
      type: 'string',
      text: 'string',
      date: new Date()
    },
    {
      titleMessage: '',
      id: 1,
      noteTitle: 'string',
      color: 'blue',
      type: 'string',
      text: 'string',
      date: new Date()
    },
    {
      titleMessage: '',
      id: 1,
      noteTitle: 'string',
      color: 'blue',
      type: 'string',
      text: 'string',
      date: new Date()
    },
    {
      titleMessage: '',
      id: 1,
      noteTitle: 'string',
      color: 'blue',
      type: 'string',
      text: 'string',
      date: new Date()
    },
    {
      titleMessage: '',
      id: 1,
      noteTitle: 'string',
      color: 'blue',
      type: 'string',
      text: 'string',
      date: new Date()
    },
    {
      titleMessage: '',
      id: 1,
      noteTitle: 'string',
      color: 'blue',
      type: 'string',
      text: 'string',
      date: new Date()
    },
    {
      titleMessage: '',
      id: 1,
      noteTitle: 'string',
      color: 'blue',
      type: 'string',
      text: 'string',
      date: new Date()
    },
    {
      titleMessage: '',
      id: 1,
      noteTitle: 'string',
      color: 'blue',
      type: 'string',
      text: 'string',
      date: new Date()
    },
    {
      titleMessage: '',
      id: 1,
      noteTitle: 'string',
      color: 'blue',
      type: 'string',
      text: 'string',
      date: new Date()
    },
    {
      titleMessage: '',
      id: 1,
      noteTitle: 'string',
      color: 'blue',
      type: 'string',
      text: 'string',
      date: new Date()
    },
    {
      titleMessage: '',
      id: 1,
      noteTitle: 'string',
      color: 'blue',
      type: 'string',
      text: 'string',
      date: new Date()
    },
    {
      titleMessage: '',
      id: 1,
      noteTitle: 'string',
      color: 'blue',
      type: 'string',
      text: 'string',
      date: new Date()
    },
    {
      titleMessage: '',
      id: 1,
      noteTitle: 'string',
      color: 'blue',
      type: 'string',
      text: 'string',
      date: new Date()
    },
    {
      titleMessage: '',
      id: 1,
      noteTitle: 'string',
      color: 'blue',
      type: 'string',
      text: 'string',
      date: new Date()
    },
    {
      titleMessage: '',
      id: 1,
      noteTitle: 'string',
      color: 'blue',
      type: 'string',
      text: 'string',
      date: new Date()
    },
    {
      titleMessage: '',
      id: 1,
      noteTitle: 'string',
      color: 'blue',
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

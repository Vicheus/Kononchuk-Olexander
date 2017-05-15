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
      color: '#e920e9',
      type: 'Home',
      text: 'string',
      currentDate: new Date(),
      deleteNote: false
    },
    {
      titleMessage: '',
      id: 2,
      noteTitle: 'string',
      color: '#fff500',
      type: 'Home',
      text: 'string',
      currentDate: new Date(),
      deleteNote: false
    },
    {
      titleMessage: '',
      id: 3,
      noteTitle: 'string',
      color: '#2889e9',
      type: 'Home',
      text: 'string',
      currentDate: new Date(),
      deleteNote: false
    },
    {
      titleMessage: '',
      id: 4,
      noteTitle: 'string',
      color: '#e920e9',
      type: 'Home',
      text: 'string',
      currentDate: new Date(),
      deleteNote: false
    },
    {
      titleMessage: '',
      id: 5,
      noteTitle: 'string',
      color: '#2889e9',
      type: 'Home',
      text: 'string',
      currentDate: new Date(),
      deleteNote: false
    }
    // {
    //   titleMessage: '',
    //   id: 6,
    //   noteTitle: 'string',
    //   color: 'blue',
    //   type: 'string',
    //   text: 'string',
    //   currentDate: new Date()
    // },
    // {
    //   titleMessage: '',
    //   id: 7,
    //   noteTitle: 'string',
    //   color: 'blue',
    //   type: 'string',
    //   text: 'string',
    //   currentDate: new Date()
    // },
    // {
    //   titleMessage: '',
    //   id: 8,
    //   noteTitle: 'string',
    //   color: 'blue',
    //   type: 'string',
    //   text: 'string',
    //   currentDate: new Date()
    // },
    // {
    //   titleMessage: '',
    //   id: 9,
    //   noteTitle: 'string',
    //   color: 'blue',
    //   type: 'string',
    //   text: 'string',
    //   currentDate: new Date()
    // },
    // {
    //   titleMessage: '',
    //   id: 10,
    //   noteTitle: 'string',
    //   color: 'blue',
    //   type: 'string',
    //   text: 'string',
    //   currentDate: new Date()
    // },
    // {
    //   titleMessage: '',
    //   id: 11,
    //   noteTitle: 'string',
    //   color: 'blue',
    //   type: 'string',
    //   text: 'string',
    //   currentDate: new Date()
    // },
    // {
    //   titleMessage: '',
    //   id: 12,
    //   noteTitle: 'string',
    //   color: 'blue',
    //   type: 'string',
    //   text: 'string',
    //   currentDate: new Date()
    // },
    // {
    //   titleMessage: '',
    //   id: 13,
    //   noteTitle: 'string',
    //   color: 'blue',
    //   type: 'string',
    //   text: 'string',
    //   currentDate: new Date()
    // },
    // {
    //   titleMessage: '',
    //   id: 14,
    //   noteTitle: 'string',
    //   color: 'blue',
    //   type: 'string',
    //   text: 'string',
    //   currentDate: new Date()
    // },
    // {
    //   titleMessage: '',
    //   id: 15,
    //   noteTitle: 'string',
    //   color: 'blue',
    //   type: 'string',
    //   text: 'string',
    //   currentDate: new Date()
    // },
    // {
    //   titleMessage: '',
    //   id: 16,
    //   noteTitle: 'string',
    //   color: 'blue',
    //   type: 'string',
    //   text: 'string',
    //   currentDate: new Date()
    // }
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

  editNote(posFrom, posTo, note) {
    this.notes.splice(posFrom, posTo, note);
  }

  deleteNote(posFrom, count) {
    this.notes.splice(posFrom, count);
  }

  constructor() {
  }

}

import {Injectable} from "@angular/core";
import {NoteTypes} from "../shared/models/noteTypes";

@Injectable()
export class CalendarService {

  getNoteTypes() {
    return NoteTypes;
  }

  constructor() {
  }

}

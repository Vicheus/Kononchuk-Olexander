/**
 * Created by shura on 28.04.17.
 */
export class Note {

  constructor() {
  }

  id: number;
  note_title: string;
  color: string;
  text: string;
  date: Date;
  deletedAt: boolean;
  type: string;
}
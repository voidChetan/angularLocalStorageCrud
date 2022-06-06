import { Component, Input, OnInit } from '@angular/core';
import { Note, NoteService } from '../../note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note: Note;
  constructor(private noteSrv:NoteService) { }

  ngOnInit(): void {
  }
  deleteNote(data:any) { 
    this.noteSrv.deleteNote(data).subscribe((res)=>{
      this.noteSrv.refreshNote.next(true);
    });
  }

}

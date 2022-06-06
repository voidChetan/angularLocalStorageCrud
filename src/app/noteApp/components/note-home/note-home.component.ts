import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Fav, Note, NoteService } from '../../note.service';

@Component({
  selector: 'app-note-home',
  templateUrl: './note-home.component.html',
  styleUrls: ['./note-home.component.css']
})
export class NoteHomeComponent implements OnInit, AfterViewInit, OnDestroy {

  noteObj: Note = new Note();
  noteList: Note [] = [];

  favObj: Fav = new Fav();
  favList: Fav [] =[];
  private subscriptions: Subscription[] = [];
  constructor(private noteService:NoteService) {
  
   }

  ngOnInit(): void {
    this.loadFav();
    this.loadNotes();
  }
  loadNotes() {
    debugger;
    this.noteService.getAllNotes().subscribe((item: any)=>{ 
      this.noteList = item;
    })
  }
  loadFav() {
    this.noteService.getAllFav().subscribe((item: any)=>{
      
      this.favList = item;
    })
  }
  getLeftSideNotes() {
    return this.noteList.filter(m=>m.Position == 'left');
  }
  getRightSideNotes() {
    return this.noteList.filter(m=>m.Position == 'right');
  }
  ngAfterViewInit() {
     
    let addFavSubscription = this.noteService.addFavSubject.subscribe((item)=> { 
      debugger;
      if (item!= null && item) {
        this.openFav();
      } 
    });
    this.subscriptions.push(addFavSubscription);
    let addNoteSubscription = this.noteService.addNoteSubject.subscribe((item)=> { 
      debugger;
      if (item!= null && item) { 
        this.openNote();
      } 
    });
    this.subscriptions.push(addNoteSubscription);
    this.noteService.refreshNote.subscribe((item)=> { 
      if (item!= null && item) { 
        this.loadNotes();
      } 
    });
    this.noteService.refreshFav.subscribe((item)=> { 
      if (item!= null) { 
        this.loadFav();
      } 
    });
  }

  openNote() { 
    this.noteObj = new Note(); 
    document.getElementById('noteModel').style.display = 'block';
  }
  closeNote() {
    this.noteService.addNoteSubject.next(false);
    document.getElementById('noteModel').style.display = 'none';
  }

  openFav() { 
    this.favObj = new Fav(); 
    document.getElementById('favModel').style.display = 'block';
  }
  closeFav() {
    this.noteService.addFavSubject.next(false);
    document.getElementById('favModel').style.display = 'none';
  }

  saveNote() { 
    debugger;
    this.noteService.saveNote(this.noteObj).subscribe((res)=>{
      this.loadNotes();
      this.closeNote();
    });
  }
  saveFav() { 
    this.noteService.saveFav(this.favObj).subscribe((res)=>{
      this.loadFav();
      this.closeFav();
    });
  }
  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}

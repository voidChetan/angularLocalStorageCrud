import { Component, OnInit } from '@angular/core';
import { NoteService, Setup } from '../note.service';

@Component({
  selector: 'app-note-layout',
  templateUrl: './note-layout.component.html',
  styleUrls: ['./note-layout.component.css']
})
export class NoteLayoutComponent implements OnInit {

  isOpen: boolean = false;
  loggedUser: string;
  setupObj: Setup = new Setup();
  constructor(private noteService:NoteService) {
    this.noteService.setupChange.subscribe((item)=> { 
      if (item!= null) { 
        this.getSetup();
      } 
    });
   }

  ngOnInit(): void {
    this.loggedUser =  sessionStorage.getItem('loginId');
    this.getSetup();
  }
  getSetup(){
    this.loggedUser =  sessionStorage.getItem('loginId');
    const isSetup = localStorage.getItem('Setup');  
    if (isSetup != null) {
      const setup =JSON.parse(isSetup);
      this.setupObj.FontColor = setup.FontColor;
      this.setupObj.Sidebar = setup.Sidebar;
      this.setupObj.SidebarColor = setup.SidebarColor;
    }
  }
  openNote() {
    
    this.noteService.addNoteSubject.next(true);
  }
  openFav() {
    this.noteService.addFavSubject.next(true);
  }
   openNav() {
    this.isOpen = !this.isOpen; 
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
   closeNav() {
    this.isOpen = false;
  }

}

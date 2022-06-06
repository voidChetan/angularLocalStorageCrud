import { Component, OnInit } from '@angular/core';
import { NoteService, Setup } from '../../note.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  setupObj: Setup = new Setup();
  constructor(private noteService:NoteService) {
    const isSetup = localStorage.getItem('Setup');  
    if (isSetup != null) {
      const setup =JSON.parse(isSetup);
      this.setupObj.FontColor = setup.FontColor;
      this.setupObj.Sidebar = setup.Sidebar;
      this.setupObj.SidebarColor = setup.SidebarColor;
    }
   }

  ngOnInit(): void {
  }
  saveSetup() {
    this.noteService.saveUpdateSetup(this.setupObj).subscribe((res)=>{
      this.noteService.setupChange.next(true);
    });
  }

}

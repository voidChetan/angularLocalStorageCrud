import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { of } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class NoteService {

  public addNoteSubject: Subject<boolean>;
  public addFavSubject: Subject<boolean>;
  public refreshNote: Subject<boolean>;
  public refreshFav: Subject<boolean>;
  public setupChange: Subject<boolean>;
  noteObj: Note= new Note();
  favObj: Fav= new Fav();
  setupObj: Setup= new Setup();
  constructor() {
    this.setupChange = new Subject<boolean>();
    this.addNoteSubject = new Subject<boolean>();
    this.addFavSubject = new Subject<boolean>();
    this.refreshNote = new Subject<boolean>();
    this.refreshFav = new Subject<boolean>();
  }

  getNewNoteId() {
    debugger;
    const oldRecords = localStorage.getItem('noteList');
    if (oldRecords !== null) {
      const userList = JSON.parse(oldRecords);
      return userList.length + 1;
    } else {
      return 1;
    }
  } 
  saveNote(obj: Note): Observable<any> { 
    debugger;
    const latestId = this.getNewNoteId();
    this.noteObj.Id = latestId;
    this.noteObj.Color = obj.Color;
    this.noteObj.Title = obj.Title;
    this.noteObj.Position = obj.Position;
    this.noteObj.Details = obj.Details;

    const oldRecords = localStorage.getItem('noteList');
    debugger;
    if (oldRecords !== null) {
      const userList = JSON.parse(oldRecords);
      userList.push(this.noteObj);
      localStorage.setItem('noteList', JSON.stringify(userList));
    } else {
      const userArr = [] as any;
      userArr.push(this.noteObj);
      localStorage.setItem('noteList', JSON.stringify(userArr));
    } 
    return of(true);
  }
  updateNote(obj: Note): Observable<any> {
    this.noteObj.Id = obj.Id;
    this.noteObj.Color = obj.Color;
    this.noteObj.Title = obj.Title;
    this.noteObj.Position = obj.Position;
    this.noteObj.Details = obj.Details;
    const oldRecords = localStorage.getItem('noteList');
    if (oldRecords !== null) {
      const userList = JSON.parse(oldRecords);
      userList.splice(userList.findIndex((a: any) => a.userId == this.noteObj.Id), 1);
      userList.push(this.noteObj);
      localStorage.setItem('noteList', JSON.stringify(userList));
    }
    return of(true);
  }
  deleteNote(obj: Note): Observable<any> { 
    debugger;
    const oldRecords = localStorage.getItem('noteList');
    if (oldRecords !== null) {
      const userList = JSON.parse(oldRecords);
      userList.splice(userList.findIndex((a: any) => a.Id ==  obj.Id), 1); 
      localStorage.setItem('noteList', JSON.stringify(userList));
    }
    return of(true);
  }
  getAllNotes(): Observable<any> {
    const oldRecords = localStorage.getItem('noteList');
    if (oldRecords !== null) {
      return of(JSON.parse(oldRecords));
    } else {
      return of([]);
    }
  }




  getNewFavId() {
    const oldRecords = localStorage.getItem('FavList');
    if (oldRecords !== null) {
      const list = JSON.parse(oldRecords);
      return list.length + 1;
    } else {
      return 1;
    }
  } 
  saveFav(obj: Fav): Observable<any> { 
    const latestId = this.getNewFavId();
    this.favObj.Id = latestId;
    this.favObj.Link = obj.Link;
    this.favObj.Title = obj.Title;
    this.favObj.ImageUrl = obj.ImageUrl; 
    const oldRecords = localStorage.getItem('FavList'); 
    if (oldRecords !== null) {
      const userList = JSON.parse(oldRecords);
      userList.push(this.favObj);
      localStorage.setItem('FavList', JSON.stringify(userList));
    } else {
      const userArr = [] as any;
      userArr.push(this.favObj);
      localStorage.setItem('FavList', JSON.stringify(userArr));
    } 
    return of(true);
  }
  updateFav(obj: Fav): Observable<any> {
    this.favObj.Id = obj.Id;
    this.favObj.Link = obj.Link;
    this.favObj.Title = obj.Title;
    this.favObj.ImageUrl = obj.ImageUrl;
    const oldRecords = localStorage.getItem('FavList');
    if (oldRecords !== null) {
      const userList = JSON.parse(oldRecords);
      userList.splice(userList.findIndex((a: any) => a.Id == this.favObj.Id), 1);
      userList.push(this.favObj);
      localStorage.setItem('FavList', JSON.stringify(userList));
    }
    return of(true);
  }
  deleteFav(obj: Fav): Observable<any> { 
    debugger;
    const oldRecords = localStorage.getItem('FavList');
    if (oldRecords !== null) {
      const userList = JSON.parse(oldRecords);
      userList.splice(userList.findIndex((a: any) => a.Id ==  obj.Id), 1); 
      localStorage.setItem('FavList', JSON.stringify(userList));
    }
    return of(true);
  }
  getAllFav(): Observable<any> {
    const oldRecords = localStorage.getItem('FavList');
    if (oldRecords !== null) {
      return of(JSON.parse(oldRecords));
    } else {
      return of([]);
    }
  }
  saveUpdateSetup(obj: Setup): Observable<any> { 
    this.setupObj.FontColor = obj.FontColor;
    this.setupObj.Sidebar = obj.Sidebar;
    this.setupObj.SidebarColor = obj.SidebarColor; 
    const oldRecords = localStorage.getItem('Setup');  
    localStorage.setItem('Setup', JSON.stringify(this.setupObj)); 
    return of(true);
  } 
}

export class Note {
  Id: number;
  Title: string;
  Details: string;
  Position: string;
  Color: string;
  constructor() {
    this.Title = '';
    this.Details = '';
    this.Position = '';
    this.Color = '';
    this.Id = 0;
  }
}
export class Fav {
  Id: number;
  Title: string;
  Link: string;
  ImageUrl: string;
  constructor() {
    this.Title = '';
    this.Link = '';
    this.ImageUrl = '';
    this.Id = 0;
  }
}
export class Setup {
  Sidebar: string;
  SidebarColor: string;
  FontColor: string; 
  constructor() {
    this.Sidebar = '';
    this.SidebarColor = '';
    this.FontColor = '';
  }
}

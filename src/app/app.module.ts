import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './noteApp/components/card/card.component';
import { NoteHomeComponent } from './noteApp/components/note-home/note-home.component';
import { NoteComponent } from './noteApp/components/note/note.component';
import { SetupComponent } from './noteApp/components/setup/setup.component';
import { NoteLayoutComponent } from './noteApp/note-layout/note-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteLayoutComponent,
    CardComponent,
    NoteComponent,
    NoteHomeComponent,
    SetupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

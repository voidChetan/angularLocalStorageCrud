import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteLayoutComponent } from './note-layout.component';

describe('NoteLayoutComponent', () => {
  let component: NoteLayoutComponent;
  let fixture: ComponentFixture<NoteLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

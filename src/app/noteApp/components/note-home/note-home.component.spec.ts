import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteHomeComponent } from './note-home.component';

describe('NoteHomeComponent', () => {
  let component: NoteHomeComponent;
  let fixture: ComponentFixture<NoteHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

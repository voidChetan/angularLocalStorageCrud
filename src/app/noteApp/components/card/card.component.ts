import { Component, Input, OnInit } from '@angular/core';
import { Fav, NoteService } from '../../note.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() fav:Fav;
  constructor(private noteSrv:NoteService) { }

  ngOnInit(): void {
  }
  deleteFav(data: any) {
    this.noteSrv.deleteFav(data).subscribe((res)=>{
      this.noteSrv.refreshFav.next(true);
    });
  }

}

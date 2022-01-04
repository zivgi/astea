import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: '[song-list]',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit, OnDestroy {

   
  constructor() { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    console.log("SongListComponent init");
  }

}

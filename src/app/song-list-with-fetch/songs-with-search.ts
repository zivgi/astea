import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'songs-with-search',
  templateUrl: './songs-with-search.html'
})
export class SongsWithSearch implements OnInit, OnDestroy {
  public searchTerm: string = "";
  public searchTermChanged(searchTerm: string) {
    this.searchTerm = searchTerm;
  }
   
  constructor() { }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }
}

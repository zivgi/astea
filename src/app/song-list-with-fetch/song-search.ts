import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'song-search',
  templateUrl: './song-search.html'
})
export class SongSearchComponent implements OnInit, OnDestroy {
  @Output() searchTermChanged: EventEmitter<string> = new EventEmitter<string>();

  public searchTerm: string = "";
  public onInputChange(evt) {
    this.searchTerm = evt.value;
    this.searchTermChanged.emit(evt.value);
  }
  
  constructor() { }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

}

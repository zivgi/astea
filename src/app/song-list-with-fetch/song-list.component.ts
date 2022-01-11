import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ISongItem } from '../models/songModel';

@Component({
  selector: 'song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit, OnDestroy {

  public allSongs: ISongItem[] = [];
  public filteredSongs: ISongItem[] = [];

  private _searchFilter: string = "";
  @Input() public set searchFilter(val){
    this._searchFilter = val;
    this.updateFilteredSongs();
  }

  private updateFilteredSongs() {
    this.filteredSongs = this.allSongs.filter(song => {
      return song.name.includes(this._searchFilter) || song.singer.includes(this._searchFilter);
    });
  }

  private loadAllSongs(): Promise<any> {
    let url = "http://www.synctheband.com/api/getData";

    return fetch(url, {method: 'POST'})
    .then(response => response.json())
    .then(data => data.songBook.songs)
  }
   
  constructor() { }
  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
    this.loadAllSongs().then(allSongs => {
      this.allSongs = allSongs;
      this.updateFilteredSongs();
    });
  }

}

import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'song-container',
  templateUrl: './song-container.html',
  styleUrls: ['./song-container.scss']
})
export class SongContainer implements OnInit, OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    console.log("SongListComponent init");

    setTimeout(() => {
      //this.style = {"background": "red"};
      this.backgroundStyle = "red";

    }, 2000);

    setTimeout(() => {
      //this.style = {"background": "red"};
      this.colorStyle = "purple";
    }, 1000);
  }

  public onSave(newValue: string) {
    this.songName = newValue;
    //alert("save")
  }

  public songNameInputChange(val) {
    //debugger;
  }

  public songName = "Let in be";
  public songSinger = "Beatles";

  public style = {"background": "green"};

  public backgroundStyle = "yellow";
  public colorStyle = "blue";

  public test(ngModel) {
    debugger;
  }
}

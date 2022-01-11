import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { IUserModel } from '../models/userModel';

@Component({
  selector: 'user-item',
  templateUrl: './user-item.html'
})
export class UserItem {

  @Input() public username = "";
  @Input() public email = "";

  @Output() selected: EventEmitter<string> = new EventEmitter<string>();

  onSelect() {
    this.selected.emit(this.email);
    //alert()
  }
}

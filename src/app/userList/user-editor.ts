import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { IUserModel } from '../models/userModel';

@Component({
  selector: 'user-editor',
  templateUrl: './user-editor.html'
})
export class UserEditor implements OnInit, OnDestroy {

  public users: IUserModel[] = [];
  public selectedUsers: IUserModel = null;
   
  constructor() { }
  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
    const userOne = {
      id: 0,
      username: "john_d",
      email: "john.doe@gmail.com",
      info: {
        firstName: "john",
        lastName: "doe",
        jobTitle: "Developer",
        avatar: "http://authenticgoods.co/wrapbootstrap/themes/sparks/img/team/avatar-male.png",
        phoneNumber: "01-234-343434"
      }
    }
    const userTwo = {
      id: 1,
      username: "ziv",
      email: "ziv@gmail.com",
      info: {
        firstName: "ziv",
        lastName: "aaa",
        jobTitle: "Developer",
        avatar: "http://authenticgoods.co/wrapbootstrap/themes/sparks/img/team/avatar-male.png",
        phoneNumber: "01-233-343534"
      }
    }
    const userThree = {
      id: 1,
      username: "moshe",
      email: "moshe@gmail.com",
      info: {
        firstName: "moshe",
        lastName: "bbb",
        jobTitle: "Developer",
        avatar: "http://authenticgoods.co/wrapbootstrap/themes/sparks/img/team/avatar-male.png",
        phoneNumber: "01-233-343534"
      }
    }

    this.users.push(userOne);
    this.users.push(userTwo);
    this.users.push(userThree);
  }

}

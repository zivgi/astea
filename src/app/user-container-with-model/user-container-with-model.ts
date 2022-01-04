import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { IUserModel } from '../models/userModel';

@Component({
  selector: 'user-container-with-model',
  templateUrl: './user-container-with-model.html',
  styleUrls: ['./user-container-with-model.scss']
})
export class UserContainerWithModel implements OnInit {

  public currentUser: IUserModel;
  constructor() {}
  

  ngOnInit(): void {
    
    this.currentUser = {
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

  }

  public onSave(newUserName: string, newUserEmail: string) {
    this.currentUser.username = newUserName;
    this.currentUser.email = newUserEmail;
  }

  
}

import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../service/users-service.service';

@Component({
  selector: 'app-user-list-using-service',
  templateUrl: './user-list-using-service.component.html',
  styleUrls: ['./user-list-using-service.component.scss']
})
export class UserListUsingServiceComponent implements OnInit {

  constructor(private usersService: UsersServiceService) { }

  public allUsers = [];

  ngOnInit(): void {
    this.usersService.loadAllUsers().then(allUsers => {
      this.allUsers = allUsers;
    })
  }

}

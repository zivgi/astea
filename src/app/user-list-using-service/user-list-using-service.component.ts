import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { UsersServiceService } from '../service/users-service.service';
import {debounceTime, delay, distinctUntilChanged, map, switchMap, tap} from "rxjs/operators";
import { Router } from '@angular/router';
import { IUserModel } from '../models/userModel';

@Component({
  selector: 'app-user-list-using-service',
  templateUrl: './user-list-using-service.component.html',
  styleUrls: ['./user-list-using-service.component.scss']
})
export class UserListUsingServiceComponent implements OnInit {

  constructor(private usersService: UsersServiceService,
    private router: Router
    ) { }

  public allUsers = [];

  public userClicked(user: IUserModel) {
    let id = user.id;
    this.router.navigate(['/users', id]);
  }

  ngOnInit(): void {

    // const array=[1,2,3,4,5,6,7];
    // const obsof1=of(...array);
    // const obsof2 = obsof1.pipe(map(val => val + 10))

    // let ret = obsof2.subscribe((val) => {
    //   debugger;
    // }, (err) => {console.log("error")}, () => {console.log("complete")});
    // ret.unsubscribe()

    this.usersService.loadAllUsers().then(allUsers => {
      this.allUsers = allUsers;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUserModel } from '../models/userModel';
import { UsersServiceService } from '../service/users-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    private usersService: UsersServiceService) { }

    public user: IUserModel = null;
  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    
    this.usersService.loadAllUsers().then((allUsers: IUserModel[]) => {
      let user = allUsers.find(u => u.id === id);
      this.user = user || null;
    });
  }

}

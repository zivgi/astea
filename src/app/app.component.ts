import { Component } from '@angular/core';
import { IUserInfo } from './models/userModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'asteDay02';

  public isLoading = true;

  public users: string[] = [];

  constructor() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
} 

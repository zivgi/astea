import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor() { }

  private _allUsersPromise: Promise<any> = null;

  public loadAllUsers(): Promise<any> {
    if (this._allUsersPromise)
      return this._allUsersPromise;

    let url = "http://localhost:3000/users";

    this._allUsersPromise = fetch(url, {method: 'GET'})
    .then(response => response.json())

    return this._allUsersPromise;
  }
}

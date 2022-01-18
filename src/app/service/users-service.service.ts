import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserInfo, IUserModel } from '../models/userModel';

@Injectable()
  export class NoopInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): 	Observable<HttpEvent<any>> {
      return next.handle(req);
    }
}

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http: HttpClient) { }

  private _allUsersPromise: Promise<any> = null;

  public selectedUser: IUserModel;

  public loadAllUsers(): Promise<any> {
    if (this._allUsersPromise)
      return this._allUsersPromise;

    let url = "http://localhost:3000/users";

    let obs = this.http.get(url);
    let promise = obs.toPromise();
    this._allUsersPromise = promise;
    
    //this._allUsersPromise = fetch(url, {method: 'GET'})
    //.then(response => response.json())

    return this._allUsersPromise;
  }
}

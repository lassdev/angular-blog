import { Injectable } from '@angular/core';
import { User }  from '../../shared/model/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  readonly SERVER_URL : string = 'http://localhost:3000/';

  constructor( private http : HttpClient) { }


  login (user : User) : Observable<User> {
    const url : string =  `${this.SERVER_URL}users?username=${user.userName}`;
    return this.http.get<User>(url);
  } 

}

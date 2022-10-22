import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, ReplaySubject } from 'rxjs';

import { environment } from 'src/environments/environment';
import { LoginModel } from '../model/Login.Model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  signupurl=environment.signupurl;
  loginUrl=environment.LoginApi;
// signupurl='http://localhost:3000/signupuser'

  constructor(private http:HttpClient) { }

getusername(){
  return this.http.get<any>(this.signupurl)
}


private currentUser = new ReplaySubject<any>(1);

currentUser$ = this.currentUser.asObservable();



public loginUser(data:any): Observable<LoginModel> {
  return this.http.post<LoginModel>(this.loginUrl, data);
}


}

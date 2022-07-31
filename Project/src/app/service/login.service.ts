import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

signupurl='http://localhost:3000/signupuser'

  constructor(private http:HttpClient) { }

getusername(){
  return this.http.get<any>(this.signupurl)
}
}

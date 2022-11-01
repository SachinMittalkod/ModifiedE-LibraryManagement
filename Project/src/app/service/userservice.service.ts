import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Registration } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  userApiUrl=environment.userApiUrl;
  UserRequestApiUrl=environment.UserRequestApiUrl;
  constructor(private http:HttpClient) { }


  public getAllRegisteredUsers():Observable<any>{
    return this.http.get<any>(this.userApiUrl);
  }

  public getUserRequest():Observable<any>{
    return this.http.get<any>(this.UserRequestApiUrl)
  }

  public deleteUserRequest(id:number){
    debugger
 const apiurl=`${this.UserRequestApiUrl}/${id}`
    return this.http.delete<any>(apiurl);
  }
}

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
  constructor(private http:HttpClient) { }


  public getAllRegisteredUsers():Observable<any>{
    return this.http.get<any>(this.userApiUrl);
  }
}

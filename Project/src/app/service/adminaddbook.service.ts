import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Adminaddbook } from '../model/adminaddbook.model';
import { environment } from 'src/environments/environment';
import { requestedBook } from '../model/requestedBook.model';




@Injectable({
  providedIn: 'root'
})
export class  AdminaddbookService {
  private _refresh = new Subject<void>();

  get refreshRequired() {
    return this._refresh;
  }
  subject=new Subject();

   adminaddurl=environment.adminAddurl; 
   baseUrlApi=environment.userApiUrl;
   postBookApiUrl=environment.postBookApiUrl;
   getAllBookDetailApiUrl=environment.getAllBookDetailApiUrl;
   PostUserRequestAPI=environment.PostUserRequestAPI
  constructor(private http:HttpClient, private router:Router) { }
  // adminaddBook
  
  // public postAdminBook(emp:any):Observable<Adminaddbook>{
  //   return this.http.post<Adminaddbook>(this.adminaddurl,emp);
  // }

  // public postAdminBook(add:any):Observable<Adminaddbook>{
  //  // debugger;
  //   console.log("from service"+ add.value);
  //   //return this.http.post<Adminaddbook>(this.postBookApiUrl,add.value);
  //   return this.http.post<Adminaddbook>(`${this.postBookApiUrl}/PostBook`, add.value);
  // }

  public postAdminBook(add:any):Observable<Adminaddbook>{
    // debugger;
     console.log("from service"+ add.value);
     //return this.http.post<Adminaddbook>(this.postBookApiUrl,add.value);
     return this.http.post<Adminaddbook>(this.postBookApiUrl, add)
   }
  
  public postUserRequets(add:any):Observable<requestedBook>{
    // debugger;
     console.log("from service"+ add.value);
     return this.http.post<requestedBook>(this.postBookApiUrl,add.value);
   }

  public getAdminBook(){
    return this.http.get<any>(this.adminaddurl);
  }


//-----Using WEBAPI------//

public getAllBookDetails():Observable<Adminaddbook> {
  debugger;
  return this.http.get<Adminaddbook>(this.getAllBookDetailApiUrl);
}

public postUserRequestAPI(add:any):Observable<requestedBook>{
 debugger;
   console.log("from service"+ add.value);
   return this.http.post<requestedBook>(this.PostUserRequestAPI,add.value);
 }

  
//-----Using WEBAPI------//

  public deleteAdminBook(id:number){
    const url=`${this.adminaddurl}/${id}`
   return  this.http.delete<Adminaddbook>(url);
  }
  public editAdminBook(id:any,forms:any){
    const url=`${this.adminaddurl}/${id}`
   return  this.http.patch<Adminaddbook>(url,forms);
  }

 
   public editBookById(data:any){
    // console.log(data);
    return  this.subject.next(data);

  }
  public getBookId(editId:any){
    const urls=`${this.adminaddurl}/${editId}`
    return this.http.get<Adminaddbook>(urls)
  }

}

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
   BookApiUrl=environment.BookApiUrl;
   getAllBookDetailApiUrl=environment.getAllBookDetailApiUrl;
   PostUserRequestAPI=environment.PostUserRequestAPI;
   IssuedBookApiUrl=environment.IssuedBookApiUrl;

  constructor(private http:HttpClient, private router:Router) { }
  // adminaddBook
  
  // public postAdminBook(emp:any):Observable<Adminaddbook> {
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
     return this.http.post<Adminaddbook>(this.BookApiUrl, add)
   }
  
  public postUserRequets(add:any):Observable<requestedBook>{
    // debugger;
     console.log("from service"+ add.value);
     return this.http.post<requestedBook>(this.BookApiUrl,add.value);
   }

  public getAdminBook(){
    return this.http.get<any>(this.adminaddurl);
  }


//-----Using WEBAPI start ------//

public getAllBookDetails():Observable<Adminaddbook> {
  debugger;
  return this.http.get<Adminaddbook>(this.getAllBookDetailApiUrl);
}

public postUserRequestAPI(add:any):Observable<requestedBook>{
 debugger;
   console.log("from service"+ add.value);
   return this.http.post<requestedBook>(this.PostUserRequestAPI,add.value);
 }

 public deleteAdminBook(Id:number){
  debugger
  console.log();
  return this.http.delete<any>(`${this.BookApiUrl}/${Id}`).pipe(tap(()=>{
  //this.refreshRequired.next();  
  }));

 

//   const url=`${this.deleteBookApiUrl}/DeleteBook?bookId=${Id}`
//   console.log(url);
//  return  this.http.delete<Adminaddbook>(url);

}

public issuedBook():Observable<any>{
  return this.http.get<any>(this.IssuedBookApiUrl);
}

public getAdminBookById(Id:number){
    return this.http.get<any>(`${this.BookApiUrl}/${Id}`).pipe(tap(()=>{
      //this.refreshRequired.next();
    }))
      
}


// public editAdminBook(id:any,forms:any){
//   debugger
//   console.log();
//   const url=`${this.adminaddurl}/${id}`
//   return  this.http.put<Adminaddbook>(url,forms);
//   // public editAdminBook(id:any,forms:any){
//   //   const url=`${this.adminaddurl}/${id}`
//   //  return  this.http.patch<Adminaddbook>(url,forms);
//   // }

 
// //   const url=`${this.deleteBookApiUrl}/DeleteBook?bookId=${Id}`
// //   console.log(url);
// //  return  this.http.delete<Adminaddbook>(url);
// }


public editAdminBook(id:any,forms:any){
  console.log(id, forms);

  return this.http.put<any>(`${this.BookApiUrl}/${id}`, forms).pipe(tap(()=>{
  this.refreshRequired.next();  
    }));
//   const url=`${this.BookApiUrl}/UpdateBook/${id}`

//  return  this.http.put<any>(url,forms);
}

public getBookId(editId:any){
  console.log(editId);
  const urls=`${this.BookApiUrl}/${editId}`
  return this.http.get<any>(urls)
}

  
//-----Using WEBAPI end-----//

  // public deleteAdminBook(id:number){
  //   const url=`${this.adminaddurl}/${id}`
  //  return  this.http.delete<Adminaddbook>(url);
  // }

  // public editAdminBook(id:any,forms:any){
  //   const url=`${this.adminaddurl}/${id}`
  //  return  this.http.patch<Adminaddbook>(url,forms);
  // }

 

  // public editBookById(editId:any){
  //   const urls=`${this.BookApiUrl}/${editId}`
  //   return this.http.get<Adminaddbook>(urls)
  // }

  
public editBookById(editId:any){
  const urls=`${this.BookApiUrl}/${editId}`
  return this.http.get<Adminaddbook>(urls)
}

  // public getBookId(editId:any){
  //   const urls=`${this.adminaddurl}/${editId}`
  //   return this.http.get<Adminaddbook>(urls)
  // }

  public sharedata(data: any) {

    console.log('from service' + data);

    return this.subject.next(data);

  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Adminaddbook } from '../model/adminaddbook.model';

@Injectable({
  providedIn: 'root'
})
export class AdminaddbookService {
  adminaddurl='http://localhost:3000/AdminAddbooks';
  subject=new Subject();
  constructor(private http:HttpClient, private router:Router) { }
  // adminaddBook
  
  public postAdminBook(emp:any):Observable<Adminaddbook>{
    return this.http.post<Adminaddbook>(this.adminaddurl,emp);
  }

  public getAdminBook(){
    return this.http.get<any>(this.adminaddurl);
  }
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

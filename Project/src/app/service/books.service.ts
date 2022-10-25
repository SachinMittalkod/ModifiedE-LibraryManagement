import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Adminaddbook } from '../model/adminaddbook.model';
import { User } from '../model/book.model';
import { Requestbook } from '../model/requestbook.model';
import { Registration } from '../model/user.model';
import { environment } from 'src/environments/environment';

const baseUrl=environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  // baseUrl='http://localhost:3000/Books';
  // reqbookurl='http://localhost:3000/reqbook'
  // signupurl='http://localhost:3000/signupuser'
  // adminurl='http://localhost:3000/admindata'
  // adminaddbooks='http://localhost:3000/AdminAddbooks'
  // requsetedhistory='http://localhost:3000/reqhistory'
   baseUrl=environment.baseUrl;
   reqbookurl=environment.reqbookurl;
   signupurl=environment.signupurl;
   adminurl=environment.adminurl;
   adminaddbooks=environment.adminaddbooks;
   requsetedhistory=environment.requsetedhistory;
   baseUrlApi=environment.userApiUrl;
  constructor(private http:HttpClient) { }

  user:any;
  admin:any;
  data:any;
  isAuthenticated=false;
  isAdmin:false;
  getusers(){
    return this.http.get<User[]>(this.baseUrl)
  }
  // addBook
  public postRequest(emp:any):Observable<Requestbook>{
    return this.http.post<Requestbook>(this.reqbookurl,emp);
  }

 public getrequest(){
    return this.http.get<Requestbook[]>(this.reqbookurl)
  }

  public adminlogin(){
    this.http.get<any>(this.adminurl);
  }

  public Authenticate(data:any){
return this.http.get(this.adminurl).subscribe(resp=>{
  this.admin=resp;
  this.data=data;
  this.autheticateuser();
  this.navigateUser();
})
  }

 public autheticateuser(){
    this.admin=this.admin.find((c:any)=>{
      return c.adminid==this.data.adminid && c.AdminPassword ==this.data.AdminPassword
    })
  }

  public navigateUser() {
    if(this.admin){
      this.checkrole()
    }else{
      alert("not admin")
    }
  }
  
  checkrole() {
    this.isAuthenticated=true;
    if(this.admin.admin){
      console.log(this.admin);
    }
  }

  public getadminid():Observable<any>{
    return this.http.get<any>(this.adminurl)
  }


  public acceptrequest(id:number){
    const url=`${this.reqbookurl}/${id}`
  return  this.http.delete<Adminaddbook>(url)
  }


 public register(sign:any):Observable<Registration>{
  debugger;
  console.log(sign);
    return this.http.post<Registration>(this.baseUrlApi, sign)
  }
 
  public postreqhistory(body:any):Observable<Requestbook>{
    return this.http.post<Requestbook>(this.requsetedhistory,body)
  }
  public getreqhistory():Observable<any>{
    return this.http.get<Requestbook[]>(this.requsetedhistory)
  }
//Both methods are same only name is different for naming convection
  public issuedBooks():Observable<any>{
    return this.http.get<Requestbook[]>(this.requsetedhistory)
  }

}







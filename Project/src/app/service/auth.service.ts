import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import {  LoginModel } from '../model/Login.Model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  LoginApi=environment.LoginApi;
user:any;
isAuthenticated=false;
isAdmin=false;
isUser=false;
response:any;
data:any;

uRoleId=sessionStorage.getItem('RoleId');


userId = sessionStorage.getItem('UserId');
  constructor(private http:HttpClient,private router:Router, private toastr:ToastrService) { }

//   public authenticateEmployee(data:any)
//   {

//     console.log(data);
//     return this.http.get('http://localhost:3000/signupuser').subscribe(respon=>{
//     console.log(respon);
//       this.user=respon;
//       console.log(this.user);
//       this.data=data;
//       this.authenticateUser();
//       this.navigateUser();
//     })
//   }

//   authenticateUser()
//   {
//     console.log(this.user);
    
//     this.response=(this.user.find((x:any)=>{
//       console.log(x.userName);
//       return x.username==this.data.username && x.createpassword==this.data.createpassword
   

//     }))
//   }

// navigateUser(){
//   if(this.response)
//   {
//     this.checkRole();
//     this.toastr.success('', 'Logged In Successfully', {
//       positionClass: 'toast-top-center'
//     });
//   }
//   else{
//     // alert ("Invalid Credential");
//     this.toastr.error('', 'Invalid Credentials', {
//       positionClass: 'toast-top-center'
//     });
 
//   }
// }

// checkRole()
// {
//   this.isAuthenticated=true;
//   if(this.response.role ==='1')
//   {
//     this.isAdmin=true;
//     this.isAuthenticated=true;
//     this.router.navigate(['/adminlanding']);
//   }
//   else if(this.response.role==='2')
//   {
//     this.isUser=true;
//     this.isAuthenticated=true;
//     this.router.navigate(['/userlanding']);
//   }
//   else
//   {
//     alert ("Invalid user");
//   }
// }


//---------------Using API ------------//

// public authenticateUser(sign:any):Observable<LoginModel>{
//   debugger;
//   console.log(sign);
//     return this.http.post<LoginModel>(this.LoginApi, sign)
//   }

userApiUrl=environment.userApiUrl;
//baseApiUrl:'https://localhost:44381/api/User'

public authenticateEmployee(data:any):Observable<any>
{
debugger;
  console.log(data);
  return this.http.post<any>(this.LoginApi,data);
  // .subscribe(respo=>{
  // console.log(respo);
  //   this.user=respo;
  //   console.log(this.user);
  //   //this.data=data;
  //  this.authenticateUser();
   
  //   this.navigateUser();
  // })
}

authenticateUser()
{
 
  console.log(this.user.RoleId);
  
  this.response=(this.user.find((x:any)=>{
    console.log(x.name);
    return x.name==this.user.Name && x.password==this.data.Password
 

  }))
}

// navigateUser(){
// if(this.response)
// {
//   this.checkRole();
//   this.toastr.success('', 'Logged In Successfully', {
//     positionClass: 'toast-top-center'
//   });
// }
// else{
//   // alert ("Invalid Credential");
//   this.toastr.error('', 'Invalid Credentials', {
//     positionClass: 'toast-top-center'
//   });

// }
// }

navigateUser(){
  if(this.user)
  {
    this.checkRole();
    this.toastr.success('', 'Logged In Successfully', {
      positionClass: 'toast-top-center'
    });
  }
  else{
    // alert ("Invalid Credential");
    this.toastr.error('', 'Invalid Credentials', {
      positionClass: 'toast-top-center'
    });
  
  }
  }


checkRole()
{
  debugger;
this.isAuthenticated=true;
if(this.uRoleId == '1')
{
  this.isAdmin=true;
  this.isAuthenticated=true;
  this.router.navigate(['/adminlanding']);
}
else if(this.uRoleId  == '2')
{
  this.isUser=true;
  this.isAuthenticated=true;
  this.router.navigate(['/userlanding']);
}
else
{
  alert ("Invalid user");
}
}

}

 
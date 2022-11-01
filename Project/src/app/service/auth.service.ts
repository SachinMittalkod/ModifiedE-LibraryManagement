import { HttpClient } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
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
  
 // uRoleId=sessionStorage.getItem('RoleId');
  
  
  userId = sessionStorage.getItem('UserId');
    constructor(private http:HttpClient,private router:Router, private toastr:ToastrService) { }
  
  
  
  userApiUrl=environment.userApiUrl;

  //baseApiUrl:'https://localhost:44381/api/User'
  
  public authenticateEmployee(data:any)
  {
  this.http.post(this.LoginApi,data).subscribe({next:(resp:any)=>{
      

   
    console.log(resp);


    this.user=resp;

    this.data=data;
   
    sessionStorage.setItem('Name', this.user.userDetails.name)

    this.navigate();
    
  },error:(err)=>{
    this.toastr.error('', 'Invalid Credentials ', {

      positionClass: 'toast-top-center'
  
    });
  }});
   
    
  }

  
  navigate() {

   if(this.user){
    this.navigateUser();
   }
   
   else{
   


   }
  }

  navigateUser() {

   
    if (this.user.userDetails.roleId == '1') {

      this.isAdmin = true;

      this.isAuthenticated = true;

      this.router.navigateByUrl('adminlanding'),

        this.toastr.success('', 'Login Successfully ', {

          positionClass: 'toast-top-center'

        });

    } else if (this.user.userDetails.roleId == '2') {

      this.isUser = true;

      this.isAuthenticated = true;

      this.router.navigateByUrl('userlanding'),

        this.toastr.success('', 'Login Successfully', {

          positionClass: 'toast-top-center'

        });

    } else {

      this.toastr.warning('', 'Log In first !!', {

        positionClass: 'toast-top-center'

      });

    }
  }


  }
  
 
  

  
  


 
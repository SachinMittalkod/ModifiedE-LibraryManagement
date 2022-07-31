import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

user:any;
isAuthenticated=false;
isAdmin=false;
isUser=false;
response:any;
data:any;
  constructor(private http:HttpClient,private router:Router, private toastr:ToastrService) { }

  public authenticateEmployee(data:any)
  {

    console.log(data);
    return this.http.get('http://localhost:3000/signupuser').subscribe(respon=>{
    console.log(respon);
      this.user=respon;
      console.log(this.user);
      this.data=data;
      this.authenticateUser();
      this.navigateUser();
    })
  }

  authenticateUser()
  {
    console.log(this.user);
    
    this.response=(this.user.find((x:any)=>{
      console.log(x.userName);
      return x.username==this.data.username && x.createpassword==this.data.createpassword
   

    }))
  }

navigateUser(){
  if(this.response)
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
  this.isAuthenticated=true;
  if(this.response.role ==='admin')
  {
    this.isAdmin=true;
    this.isAuthenticated=true;
    this.router.navigate(['/adminlanding']);
  }
  else if(this.response.role==='user')
  {
    this.isUser=true;
    this.isAuthenticated=true;
    this.router.navigate(['/afterlogin']);
  }
  else
  {
    alert ("Invalid user");
  }
}
}

 
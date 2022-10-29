import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { BooksService } from 'src/app/service/books.service';
import { LoginService } from 'src/app/service/login.service';
import { NotificationService } from 'src/app/service/notification.service';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
 
 public data:FormGroup;
 user:any;

 userId:any;

  Name: string = '';

  use:any;
  nameon:any;
  responseData:any; 
 
  userData:any;
  tokendata:any;
  isAuthenticated=false;
  isAdmin=false;
  isUser=false;
  constructor(private router:Router, private fb:FormBuilder, private service:BooksService, private http:HttpClient,
    private toastrService: ToastrService, private getdata:LoginService, private authservice:AuthService,
    private notifiservice:NotificationService) { }


  ngOnInit(): void {
    sessionStorage.clear();
      this.data=this.fb.group({
        // username:["",Validators.required],
        // createpassword:["",Validators.required],
        //-----WEB api-----//
        Name:["",Validators.required],
        Password:["",Validators.required],
      })

      var udata=sessionStorage.getItem('UserId');
console.log(udata);
var uName=sessionStorage.getItem('Name');
console.log(uName);
var uRoleId=sessionStorage.getItem('RoleId');
console.log(uRoleId);

  }
  public login(){

    this.nameon=this.authservice.authenticateEmployee(this.data.value).subscribe(resp=>{
      console.log(resp.UserId);
      this.userData=resp;
     this.tokendata = JSON.stringify(this.userData);
      console.log(this.tokendata);
      
      console.log(this.userData);
      console.log(this.userData.userDetails.userId);
      this.userChecked();
     debugger;
      this.checkRole();
    });
   // localStorage.setItem('username', this.userData.value.Name);
  }
  checkRole() {
var uRoleId=sessionStorage.getItem('RoleId');
    debugger;
    this.isAuthenticated=true;
    if(uRoleId == '1')
    {
      this.isAdmin=true;
      this.isAuthenticated=true;
      this.router.navigate(['/adminlanding']);
    }
    else if(uRoleId  == '2')
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

  public userChecked():void {
    if (this.data) {
      this.storeUserInfo();
      this.toastrService.success('Login Successfull', 'Success', { tapToDismiss: true });
     //this.router.navigate(['userlanding']);
    } else {
      this.toastrService.error(' invalid email or password', 'Invalid Credentials', { tapToDismiss: true });
    }
  }


  public storeUserInfo():void {
        sessionStorage.setItem('UserId', this.userData.userDetails.userId);
        sessionStorage.setItem('Name', this.userData.userDetails.name);
        sessionStorage.setItem('RoleId', this.userData.userDetails.roleId);
        sessionStorage.setItem('token', this.userData.token);
        sessionStorage.setItem('isLoggedIn', 'true');

      }

// public checkRole()
// {
//   debugger;
// this.isAuthenticated=true;
// if(this.user.role === '1')
// {
//   this.isAdmin=true;
//   this.isAuthenticated=true;
//   this.router.navigate(['/adminlanding']);
// }
// else if(this.user.role === '2')
// {
//   this.isUser=true;
//   this.isAuthenticated=true;
//   this.router.navigate(['/userlanding']);
// }
// else
// {
//   alert ("Invalid user");
// }
// }
  //-------LOgin API------//  

//   public onSubmit(form:NgForm){
//  debugger;
//    this.authservice.authenticateUser(form).subscribe(resp=>{
//       console.log(resp);
//       this.responseData=resp;
//       //this.notifiservice.showSuccess('Congratulations','Registered Successfully');
//      //this.userChecked();
//     })
  
//   }
  
//   public userChecked():void {
//     if (this.data) {
//       this.storeUserInfo();
//       this.toastrService.success('Login Successfull', 'Success', { tapToDismiss: true });
//       this.router.navigate(['userlanding']);
//     } else {
//       this.toastrService.error(' invalid email or password', 'Invalid Credentials', { tapToDismiss: true });
//     }
   
//   }
//   


  
}

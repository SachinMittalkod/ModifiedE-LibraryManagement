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
 
  constructor(private router:Router, private fb:FormBuilder, private service:BooksService, private http:HttpClient,
    private toastrService: ToastrService, private getdata:LoginService, private authservice:AuthService,
    private notifiservice:NotificationService) { }


  ngOnInit(): void {
    sessionStorage.clear();
      this.data=this.fb.group({
        // username:["",Validators.required],
        // createpassword:["",Validators.required],
        //-----WEB api-----//
        name:["",Validators.required],
        password:["",Validators.required],
      })
  }
  public login(){

    this.nameon=this.authservice.authenticateEmployee(this.data.value);
    localStorage.setItem('username', this.data.value.Name);
  }

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
//   public storeUserInfo():void {
//     sessionStorage.setItem('UserId', this.responseData.UserId);
//     sessionStorage.setItem('Name', this.responseData.Name);
//     sessionStorage.setItem('RoleId', this.responseData.RoleId);
//     sessionStorage.setItem('token', this.responseData.token);
//     sessionStorage.setItem('isLoggedIn', 'true');
//   }
  
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/service/books.service';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
data:FormGroup;
  logdata: Object;
  user: Object;
 
  use:any
  constructor(private service:BooksService, private fb:FormBuilder, private http: HttpClient, private router:Router
    ,private toastr: ToastrService, private toasterservice:NotificationService) { }
  // 'http://localhost:3000/admin'
  ngOnInit(): void {
   this.data= this.fb.group(
      {
        adminid:[""],
        AdminPassword:[""]
      }
    )
  }

login(){
  
  this.service.getadminid().subscribe(res=>{
     this.user=res.find((a:any)=>{
      return a.adminid == this.data.value.adminid && a.adminPassword == this.data.value.AdminPassword;
    });
    if(this.user){
      this.toasterservice.showSuccess("You have Successfully Logged in","Welcome")
      // alert("Login succcess")
      
      this.router.navigate(['/adminlanding'])
    }else{
      this.toasterservice.showError("please check id and password", "Sorry Failed!!")
            // alert("please check username and password")
          }
  })
}
}


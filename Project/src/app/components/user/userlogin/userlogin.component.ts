import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
 
  data:FormGroup;
  user: object;
  use:any;
  nameon:any;
 
  constructor(private router:Router, private fb:FormBuilder, private service:BooksService, private http:HttpClient,
    private toastr: ToastrService, private toasterservice:NotificationService, private getdata:LoginService, private authservice:AuthService) { }


  ngOnInit(): void {
      this.data=this.fb.group({
        username:["",Validators.required],
        createpassword:["",Validators.required],
      })
  }
  public login(){
 
    this.nameon=this.authservice.authenticateEmployee(this.data.value);
    localStorage.setItem('username', this.data.value.username);
  }
  
}

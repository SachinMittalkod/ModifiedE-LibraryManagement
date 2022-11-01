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
  styleUrls: ['./userlogin.component.css'],
})
export class UserloginComponent implements OnInit {



  Name: string;
Password: string;
data:any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private service: BooksService,
    private http: HttpClient,
    private toastrService: ToastrService,
    private getdata: LoginService,
    private authservice: AuthService,
    private notifiservice: NotificationService
  ) {}

  ngOnInit(): void {
  

  }
  public onSubmit(Form:NgForm){

   this.authservice.authenticateEmployee(Form.value),
   this.data=Form.value;
   
   
   // localStorage.setItem('username', this.userData.value.Name);
  }
 

  

}

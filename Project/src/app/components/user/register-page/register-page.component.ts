import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MaxValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/service/books.service';
import { NotificationService } from 'src/app/service/notification.service';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  public signup:FormGroup;
  user:any;
  constructor(private fb:FormBuilder, private service:BooksService, private http:HttpClient, private router:Router,
     private notifiservice:NotificationService) { }
  signdata:any=[];
  ngOnInit(): void {
    this.signup=this.fb.group({
      
      Name:["",Validators.required],
      Email:["",Validators.required],
      MobileNO:["",Validators.required],
      password:["",Validators.required],
      RoleId:[2],
      gender:["",Validators.required],
      UserId:[]
    })
  
  }
  public register(){
    debugger;
    // this.http.post<any>('http://localhost:3000/signupuser', this.signup.value).subscribe(resp=>{
      this.service.register(this.signup.value).subscribe(response=>{
   
        console.log(response);
        this.notifiservice.showSuccess('Congratulations','Registered Successfully');
        this.router.navigate(['/login'])

    
      })
      
  }



}



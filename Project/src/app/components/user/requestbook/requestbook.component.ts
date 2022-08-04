
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { BooksService } from 'src/app/service/books.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-requestbook',
  templateUrl: './requestbook.component.html',
  styleUrls: ['./requestbook.component.css']
})
export class RequestbookComponent implements OnInit {
  forms: FormGroup;
  today= new Date();
  name=localStorage.getItem('username')
  no:any=0;
  constructor(private fb:FormBuilder, private service:BooksService, private route:Router, private notifiservice:NotificationService,
    private authservice:AuthService,private toastr:ToastrService) {
    
   }
  arryofdata:any=[];
data:any;

  ngOnInit(): void {
    this.forms=this.fb.group({
   
      username:['', Validators.required],
      BookName:['',Validators.required],
      Author:['',Validators.required],
     Date:['',Validators.required]
    })
    this.service.getrequest().subscribe(res=>{
      this.data=res;
      console.log(this.data);
  }) 


  this.forms.setValue({
    username:this.name,
    BookName:'',
    Author:'',
    Date:''

  })
}



    public onFormSubmit(datas:NgForm){
      // debugger;
        if(this.no<3){
          this.service.postRequest(datas).subscribe(data=>{
            this.arryofdata=data;
         this.no++;
            console.log(this.arryofdata.id);
       
          })
          this.toastr.success('', 'Successfully Requested Book', {
            positionClass: 'toast-top-center'
          });
      
        }else{
          this.toastr.error('', 'You cant Request more than 3', {
            positionClass: 'toast-top-center'
          });
       
        }
  
        }
  }

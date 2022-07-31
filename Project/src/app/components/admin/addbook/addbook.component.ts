import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminaddbookService } from 'src/app/service/adminaddbook.service';
import { BooksService } from 'src/app/service/books.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  forms: FormGroup;
  arryofdata:any=[];
  constructor(private fb:FormBuilder, private service:BooksService, private route:Router,
    private notifiservice:NotificationService, private services:AdminaddbookService,
    private toastr: ToastrService,) { }
  ngOnInit(): void {
    this.forms=this.fb.group({
  
      image:['', Validators.required],
      BookName:['',Validators.required],
      Author:['',Validators.required],
     Date:['',Validators.required]
    })
  }
  public onFormSubmit(forms:NgForm){
    this.services.postAdminBook(forms).subscribe(data=>{
      this.arryofdata=data;
      this.toastr.success('', 'Book Added Successfully', {
        positionClass: 'toast-top-center'
      });
      // this.notifiservice.showSuccess("You Have Added Book","Successfully")

    })
      }

}





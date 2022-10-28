import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminaddbookService } from 'src/app/service/adminaddbook.service';
import { BooksService } from 'src/app/service/books.service';
import { CategoryService } from 'src/app/service/category.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  public forms: FormGroup;
  public signup:FormGroup;
  cat:string="poem"
  constructor(private fb:FormBuilder, private service:BooksService, private route:Router,
    private notifiservice:NotificationService, private addBookService:AdminaddbookService,
    private toastr: ToastrService, private categoryService:CategoryService, private http:HttpClient) { }
  ngOnInit(): void {
    this.forms=this.fb.group({
      
      BookName:['',Validators.required],
      AuthorName:['',Validators.required],     
      Date:[Date,Validators.required],
      ImageUrl:['', Validators.required],
      BookId:[],    
       
     
    })
  }


 public postBook(){
    //debugger;
console.log(this.forms.value);
    this.addBookService.postAdminBook(this.forms.value).subscribe(data=>{
debugger;
      console.log(data);
      this.toastr.success('', 'Book Added Successfully', {
        positionClass: 'toast-top-center'
      });
    })
      }








}
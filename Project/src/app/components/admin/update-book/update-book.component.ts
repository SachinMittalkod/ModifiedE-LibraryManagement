import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Adminaddbook } from 'src/app/model/adminaddbook.model';
import { AdminaddbookService } from 'src/app/service/adminaddbook.service';
import { BooksService } from 'src/app/service/books.service';
import { NotificationService } from 'src/app/service/notification.service';


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  forms:FormGroup;
  editId:any;
  datas:any;
 hello:string="Ho dudees"
 updatebooks:any;
  constructor(private fb:FormBuilder, private service:BooksService, private route:Router,
    private notifiservice:NotificationService, private services:AdminaddbookService,
  ) { 
    this.services.subject.subscribe(response=>{
      this.editId=response;
    })
    this.forms=this.fb.group({
  
      image:[''],
      BookName:[],
      Author:[],
     Date:[]
    });
  }
  ngOnInit(): void {
    this.services.getBookId(this.editId).subscribe(response=>{
      this.forms=this.fb.group({
  
        image:[response['image']],
        BookName:[response['BookName']],
        Author:[response['Author']],
       Date:[response['Date']]
      });

    })
    
    // this.services.getbookid().subscribe(res=>{
    //   this.datas=res;
    //   console.log(this.datas);
    //  })
  }
  // ids:Adminaddbook;
  onEdit(){{
    console.log(this.editId)
    this.services.editAdminBook(this.editId,this.forms.value).subscribe(response=>{
      this.updatebooks=response
    });

    let currentUrl=this.route.url;
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate([currentUrl]);
    
    // window.location.reload();
  }



}
}

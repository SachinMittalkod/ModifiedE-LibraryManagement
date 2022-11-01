import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Adminaddbook } from 'src/app/model/adminaddbook.model';
import { AdminaddbookService } from 'src/app/service/adminaddbook.service';
import { BooksService } from 'src/app/service/books.service';
import { NotificationService } from 'src/app/service/notification.service';
import { ListofadminbooksComponent } from '../listofadminbooks/listofadminbooks.component';


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  forms:FormGroup;
  editId:any;
  datas:any;
  requestDetails:any;
  bookdetails:any;
 hello:string="Helloo dudees"
 updatebooks:any;
 receivedData:any;
 result:any;
 editdata:any;

  // constructor( @Inject (MAT_DIALOG_DATA) private data:any,
  //   private fb:FormBuilder, private service:BooksService, private route:Router,
  //   private notifiservice:NotificationService, private AddBookservice:AdminaddbookService,private _router : ActivatedRoute,
  //  ) {

  
  // }

  constructor(private fb:FormBuilder, private service:BooksService, private route:Router, private dialogref:MatDialogRef<UpdateBookComponent>,
    private notifiservice:NotificationService, private services:AdminaddbookService, private toasterservice:NotificationService,private toastr:ToastrService
  ) { 
    this.services.subject.subscribe(response=>{
      this.editId=response;
      console.log(this.editId + 'from service');
    })
    this.forms=this.fb.group({
  
      ImageUrl:[''],
      BookName:[''],
      AuthorName:[''],
      Date:[Date],
 
    })
}
 
//   ngOnInit(): void {
// // console.log(this.data);
// // this.result=this.data;
// // console.log(this.result);

// this.editdata=new FormGroup({
//   BookName: new FormControl(this.result['BookName'])
// })

//     this.AddBookservice.subject.subscribe(response=>{
//       this.editId=response;
//       console.log(this.editId);
// this.getBookId(this.editId);

//     })
//     this.forms=this.fb.group({
  
//     //   image:[''],
//     //   BookName:[''],
//     //   Author:[''],
//     //  Date:[Date]
//      BookName:['',Validators.required],
//      AuthorName:['',Validators.required],     
//      Date:[Date,Validators.required],
//      ImageUrl:['', Validators.required],
//      BookId:[]
 
//     });
//     // debugger;
//     this.AddBookservice.editBookById(this.result).subscribe(response=>{
//       this.forms=this.fb.group({
  
//         ImageUrl:[response['ImageUrl']],
//         BookName:[response['BookName']],
//         AuthorName:[response['AuthorName']],
//         Date:[response['Date']],
//         BookId:[response['BookId']]

//       // ImageUrl:[''],
//       //   BookName:[''],
//       //   AuthorName:[],
//       //  Date:[response['Date']],
   
//       });

//    })
    
    // this.AddBookservice.getbookid().subscribe(res=>{
    //   this.datas=res;
    //   console.log(this.datas);
    //  })

  //   this._router.paramMap.subscribe((parameterMap) => {
  //     const id = parameterMap.get('id');
  //     this.getRequest(id);
  //   });

  //   this.forms = this.fb.group({
  //     BookName:[''],
  //     AuthorName:[''],     
  //     Date:[Date],
  //     ImageUrl:[''],
  //   });

  // }

  // public getRequest(id:any) {
  //  this.AddBookservice.getAdminBookById(id).subscribe(resp=>{
  //   this.requestDetails = resp;
  //   console.log(this.requestDetails);
  //   this.putValue(resp);
  // })
  // }
  // putValue(data: Adminaddbook) {
  //   this.forms.patchValue({
  //     BookName: data.BookName,
  //     AuthrName:data.AuthorName,
  //     Date:data.Date,
  //     ImageUrl:data.ImageUrl
  //   })}
  // ids:Adminaddbook;

  // onEdit(){{
  //   console.log(this.editId)
  //   this.AddBookservice.editAdminBook(this.editId,this.forms.value).subscribe(response=>{
  //     this.updatebooks=response
  //   });

  //   // let currentUrl=this.route.url;
  //   // this.route.routeReuseStrategy.shouldReuseRoute = () => false;
  //   // this.route.onSameUrlNavigation = 'reload';
  //   // this.route.navigate([currentUrl]);
  //   window.location.reload();
  // }

 

  // }

  // getBookId(editId: any) {
  //   this.AddBookservice.editBookById(editId).subscribe(resp=>{
  //     this.bookdetails=resp;
  //   })

  // }

  // onEdit(forms:any  ){
  //   this.AddBookservice.editAdminBook(forms, this.bookdetails.editId).subscribe(resp=>{
  //     this.updatebooks=resp;
  //     console.log(this.updatebooks);
  //     window.location.reload(); 
  //   })
  // }




   ngOnInit(): void {
    this.services.getBookId(this.editId).subscribe(response=>{
      console.log(response);
      this.forms=this.fb.group({
  
        ImageUrl:[response['imageUrl']],
        BookName:[response['bookName']],
        AuthorName:[response['authorName']],
        Date:[response['date']]


       
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
    this.services.editAdminBook(this.editId, this.forms.value).subscribe(response=>{
      this.updatebooks=response
      console.log(this.updatebooks);
  
      //this.forms.reset();


      // let currentUrl=this.route.url;
      // this.route.routeReuseStrategy.shouldReuseRoute = () => false;
      // this.route.onSameUrlNavigation = 'reload';
      // this.route.navigate([currentUrl]);
     
    });
  

   //this.toasterservice.showSuccess('Congratulations','Updated successfully')
   this.toastr.success('', 'Updated Book successfully', {
    positionClass: 'toast-top-center'
  });
   this.dialogref.close('Update')
    let currentUrl=this.route.url;
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate([currentUrl]);
    
   
  }
  }
}



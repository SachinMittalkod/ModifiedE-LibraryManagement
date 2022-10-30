import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Adminaddbook } from 'src/app/model/adminaddbook.model';
import { Requestbook } from 'src/app/model/requestbook.model';
import { AdminaddbookService } from 'src/app/service/adminaddbook.service';
import { BooksService } from 'src/app/service/books.service';




@Component({
  selector: 'app-available-books',
  templateUrl: './available-books.component.html',
  styleUrls: ['./available-books.component.css']
})
export class AvailableBooksComponent implements OnInit {
 uId=Number (localStorage.getItem('userId'));
  term:string="";
  column=["BookId","ImageUrl","BookName" ,"AuthorName" ]
    constructor(private service:BooksService,private fb:FormBuilder, private adminservice:AdminaddbookService,private toastr:ToastrService) { }
  //user:Adminaddbook;
  user:any;
 
   today = new Date();
  dd = String(this.today.getDate()).padStart(2, '0');
   mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
   yyyy = this.today.getFullYear();
  
  todays = this.yyyy + '/' + this.mm + '/' + this.dd 
  no:any=0;
  forms:FormGroup;
  //Form:any;
 
 

  books:any
  count: number = 0;
 // tomorrow = new Date(this.today.getTime().getDate() + (168 * 60 * 60 * 1000));
  formData:any;
  userzid:any;
    ngOnInit(): void {
      console.log(this.todays);
      console.log(this.uId);
       this.forms=this.fb.group({
       // bookName:['',Validators.required],
        bookId:['',Validators.required],
        userId:['', Validators.required],
        date:['', Validators.required],
       // authorName:['', Validators.required]
       })
       this.getAllBooks();

       this.forms.controls['userId'].setValue(localStorage.getItem('userId'));
      //console.log(uId);
    
      this.adminservice.getAllBookDetails().subscribe((response)=>{
        console.log(response);
        this.user=response;
      })
    }

  getAllBooks() {
  this.adminservice.getAllBookDetails().subscribe({
    next:(resp)=>{
      console.log(resp);
      this.books=resp;
    },  error:(err)=>{
      // alert("Error while fetching the data")
      this.toastr.error("Error while fetching data please check ");
    }

  })
  }


    public requestBook(data:any){
      debugger;
    
      this.forms.controls['bookId'].setValue(data.bookId);
     
      this.forms.controls['date'].setValue(this.todays);
      this.forms.controls['userId'].setValue(this.uId)
      this.sendRequest(this.count);
      this.count++;
      console.log(this.forms.value)
  


    }

    sendRequest(no: any) {
      debugger;
      if (no > 2) {
        this.toastr.error('', '3 Request only', {
          positionClass: 'toast-top-center'
        });
      }
      else {
       
       
          console.log(this.forms.value);
          
        //  this.requestapi.RequestBook(this.requestForm.value)
        //     .subscribe({
        //       next: (res) => {
        //         this.reqBook = res;
        //         this.toastr.success('', 'Request Sent !!', {
        //           positionClass: 'toast-top-center'
        //         });
        //       }
        //     })
        this.adminservice.postUserRequestAPI(this.forms.value).subscribe(respo=>{
          this.toastr.success("Sucessfully Book Requested")
         // alert("Book has been requested")
          console.log(respo);
        })
       
      }
    }

    public storeUserInfo():void {
      sessionStorage.setItem('bookId', this.user);

    }

}





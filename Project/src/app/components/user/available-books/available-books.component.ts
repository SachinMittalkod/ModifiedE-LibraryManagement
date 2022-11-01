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
 
  currentDate = new Date();
  day = this.currentDate.getDate();
  month = this.currentDate.getMonth() + 1;
  year = this.currentDate.getFullYear();
  hour = this.currentDate.getHours();
  minute = this.currentDate.getMinutes();
  seconds = this.currentDate.getSeconds();
  // returndt = new Date(`${this.month} ${this.day+3},  ${this.year} ${this.hour}:${this.minute}+${this.seconds}`).getDate();
  returndt = this.day + 5 + "/" + this.month + "/" + this.year
  //returnDate = (this.year+'-'+this.month+'-'+(Number(this.day)+3)+'T'+this.hour+':'+this.minute+':'+this.seconds)
  date = (this.year + '-' + this.month + '-' + (this.day) + 'T' + this.hour + ':' + this.minute + ':' + this.seconds)


  no:any=0;
  forms:FormGroup;
  //Form:any;
 
 

  books:any
  count: number = 0;
 // tomorrow = new Date(this.today.getTime().getDate() + (168 * 60 * 60 * 1000));
  formData:any;
  userzid:any;
    ngOnInit(): void {
      console.log(this.date);
      console.log(this.uId);
       this.forms=this.fb.group({
       // bookName:['',Validators.required],
        bookId:['',Validators.required],
        userId:['', Validators.required],
        date:['', Validators.required]
       //returnDate: [this.returndt],
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
     
      this.forms.controls['date'].setValue(this.date);
      this.forms.controls['userId'].setValue(this.uId);
      //this.forms.controls['returnDate'].setValue(this.returndt);
      this.sendRequest(this.count);
      this.count++;
      console.log(this.forms.value)
  


    }

    sendRequest(no: any) {
      debugger;
      if (no > 2) {
        this.toastr.error('', 'You can request only 3 books', {
          positionClass: 'toast-top-center'
        });
      }
      else {
       
       
          console.log(this.forms.value);
          

        this.adminservice.postUserRequest(this.forms.value).subscribe(respo=>{
          
         // alert("Book has been requested")
          console.log(respo);
        })
        this.toastr.success("Sucessfully Book Requested")
       
      }
    }

    public storeUserInfo():void {
      sessionStorage.setItem('bookId', this.user);

    }

}





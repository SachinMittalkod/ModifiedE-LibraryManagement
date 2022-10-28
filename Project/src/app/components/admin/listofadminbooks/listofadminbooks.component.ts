import { Component, inject, OnInit } from '@angular/core';
import { BooksService } from '../../../service/books.service';
// import { User } from '../../Model/book.model';
import { Requestbook } from 'src/app/model/requestbook.model';
import { AdminaddbookService } from 'src/app/service/adminaddbook.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateBookComponent } from '../update-book/update-book.component';
import { NgForm } from '@angular/forms';
import { Adminaddbook } from 'src/app/model/adminaddbook.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-listofadminbooks',
  templateUrl: './listofadminbooks.component.html',
  styleUrls: ['./listofadminbooks.component.css'],

})
export class ListofadminbooksComponent implements OnInit {
  
  term: string = '';
 // column = ['image', 'BookName', 'author', 'imageUrl'];
  column=["BookId","ImageUrl","BookName" ,"AuthorName" ]
  //users: Requestbook[] = [];
  users:any;
  ids: Adminaddbook;
  updatedata:any;

  constructor(
    private service: BooksService,
    private adminservice: AdminaddbookService, private dialog:MatDialog,
    private route:Router
  ) {}

  

  ngOnInit(): void {
  
    this.adminservice.getAllBookDetails().subscribe((response) => {
      this.users = response;
      console.log(this.users);
    });

    
    // console.log(this.editdata);
  }

  deleteBook(Id: number) {
   debugger
    this.adminservice.deleteAdminBook(Id).subscribe((resp) => {
      console.log(resp);

      let currentUrl=this.route.url;
      this.route.routeReuseStrategy.shouldReuseRoute = () => false;
      this.route.onSameUrlNavigation = 'reload';
      this.route.navigate([currentUrl]);

      //window.location.reload();
      
      // this.adminservice.getAdminBook().subscribe((response) => {
      //   this.users = response;
      //   console.log(this.users);
      // });
      
   

      
    });
    
  }

  // opendialog(id: any){
  //   this.adminservice.editBookById(id).subscribe(resp=>{
  //     this.updatedata=resp;
  //     console.log(this.updatedata);
      
  // this.dialog.open(UpdateBookComponent, {
  //   width:'450px',
  //    data: { alldata: this.updatedata }
  
  // });
  //   });

 
    
  // }

  opendialog(id: any){
    this.dialog.open(UpdateBookComponent, {
      width:'450px',

    });
    
  this.adminservice.sharedata(id);
    this.adminservice.getBookId(id);
    console.log(id);
}
}

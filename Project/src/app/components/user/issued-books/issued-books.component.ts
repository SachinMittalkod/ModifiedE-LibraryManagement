import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../service/books.service';
// import { User } from '../../Model/book.model';
import { Requestbook } from 'src/app/model/requestbook.model';
import { AdminaddbookService } from 'src/app/service/adminaddbook.service';
import { MatDialog } from '@angular/material/dialog';

import { NgForm } from '@angular/forms';
import { Adminaddbook } from 'src/app/model/adminaddbook.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-issued-books',
  templateUrl: './issued-books.component.html',
  styleUrls: ['./issued-books.component.css']
})
export class IssuedBooksComponent implements OnInit {

  term: string = '';
  column = ['image', 'BookName', 'author', 'imageUrl'];
  users: Requestbook[] = [];
  ids: Adminaddbook;
 
  constructor(
    private service: BooksService,
    private adminservice: AdminaddbookService, private dialog:MatDialog,
    private route:Router
  ) {}

  

  ngOnInit(): void {
  
    this.adminservice.issuedBook().subscribe((response) => {
    this.users = response;
      console.log(this.users);
    });

    
    // console.log(this.editdata);
  }

  deleteit(id: number) {
   
    this.adminservice.deleteAdminBook(id).subscribe((resp) => {
      console.log(resp);

      // this.adminservice.getAdminBook().subscribe((response) => {
      //   this.users = response;
      //   console.log(this.users);
      // });
      
   

      
    });
    
  }



}


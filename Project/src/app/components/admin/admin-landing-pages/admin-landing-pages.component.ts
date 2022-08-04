import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BooksService } from 'src/app/service/books.service';
import { AddbookComponent } from '../addbook/addbook.component';

@Component({
  selector: 'app-admin-landing-pages',
  templateUrl: './admin-landing-pages.component.html',
  styleUrls: ['./admin-landing-pages.component.css']
})
export class AdminLandingPagesComponent implements OnInit {
  number:any;
  login:string;
  constructor(private dialog:MatDialog, private service:BooksService ) { 

  }

  ngOnInit(): void {
    login:true;
  }
  openDialog(){
    this.dialog.open(AddbookComponent, {
  
      height:'550px'
      
     });
  }
}

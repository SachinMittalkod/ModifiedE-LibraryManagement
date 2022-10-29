import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { RequestbookComponent } from '../requestbook/requestbook.component';
import { BooksService } from 'src/app/service/books.service';
import { AdminaddbookService } from 'src/app/service/adminaddbook.service';
import { Requestbook } from 'src/app/model/requestbook.model';
import { Router } from '@angular/router';
import { Adminaddbook } from 'src/app/model/adminaddbook.model';

@Component({
  selector: 'app-loggedin-page',
  templateUrl: './loggedin-page.component.html',
  styleUrls: ['./loggedin-page.component.css']
})
export class LoggedinPageComponent implements OnInit {

  name:any;
  constructor(private dialog:MatDialog,private service:BooksService,private adminservice: AdminaddbookService,private router:Router) { }
  users: Adminaddbook[] = [];
  term:string=" ";
  confirm:string="Cancel";
  ngOnInit(): void {
    // this.adminservice.getAdminBook().subscribe((response) => {
    //   this.users = response;
    //   console.log(this.users);
  
    // });
    this.name=sessionStorage.getItem('Name');
    console.log(this.name);
  }
  
  openDialog() {
    this.dialog.open(RequestbookComponent, {

      height:'550px'
    
    });
  }
  url="";
  onFileSelected(event: any){
    if(event.target.files){
      var reader=new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(eventpara:any)=>{
        this.url=eventpara.target.result;
      }
    }
  }


}


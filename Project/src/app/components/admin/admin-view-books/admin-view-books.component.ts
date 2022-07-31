import { Component, OnInit } from '@angular/core';
import { Adminaddbook } from 'src/app/model/adminaddbook.model';
import { AdminaddbookService } from 'src/app/service/adminaddbook.service';

@Component({
  selector: 'app-admin-view-books',
  templateUrl: './admin-view-books.component.html',
  styleUrls: ['./admin-view-books.component.css']
})
export class AdminViewBooksComponent implements OnInit {

  term:string="";
  column=["id","image","BookName" ,"author" ,"imageUrl"]
    constructor(private service:AdminaddbookService) { }
  users:Adminaddbook[]=[];
    ngOnInit(): void {
      // this.service.getusers().subscribe((response)=>{
      //   this.users=response;
      this.service.getAdminBook().subscribe((response)=>{
        this.users=response;
      })
    }
}

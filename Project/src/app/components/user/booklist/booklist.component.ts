import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../service/books.service';
import { Requestbook } from 'src/app/model/requestbook.model';
import { AdminaddbookService } from 'src/app/service/adminaddbook.service';


@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})


export class BooklistComponent implements OnInit {
  date:any;
  term:string="";
  reqdate:Date;
column=["id","image","BookName" ,"author" ,"imageUrl"]
  constructor(private service:BooksService, private adminservice:AdminaddbookService) { }
users:Requestbook[]=[];

today= new Date();

tomorrow = new Date(this.today.getTime() + (72 * 60 * 60 * 1000));

  ngOnInit(): void {  
    this.service.issuedBooks().subscribe((response)=>{
      this.users=response;
    
      console.log(this.users);
    })
  } 
}


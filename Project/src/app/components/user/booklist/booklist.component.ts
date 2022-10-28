import { Component, OnInit, ViewChild } from '@angular/core';
import { BooksService } from '../../../service/books.service';
import { Requestbook } from 'src/app/model/requestbook.model';
import { AdminaddbookService } from 'src/app/service/adminaddbook.service';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ColDef, RowHeightParams } from 'ag-grid-community';




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

dataSource: MatTableDataSource<any>;
@ViewChild(MatPaginator) paginator !: MatPaginator;
@ViewChild(MatSort) sort !: MatSort;
  constructor(private service:BooksService, private adminservice:AdminaddbookService, private http:HttpClient) { }
users:Requestbook[]=[];
rowData:any;
history:any;
today= new Date();

tomorrow = new Date(this.today.getTime() + (72 * 60 * 60 * 1000));

displayedColumns: any[] = ['Slno','username','Author', 'BookName', 'Date','ReturnDate','today','IssueDate' ];
  ngOnInit(): void {  
    // this.service.issuedBooks().subscribe((response)=>{
    //   this.users=response;
    
    //   console.log(this.users);
    this.adminservice.issuedBook().subscribe((response)=>{
      this.users=response;
      this.rowData=response;
      this.history=response;
      console.log(this.users);
      this.dataSource=new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  } 

  defaultColDef:ColDef=
    {sortable:true, filter:true}

  //Dynamic implementation
  colDefs:any=[
    {headerName:'Issued Id', field: 'issuedId',  },
    {headerName:'Book Id', field: 'bookId'} ,
    {headerName:'Book Name', field: 'bookName'},
    {headerName:'Issued Date', field: 'issueDate'},   
    {headerName:'Return Date', field: 'returnDate'},
 
   // {headerName:'gender', field: 'issueDate'}   
  ] 
 
  getRowHeight(params: RowHeightParams): number | undefined | null {
    return params.data.rowHeight;
  }
}


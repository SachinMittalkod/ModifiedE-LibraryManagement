import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/service/books.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Requestbook } from 'src/app/model/requestbook.model';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-request-history',
  templateUrl: './request-history.component.html',
  styleUrls: ['./request-history.component.css']
})
export class RequestHistoryComponent implements OnInit {
  reqbookdata:any;
  history:any;
  
  displayedColumns: any[] = ['Slno','username','Author', 'BookName', 'Date', ];


  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private service:BooksService) { }

  ngOnInit(): void {
    this.service.getrequest().subscribe(data=>{
      this.reqbookdata=data;
      console.log(this.reqbookdata);
    })

    this.service.getreqhistory().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this.history=data;
      console.log(this.history);
    })
  }


}

import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/service/books.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Requestbook } from 'src/app/model/requestbook.model';
import { MatSort } from '@angular/material/sort';
import { ColDef } from 'ag-grid-community';


@Component({
  selector: 'app-request-history',
  templateUrl: './request-history.component.html',
  styleUrls: ['./request-history.component.css']
})
export class RequestHistoryComponent implements OnInit {
  reqbookdata:any;
  history:any;
  rowData:any;
  displayedColumns: any[] = ['Slno','username','Author', 'BookName', 'Date', ];


  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private service:BooksService) { }

  ngOnInit(): void {
    this.service.getrequest().subscribe(data=>{
      this.reqbookdata=data;
      this.rowData=data;
      console.log(this.rowData);
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
//Static Data Implementaion of Ag-grid

  // rowData:any[]=[
  //   {make:'TATA', model:'Nexon', price:35000},
  //   {make:'Ford', model:'Mondeo', price:20000},
  //   {make:'Hyndai', model:'Creta', price:18000},
  //   {make:'Porshe', model:'Boxster', price:63000},
  //   {make:'Porshe', model:'Boxster', price:59000},
  //   {make:'Porshe', model:'Boxster', price:67000},
  //   {make:'Porshe', model:'Boxster', price:53000},
  //   {make:'Porshe', model:'Boxster', price:98000},
  //   {make:'Porshe', model:'Boxster', price:73000}
  // ];
  
  
  // colDefs: ColDef[]=[
  //   {field:'make'},
  //   {field:'model'},
  //   {field:'price'},
  // ]; 

  defaultColDef:ColDef=
    {sortable:true, filter:true}

  //Dynamic implementation
  colDefs:any=[
    {headerName:'Sl.No', field: 'id',height:20},
    {headerName:'User Name', field: 'username'},
    {headerName:'Author', field: 'Author'},
    {headerName:'Book Name', field: 'BookName'},
    {headerName:'Date', field: 'Date'}   
  ] 
 


}

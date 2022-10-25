import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ColDef, RowHeightParams } from 'ag-grid-community';
import { BooksService } from 'src/app/service/books.service';
import { UserserviceService } from 'src/app/service/userservice.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-registered-users-list',
  templateUrl: './registered-users-list.component.html',
  styleUrls: ['./registered-users-list.component.css']
})
export class RegisteredUsersListComponent implements OnInit {

  userApiUrl=environment.userApiUrl;
  reqbookdata:any;
  history:any;
  rowData:any;
  displayedColumns: any[] = ['Slno','Name', 'MobileNo', 'Email','gender'];


  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private service:UserserviceService,private http: HttpClient) { }

  ngOnInit(): void {
    this.service.getAllRegisteredUsers().subscribe(data=>{
      this.reqbookdata=data;
      this.rowData=data;
      console.log(this.rowData);
      console.log(this.reqbookdata);
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this.history=data;
      console.log(this.history);
    })
  }

  defaultColDef:ColDef=
    {sortable:true, filter:true}

  //Dynamic implementation
  colDefs:any=[
    {headerName:'Sl.No', field: 'userId',  },
    {headerName:'User Name', field: 'name'},
    {headerName:'MobileNo', field: 'mobileNo'},
    {headerName:'Email', field: 'email'},
    {headerName:'gender', field: 'gender'}   
  ] 
 
  getRowHeight(params: RowHeightParams): number | undefined | null {
    return params.data.rowHeight;
  }

}

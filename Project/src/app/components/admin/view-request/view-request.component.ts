import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { ToastrService } from 'ngx-toastr';
import { Requestbook } from 'src/app/model/requestbook.model';
import { AdminaddbookService } from 'src/app/service/adminaddbook.service';
import { BooksService } from 'src/app/service/books.service';
import { NotificationService } from 'src/app/service/notification.service';
import { UserserviceService } from 'src/app/service/userservice.service';



@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})



export class ViewRequestComponent implements OnInit {
  i:number=0;
  constructor(private service:BooksService, private route:Router, private userservice:UserserviceService, private adminAddService:AdminaddbookService,
   private notifiservice:NotificationService) { }
  book:Requestbook[]=[];
  term:any="";
  posthistory:any;
  ngOnInit(): void {
  // this.userservice.getUserRequest().subscribe(resp=>{
  //   this.book=resp;
  //   console.log(this.book);
  // })
  this.getRequestList();
  }

 public delete(id:number){
  debugger;
this.userservice.deleteUserRequest(id).subscribe({
  next:res=>{
  console.log(res);
  this.getRequestList();

},})


this.notifiservice.showSuccess('','Deleted successfully')
  let currentUrl=this.route.url;
  this.route.routeReuseStrategy.shouldReuseRoute = () => false;
  this.route.onSameUrlNavigation = 'reload';
  this.route.navigate([currentUrl]);
  }

  public getRequestList(){
    this.userservice.getUserRequest().subscribe(resp=>{
      this.book=resp;
      console.log(this.book);
    })
  }


  public accepted(datass:any){
    debugger;
    console.log(datass.requestId);
    datass.id=0;
    this.adminAddService.PostIssuedBook(datass).subscribe({
      next:data=>{
      this.posthistory=data;
     

  this.userservice.deleteUserRequest(datass.requestId).subscribe(resp=>{
    

  })

    },})
    this.notifiservice.showSuccess('','Accepted successfully')
  // this.dialogref.close('Update')
  let currentUrl=this.route.url;
  this.route.routeReuseStrategy.shouldReuseRoute = () => false;
  this.route.onSameUrlNavigation = 'reload';
  this.route.navigate([currentUrl]);

  }



}

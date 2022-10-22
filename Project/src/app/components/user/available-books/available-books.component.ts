import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Requestbook } from 'src/app/model/requestbook.model';
import { AdminaddbookService } from 'src/app/service/adminaddbook.service';
import { BooksService } from 'src/app/service/books.service';




@Component({
  selector: 'app-available-books',
  templateUrl: './available-books.component.html',
  styleUrls: ['./available-books.component.css']
})
export class AvailableBooksComponent implements OnInit {
  term:string="";
  column=["id","image","BookName" ,"author" ,"imageUrl"]
    constructor(private service:BooksService, private adminservice:AdminaddbookService,private toastr:ToastrService) { }
  users:Requestbook[]=[];
  today= new Date();
  no:any=0;
  tomorrow = new Date(this.today.getTime() + (168 * 60 * 60 * 1000));
  
    ngOnInit(): void {
      
    
      this.adminservice.getAdminBook().subscribe((response)=>{
        this.users=response;
      })

    }

  
    public requestBook(item:any){
     debugger;
      if(this.no<3){
        this.adminservice.postUserRequets(item).subscribe(resp=>{
          console.log(resp);
          this.no++;
     })
     this.toastr.success('', 'Successfully Requested Book', {
      positionClass: 'toast-top-center'
    })
      }else{
        this.toastr.error('', 'You cant Request more than 3', {
          positionClass: 'toast-top-center'
        });
      }
 
    }

}





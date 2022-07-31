import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BooksService } from 'src/app/service/books.service';
import { AddbookComponent } from '../addbook/addbook.component';



@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrls: ['./admin-landing-page.component.css']
})
export class AdminLandingPageComponent implements OnInit {
  showFiller = true;
  number:any;
 
  constructor(private dialog:MatDialog, private service:BooksService ) { 

  }
 
  ngOnInit(): void {
    this.service.getrequest().subscribe(daata=>{
      this.number=daata;
      console.log(this.number);
          })
  }
  openDialog(){
    this.dialog.open(AddbookComponent, {
  
      height:'550px'
      
     });
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-navbar-master',
  templateUrl: './navbar-master.component.html',
  styleUrls: ['./navbar-master.component.css']
})
export class NavbarMasterComponent implements OnInit {

  constructor(private matdialog:MatDialog,public services :AuthService, private router:Router) { }

  ngOnInit(): void {
    
  }




}

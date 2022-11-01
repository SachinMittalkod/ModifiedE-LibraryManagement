import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './components/admin/addbook/addbook.component';

import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { LoggedinPageComponent } from './components/user/user-landing/loggedin-page.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { RegisterPageComponent } from './components/user/register-page/register-page.component';
import { UserloginComponent } from './components/user/userlogin/userlogin.component';
import { ViewRequestComponent } from './components/admin/view-request/view-request.component';
import { AdminViewBooksComponent } from './components/admin/admin-view-books/admin-view-books.component';
import { ListofadminbooksComponent } from './components/admin/listofadminbooks/listofadminbooks.component';
import { UpdateBookComponent } from './components/admin/update-book/update-book.component';
import { BooklistComponent } from './components/user/booklist/booklist.component';
import { IssuedBooksComponent } from './components/user/issued-books/issued-books.component';
import { RequestHistoryComponent } from './components/admin/request-history/request-history.component';
import { AdminLandingPagesComponent } from './components/admin/admin-landing-pages/admin-landing-pages.component';
import { NavbarMasterComponent } from './shared/navbar/navbar-master.component';
import { HomeComponent } from './components/home/home.component';
import { AvailableBooksComponent } from './components/user/available-books/available-books.component';
import { GaurdGuard } from './shared/gaurd.guard';
import { RegisteredUsersListComponent } from './components/admin/registered-users-list/registered-users-list.component';
//import { AuthroleService } from './shared/authrole.service';






const routes: Routes = [
  {path: '', redirectTo:'login' ,pathMatch:'full'},
  // {path:'home',component:NavbarComponent, }, 
  {path:'home',component:NavbarMasterComponent,children:[{path:'mainhome', component:HomeComponent}] }, 
  {path:'adminlogin',canActivate:[GaurdGuard],component:AdminLoginComponent}, 
 
  {path:'login',component:UserloginComponent},  
  {path:'userlanding', component:LoggedinPageComponent,canActivate:[GaurdGuard],children:[
    // 
    {path:'booklist', component:BooklistComponent},
    // {path:'availablebooks', component:IssuedBooksComponent},
    {path:'requesthistory' ,component:RequestHistoryComponent},

    {path:'availablebooks' , component:AvailableBooksComponent}
  ]},

 
  {path:'addbook', component:AddbookComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'update/:id', component:UpdateBookComponent},
  {path:'adminlanding', component:AdminLandingPagesComponent,canActivate:[GaurdGuard], children:[
    //
    {path:'listofUsers', component:RegisteredUsersListComponent},
    {path:'adminlistbooks' , component:ListofadminbooksComponent},
    {path:'viewrequest', component:ViewRequestComponent},
  {path:'requesthistory', component:RequestHistoryComponent}]},
  {path:'adminviewbook', component:AdminViewBooksComponent},
  {path:'**',component:PagenotfoundComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






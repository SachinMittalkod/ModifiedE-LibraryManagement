import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './components/admin/addbook/addbook.component';
import { AdminLandingPageComponent } from './components/admin/admin-landing-page/admin-landing-page.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { LoggedinPageComponent } from './components/user/loggedin-page/loggedin-page.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { RegisterPageComponent } from './components/user/register-page/register-page.component';
import { UserloginComponent } from './components/user/userlogin/userlogin.component';
import { ViewRequestComponent } from './components/admin/view-request/view-request.component';
import { NavbarComponent } from './Shared/Navbar/navbar.component';
import { AdminViewBooksComponent } from './components/admin/admin-view-books/admin-view-books.component';
import { ListofadminbooksComponent } from './components/admin/listofadminbooks/listofadminbooks.component';
import { UpdateBookComponent } from './components/admin/update-book/update-book.component';
import { GaurdGuard } from './Shared/gaurd.guard';
import { BooklistComponent } from './components/user/booklist/booklist.component';
import { IssuedBooksComponent } from './components/user/issued-books/issued-books.component';
import { RequestHistoryComponent } from './components/admin/request-history/request-history.component';





const routes: Routes = [
  {path: '', redirectTo:'home' ,pathMatch:'full'},
  {path:'home',component:NavbarComponent, }, 
  {path:'adminlogin',component:AdminLoginComponent},
  {path:'login',component:UserloginComponent},  
  {path:'afterlogin', component:LoggedinPageComponent, children:[
    // canActivate:[GaurdGuard], 
    {path:'availablebooks', component:IssuedBooksComponent},
  ]},
  {path:'booklist', component:BooklistComponent},
 
  {path:'addbook', component:AddbookComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'update', component:UpdateBookComponent},

  
  // canActivate:[GaurdGuard] ,
  {path:'adminlanding', component:AdminLandingPageComponent,children:[
   
    {path:'adminlistbooks' , component:ListofadminbooksComponent},
    {path:'viewrequest', component:ViewRequestComponent},
  {path:'requesthistory', component:RequestHistoryComponent}]},
  // {path:'viewrequest', component:ViewRequestComponent},
  {path:'adminviewbook', component:AdminViewBooksComponent},
  // {path:'adminlistbooks' , component:ListofadminbooksComponent},
  {path:'**',component:PagenotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






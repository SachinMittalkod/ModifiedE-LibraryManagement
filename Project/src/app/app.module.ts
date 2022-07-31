
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterPageComponent } from './components/user/register-page/register-page.component';
import { FormsModule } from '@angular/forms';
// import { MaterialModule } from './material/material.module';
import { MaterialModule } from '../app/Shared/material/material.module'
import { UserloginComponent } from './components/user/userlogin/userlogin.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { LoggedinPageComponent } from './components/user/loggedin-page/loggedin-page.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './Shared/Navbar/navbar.component';
import { BooklistComponent } from './components/user/booklist/booklist.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { RequestbookComponent } from './components/user/requestbook/requestbook.component';
import { AdminLandingPageComponent } from './components/admin/admin-landing-page/admin-landing-page.component';
import { ViewRequestComponent } from './components/admin/view-request/view-request.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddbookComponent } from './components/admin/addbook/addbook.component';
import { ToastrModule } from 'ngx-toastr';
import { AdminViewBooksComponent } from './components/admin/admin-view-books/admin-view-books.component';
import { ListofadminbooksComponent } from './components/admin/listofadminbooks/listofadminbooks.component';
import { UpdateBookComponent } from './components/admin/update-book/update-book.component';
import { RequestHistoryComponent } from './components/admin/request-history/request-history.component';
import { NavbarMasterComponent } from './Shared/navbar-master/navbar-master.component';
import { IssuedBooksComponent } from './components/user/issued-books/issued-books.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    UserloginComponent,
    AdminLoginComponent,  
    LoggedinPageComponent,
    PagenotfoundComponent,

    
    NavbarComponent,
    BooklistComponent,
    RequestbookComponent,
    AdminLandingPageComponent,
    ViewRequestComponent,
    AddbookComponent,
    AdminViewBooksComponent,
    ListofadminbooksComponent,
    UpdateBookComponent,
    RequestHistoryComponent,
    NavbarMasterComponent,
    IssuedBooksComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    MatCardModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot(),
    FlexLayoutModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





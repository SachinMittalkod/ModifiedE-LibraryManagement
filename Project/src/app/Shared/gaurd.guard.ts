import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { BooksService } from '../service/books.service';

@Injectable({
  providedIn: 'root'
})
export class GaurdGuard implements CanActivate {
  constructor(private authservices:AuthService, private router:Router){}
  

      canActivate(
    
        route: ActivatedRouteSnapshot,
    
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
          if(this.authservices.isAdmin){
    
        return true;
    
          }
    
          else if(this.authservices.isUser){
    
            return true;
    
          }
    
          else{
    
            this.router.navigate(['/login']);
    
          return false;
    
          }
    
      }


        
  }
  

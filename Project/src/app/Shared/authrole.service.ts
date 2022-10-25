// import { Injectable } from '@angular/core';

// import {
//   ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree,
// } from '@angular/router';
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthroleService implements CanActivate {
//   roleId = sessionStorage.getItem('role');

//   constructor(private route : Router) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot,
//   ): boolean {
//     if (this.roleId == '1' || this.roleId == '2') {
//       return true;
//     }
//     this.route.navigate(['login']);
//     return false;
//   }

// }

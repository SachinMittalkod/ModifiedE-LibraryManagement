// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  adminAddurl:'http://localhost:3000/AdminAddbooks',
  baseUrl: 'http://localhost:3000/Books',
  reqbookurl: 'http://localhost:3000/reqbook',
  signupurl: 'http://localhost:3000/signupuser',
  adminurl: 'http://localhost:3000/admindata',
  adminaddbooks: 'http://localhost:3000/AdminAddbooks',
  requsetedhistory: 'http://localhost:3000/reqhistory',
  poemurl: 'http://localhost:3000/poems',

  //from  WebApi service//
  baseApiUrl:'https://localhost:44381/api/User',
  //postBookApiUrl:'https://localhost:44381/api/Book',
  postBookApiUrl:'https://localhost:44381/api/Book',
  UserRequestAPI:'https://localhost:44381/api/UserRequest',
  IssuedBook:'https://localhost:44381/api/IssuedBook',
  LoginApi:'https://localhost:44381/api/Login'
  
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

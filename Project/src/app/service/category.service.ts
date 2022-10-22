import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
// poemurl='http://localhost:3000/poems'
  constructor(private http:HttpClient) { }

  poemurl=environment.poemurl;

public postCategory(data:any):Observable<Category>{
return this.http.post<Category>(this.poemurl,data)
}
}

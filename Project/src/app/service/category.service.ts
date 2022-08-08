import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
poemurl='http://localhost:3000/poems'
  constructor(private http:HttpClient) { }

public postCategory(data:any):Observable<Category>{
return this.http.post<Category>(this.poemurl,data)
}
}

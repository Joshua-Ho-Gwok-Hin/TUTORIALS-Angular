import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http: HttpClient) { }

  getAllBooksByCategory(id: number) {
    return this.http.get(`http://localhost:8080/api/categories/${id}/books`);
  }

  getAllCategoriesFromBook(id: number) {
    return this.http.get(`http://localhost:8080/api/books/${id}/categories`);
  }

}

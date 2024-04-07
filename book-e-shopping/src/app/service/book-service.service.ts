import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookDetails } from '../model/bookDetails';
import { BookCategory } from '../model/bookCategory';


@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http: HttpClient) { }

  getBook(id: number) {
    return this.http.get(`http://localhost:8080/api/books/${id}`);
  }

  getAllBooks() {
    return this.http.get('http://localhost:8080/api/books/all');
  }

  getAllCategoriesFromBook(id: number) {
    return this.http.get(`http://localhost:8080/api/books/${id}/categories`);
  }

  // addToCart(){
  //   return this.http.get('http://localhost:8080/api/books/1/cart');
  // }

  getAllBooksByCategory(id: number) {
    return this.http.get(`http://localhost:8080/api/categories/${id}/books`);
  }

  getAllCategory() {
    return this.http.get('http://localhost:8080/api/categories');
  }

  searchBook(searchString: string) {
    return this.http.get(`http://localhost:8080/api/books/search?query=${searchString}`);
  }

  save(book: BookDetails) {
    return this.http.post('http://localhost:8080/api/books/create', book);
  }

  update(book: BookDetails) {
    console.log(book);
    return this.http.post('http://localhost:8080/api/books/update', book);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8080/api/books/${id}`);
  }

  addCategoryToBook(bookId: number, category: BookCategory) {
    return this.http.post(`http://localhost:8080/api/books/${bookId}/categories`, category);
  }

  deleteCategory(id: number) {
    return this.http.delete(`http://localhost:8080/api/categories/${id}`);
  }

  deleteCategoryFromBook(bookId: number, c: BookCategory) {
    return this.http.delete(`http://localhost:8080/api/books/${bookId}/categories`);
  }

}

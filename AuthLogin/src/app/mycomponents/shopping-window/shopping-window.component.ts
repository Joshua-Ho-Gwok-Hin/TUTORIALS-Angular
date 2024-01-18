import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookCategory } from 'src/app/model/bookCategory';
import { BookDetails } from 'src/app/model/bookDetails';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { BookServiceService } from 'src/app/service/book-service.service';

@Component({
  selector: 'app-shopping-window',
  templateUrl: './shopping-window.component.html',
  styleUrls: ['./shopping-window.component.css']
})
export class ShoppingWindowComponent implements OnInit {

  isAdmin: boolean = false;
  books: BookDetails[] = [];
  categories: BookCategory[] = [];
  @Input() c?: BookCategory;
  @Input() b?: BookDetails;

  public searchString = "";

  selectedCategory?: BookCategory;
  searchQuery?: BookDetails;

  constructor(
    private authService: AuthServiceService,
    private bookService: BookServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllCategory();
    this.isAdmin = this.authService.isAdmin();
    console.log(this.isAdmin);
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getAllBooks().subscribe({
      next: (response: any) => {
        this.books = response;
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  getAllCategoriesOfBook(book: BookDetails) {
    this.bookService.getAllCategoriesFromBook(book.id).subscribe({
      next: (response: any) => {
        this.books = response;
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  onSelect(category: BookCategory): void {
    this.selectedCategory = category;
    console.log(this.selectedCategory);
  }

  getAllCategory() {
    this.bookService.getAllCategory().subscribe({
      next: (response: any) => {
        this.categories = response;
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  searchBook(searchString: string) {
    console.log(searchString);
    this.bookService.searchBook(searchString).subscribe({
      next: (response: any) => {
        this.books = response;
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  getAllBooksByCategory(category: BookCategory) {
    console.log(category.id);
    this.bookService.getAllBooksByCategory(category.id).subscribe({
      next: (response: any) => {
        this.books = response;
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  edit(book: BookDetails) {
    this.router.navigate(['/edit', book.id]);
  }


  delete(book: BookDetails) {
    this.bookService.delete(book.id).subscribe({
      next: (response: any) => {
        console.log(response);
        this.getAllBooks();
      },
    });
  }


  // getBookDetails(book: BookDetails){
  //   console.log(book.id);
  //   this.router.navigate(['/books', book.id]);
  // }

  getBookDetails(book: BookDetails) {
    // console.log(book.id);
    this.router.navigate(['/books', book.id]);
  }

}

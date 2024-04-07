import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookCategory } from 'src/app/model/bookCategory';
import { BookDetails } from 'src/app/model/bookDetails';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { BookServiceService } from 'src/app/service/book-service.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  isAdmin: boolean = false;
  books: BookDetails[] = [];
  categories: BookCategory[] = [];
  categoriesBook: BookCategory[] = [];

  category: BookCategory = {
    id: 0,
    name: '',
  }



  selectedCategory?: BookCategory;
  selectedCategoryBook?: BookCategory;

  book: BookDetails = {
    id: 0,
    title: '', description: '',
    author: '', coAuthor: '',
    qtyForSale: 0, sellingPrice: 0, sellingDiscount: 0,
    qtyForRent: 0, rentingPrice: 0, rentingDiscount: 0,
    hasElectBookVersion: false, electBookPrice: 0, electBookDiscount: 0,
    bookCategories: [],
  }

  constructor(
    private authService: AuthServiceService,
    private bookService: BookServiceService,
    private rout: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.book.id = this.rout.snapshot.params['id'];

    this.bookService.getBook(this.book.id).subscribe({
      next: (response: any) => {
        console.log(response);
        this.book = response;
      },
      error: (error: any) => {
        console.log(error);
      },
    });

    this.getAllCategory();

    let categoriesBook = this.bookService.getAllCategoriesFromBook(this.book.id);

    // this.bookService.getAllCategoriesOfBook(this.book.id).subscribe{{
    //   next: (response: any) => {
    //     console.log(response);
    //     this.book = response;
    //   },
    //   error: (error: any) => {
    //     console.log(error);
    //   },
    // });


    // this.categoriesBook = this.bookService.getAllCategoriesOfBook(this.book.id);
  }


  getBooks() {
    this.bookService.getAllBooks().subscribe({
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
        this.getBooks();
      },
    });
  }

  getAllCategoriesFromBook(book: BookDetails) {
    this.bookService.getAllCategoriesFromBook(book.id).subscribe({
      next: (response: any) => {
        this.books = response;
      },
      error: (error: any) => {
        console.log(error);
      }
    })
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

  addCategoryToBook(bookId: number, category: BookCategory) {
    bookId = this.book.id;
    this.category = category;

    this.bookService.addCategoryToBook(bookId, category).subscribe({
      next: (response: any) => {
        this.category = response;
      },
      error: (error: any) => {
        console.log(error);
      }
    })

  }

  deleteCategoryFromBook(bookId: number, category: BookCategory) {
    bookId = this.book.id;
    this.category = category;

    this.bookService.addCategoryToBook(bookId, category).subscribe({
      next: (response: any) => {
        this.category = response;
      },
      error: (error: any) => {
        console.log(error);
      }
    })

  }



}

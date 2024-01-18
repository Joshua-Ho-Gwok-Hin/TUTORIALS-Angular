import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookDetails } from 'src/app/model/bookDetails';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { BookServiceService } from 'src/app/service/book-service.service';

@Component({
  selector: 'app-save-book',
  templateUrl: './save-book.component.html',
  styleUrls: ['./save-book.component.css']
})
export class SaveBookComponent implements OnInit {

  book: BookDetails = {
    id: 0, title: '', description: '',
    author: '', coAuthor: '',
    qtyForSale: 0, sellingPrice: 0, sellingDiscount: 0,
    qtyForRent: 0, rentingPrice: 0, rentingDiscount: 0,
    hasElectBookVersion: false, electBookPrice: 0, electBookDiscount: 0,
    bookCategories: [],
  }

  saveForm = new FormGroup({
    validateTitle: new FormControl('', [Validators.required]),
  })

  constructor(
    private authService: AuthServiceService,
    private bookService: BookServiceService,
    private router: Router,
    private rout: ActivatedRoute
  ) { }

  ngOnInit(): void {

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
  }

  saveBook() {
    console.log(this.book.id);
    if (this.book.id === 0) {
      console.log("book.id===0")
      this.bookService.save(this.book).subscribe({
        next: (response: any) => {
          console.log(response);
          this.router.navigate(['/']);
        },
        error: (error: any) => {
          console.log(error);
        },
      });
    }
    else {
      this.bookService.update(this.book).subscribe({
        next: (response: any) => {
          console.log(response);
          this.router.navigate(['/']);
        },
        error: (error: any) => {
          console.log(error);
        },
      });
    }
  }

  get validateTitle() {
    return this.saveForm.get('validateTitle');
  }


}

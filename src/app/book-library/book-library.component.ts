import { Component, OnInit } from '@angular/core';
import { IBook } from '../iBook';
import { BOOKS } from '../mock-library';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-library',
  templateUrl: './book-library.component.html',
  styleUrls: ['./book-library.component.scss']
})
export class BookLibraryComponent implements OnInit {
  book: IBook = {
    id: 1,
    name: 'Books'
  };
  books: IBook[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books)
  }

}

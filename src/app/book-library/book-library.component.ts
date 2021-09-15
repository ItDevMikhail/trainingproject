import { Component, OnInit } from '@angular/core';
import { IBook } from '../iBook';
import { BOOKS } from '../mock-library';
import { BookService } from '../book.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-library',
  templateUrl: './book-library.component.html',
  styleUrls: ['./book-library.component.scss']
})
export class BookLibraryComponent implements OnInit {
  books: IBook[] = [];

  constructor(private bookService: BookService,
    private location: Location) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data: any) => this.books=data);
    // this.getBooks();
    this.setAnyCount();
  }
  public setAnyCount(): void {
    this.bookService.changeCount(this.books);
    console.log(this.books)
  }

  // getBooks(): void {
  //   this.bookService.getBooks()
  //     .subscribe(books => this.books = books)
  // }
  goBack(): void {
    this.location.back();
  }
}

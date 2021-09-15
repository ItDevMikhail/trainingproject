import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { IBook } from '../iBook';
import { BOOKS } from '../mock-library';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  books: IBook = {
    id: 1,
    name: '',
    description: ''
  };
  responseBook: IBook | undefined;
  done: boolean = false;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
  add(books: IBook) {
    this.bookService.addBook(books)
      .subscribe(
        (data: any) => { this.responseBook = data; this.done = true; },
        error => console.log(error)
      );
  }
}

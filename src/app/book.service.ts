import { Injectable } from '@angular/core';
import { IBook } from './iBook';
import { BOOKS } from './mock-library';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks(): Observable<IBook[]>{
    const books = of(BOOKS);
    return books;
  }
  getBook(id: number): Observable<IBook> {
    const book = BOOKS.find(b => b.id === id)!;
    console.log(`HeroService: fetched hero id=${id}`);
    return of(book);
  }
}

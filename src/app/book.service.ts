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
    return of(book);
  }
  getDetail(id: number): Observable<IBook> {
    const DETAIL = JSON.parse(localStorage.getItem('list') as string)
    const detail = DETAIL.find((d: { id: number; }) => d.id === id)!;
    return of(detail);
  }
  // addBook(book: IBook): Observable<IBook> {
  //   return 
  //   // return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
  //   //   tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
  //   //   catchError(this.handleError<Hero>('addHero'))
  //   // );
  // }
}

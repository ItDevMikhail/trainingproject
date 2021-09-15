import { Injectable } from '@angular/core';
import { IBook } from './iBook';
import { BOOKS } from './mock-library';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  // getBooks(): Observable<IBook[]>{
  //   const books = of(BOOKS);
  //   return books;
  // }
  public count$ = new Subject<String>();

		public changeCount(count: any) {
   		this.count$.next(count); 
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
  getBoook(book: any){
    return this.http.get(`http://localhost:5000/library/detail/${book._id}`)
  }
  getBooks(){
    return this.http.get('http://localhost:5000/library/all')
  }
  addBook(books: IBook) {
    const body = { id: books.id, name: books.name, description: books.description };
    return this.http.post('http://localhost:5000/library/detail', body);
  }
}

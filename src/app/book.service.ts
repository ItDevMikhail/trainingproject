import { Injectable } from '@angular/core';
import { IBook } from './iBook';
import { BOOKS } from './mock-library';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  getBook(id: string){
    return this.http.get(`http://localhost:5000/library/detail/${id}`)
  }
  getBooks(){
    return this.http.get('http://localhost:5000/library/all')
  }
  addBook(books: IBook) {
    const body = { id: books.id, name: books.name, description: books.description };
    return this.http.post('http://localhost:5000/library/detail', body);
  }
}

import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { IBook } from '../iBook';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  books: IBook = {
    name: '',
    description: ''
  };
  responseBook: IBook | undefined;
  constructor(private bookService: BookService,
    private flashMessages: FlashMessagesService) { }

  ngOnInit(): void {
  }
  add(books: IBook): any {
    console.log(books.description)
    if (books.name.length <= 2){
      this.flashMessages.show("Введите название книги", {timeout: 2000})
      return false;
    } 
    if (books.description.length <= 0){
      this.flashMessages.show("Напишите описание книги", {timeout: 2000})
      return false;
    }
    if (books.description.length <= 20){
      this.flashMessages.show("Короткое описание", {timeout: 2000})
      return false;
    }
    this.bookService.addBook(books)
      .subscribe(
        () => {
          this.flashMessages.show("Книга добавлена", {timeout: 2000})
          books.name ='',
          books.description = ''
        },
        (error) => {
          if ((error.message).includes('400')) {
            this.flashMessages.show("Такая книга уже есть", { timeout: 2000 });
          } else  {
            this.flashMessages.show("404 Bad request", { timeout: 2000 });
          } 
        }
      );
  }
}

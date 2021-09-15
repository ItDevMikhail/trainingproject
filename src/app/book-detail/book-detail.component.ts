import { Component, OnInit, Input } from '@angular/core';
import { IBook } from '../iBook';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BookService } from '../book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  @Input() book?: any;
  private subs: any;
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.bookService.count$.subscribe((count) => this.subs);
    console.log(this.subs)
    this.bookService.getBoook(this.book).subscribe((data: any) => this.book= data(data.name, data.description));
    // this.getBook();
  }
  
  getBook(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBook(id)
    .subscribe(book => this.book = book)
  }
  goBack(): void {
    this.location.back();
  }
}

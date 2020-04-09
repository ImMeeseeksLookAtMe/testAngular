import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { BookService } from '../../services/book.service';

import { Book } from "../../models/Book"

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book: Book;
  @Output() newBook : EventEmitter<Book> = new EventEmitter();
  @Output() updatedBook: EventEmitter<Book> = new EventEmitter(); 
  @Input() currentBook: Book;
  @Input() isEdit: boolean;
  

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  addBook(title: string, description: string) {
    if(!title){
      alert('Please add title')
    } else {
      this.bookService.saveBook({title, description} as Book).subscribe(obj=> {
      const id = obj.data
      const book = Object.assign(id, {title, description})
      this.newBook.emit(book)
      })
    }
  }

  updateBook() {
    if(!this.currentBook.title){
        alert('Please add title')
      } else {
    this.bookService.updateBook(this.currentBook).subscribe(() => {
      this.isEdit = false;
      const book= this.currentBook
      this.updatedBook.emit(book);
    })
  }
  }
}

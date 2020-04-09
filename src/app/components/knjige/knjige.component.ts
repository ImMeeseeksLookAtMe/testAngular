import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service'

import { Book } from '../../models/Book'

@Component({
  selector: 'app-knjige',
  templateUrl: './knjige.component.html',
  styleUrls: ['./knjige.component.css']
})
export class KnjigeComponent implements OnInit {
  books: Book[];
  currentBook: Book = {
    id: 0,
    title: '',
    description: ''
  }
  isEdit: boolean = false

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
      this.bookService.getBooks().subscribe(data => {
        this.books = data.data
        console.log(data.data)
      });
  }

  //save book
  onNewBook(book: Book) {
    this.books.unshift(book);
  } 
  
  editBook(book: Book) {
    this.currentBook = book;
    this.isEdit = true
  }

  onUpdatedBook(book: Book) {
    this.books.forEach((curb, index) => {
      if(book.id === curb.id) {
        this.books.splice(index, 1);
        this.books.unshift(book);
        this.isEdit = false;
        this.currentBook = {
          id: 0,
          title: '',
          description: ''
        };
      }
    })
  }
  
  removeBook(book: Book) {
    this.bookService.deleteBook(book).subscribe(() => {
      this.books.forEach((curb, index)=> {
        if(book.id === curb.id) {
          this.books.splice(index, 1)
        }
      })
    })
  }

}

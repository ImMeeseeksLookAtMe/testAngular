import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Book } from '../models/Book';
import { Observable } from 'rxjs';
import { Data } from '../models/Data'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  booksUrl:string = 'api/v1/book';

  constructor(private http:HttpClient) { }

  getBooks():Observable<Data> {
    return this.http.get<Data>(this.booksUrl)
  }

  //Delete Book
  deleteBook(book: Book | number) :Observable<Book> {
    const id = typeof book === 'number' ? book : book.id;
    const url = `${this.booksUrl}/${id}`;
    return this.http.delete<Book>(url,httpOptions);
  }

  //Add Book
  saveBook(book: Book) :Observable<any> { 
    console.log(book)
    return this.http.post<any>(this.booksUrl, book, httpOptions);
  }

  //Update Book
  updateBook(book :Book) :Observable<any> {
    const url = `${this.booksUrl}/${book.id}`
    return this.http.put<any>(url, book, httpOptions)
  }

  //Get id of BooK
  getBook(id: number) :Observable<any> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<any>(url)
  }
}

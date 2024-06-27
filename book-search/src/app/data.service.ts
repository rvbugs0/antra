import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';
import { Book } from './interface/book';

@Injectable({
  providedIn: 'root'
})
export class DataService{
  readonly url: string = 'https://www.googleapis.com/books/v1/volumes?q=';
  books$ = new Subject<Book[]>();
  constructor(private http: HttpClient) {}
  getBooks(bookName: string): any {
    this.http
      .get(this.url + bookName)
      .pipe(
        map((response: any) => {
          return response.items.map((item: any) => {
            return {
              bookName: item.volumeInfo.title,
              publisher: item.volumeInfo?.publisher,
              pulishedDate: item.volumeInfo?.publishedDate,
              description: item.volumeInfo?.description,
              picture: item.volumeInfo?.imageLinks?.thumbnail,
            };
          });
        })
      )
      .subscribe((transformedData) => {
        this.books$.next(transformedData);
      });
  }
}
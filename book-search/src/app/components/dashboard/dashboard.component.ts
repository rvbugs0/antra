import { Component, OnInit } from '@angular/core';
import { Observable,debounceTime,
  distinctUntilChanged,
  startWith, } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Book } from '../../interface/book';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  books$!: Observable<Book[]>;
  bookSearch = new FormControl('');
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.books$ = this.dataService.books$;
    this.bookSearch.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged(), startWith(''))
      .subscribe((val: any) => {
        if (val === '') {
          this.dataService.books$.next([]);
        } else {
          this.dataService.getBooks(val);
        }
      });
  }
}
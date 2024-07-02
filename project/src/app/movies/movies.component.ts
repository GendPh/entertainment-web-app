import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [],
  templateUrl: './movies.component.html',
  styles: ``
})
export class MoviesComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

}

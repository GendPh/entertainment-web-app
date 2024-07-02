import { Component, Input, OnInit } from '@angular/core';
import { Details, Movie } from '../model/movie.model';
import { BookmarkButtonComponent } from '../bookmark-button/bookmark-button.component';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-trending-movie',
  standalone: true,
  imports: [BookmarkButtonComponent, DetailsComponent],
  templateUrl: './trending-movie.component.html',
  styles: ``
})

export class TrendingMovieComponent implements OnInit {
  @Input("GetInfo") info: Movie | undefined;

  public details: Details | undefined;

  ngOnInit(): void {
    if (this.info) {
      this.details = {
        title: this.info.title,
        year: this.info.year,
        category: this.info.category,
        rating: this.info.rating,
      }
    }
  }
}
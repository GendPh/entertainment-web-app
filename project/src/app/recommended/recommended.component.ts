import { Component, Input, OnInit } from '@angular/core';
import { BookmarkButtonComponent } from '../bookmark-button/bookmark-button.component';
import { DetailsComponent } from '../details/details.component';
import { Details, Movie } from '../model/movie.model';

@Component({
  selector: 'app-recommended',
  standalone: true,
  imports: [BookmarkButtonComponent, DetailsComponent],
  templateUrl: './recommended.component.html',
  styles: ``
})
export class RecommendedComponent implements OnInit {

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

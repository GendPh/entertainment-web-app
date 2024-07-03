import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { Movie } from '../model/movie.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bookmark-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bookmark-button.component.html',
  styles: ``
})
export class BookmarkButtonComponent /* implements OnInit */ {
  @Input('GetData') data: Movie | undefined;

  constructor(
    private movieService: MoviesService,
  ) { }

  // This method will handle the service to toggle the state of the bookmark. At the moment only changes the static state of the button.
  public toggleBookmark(): void {
    if (this.data) {
      this.movieService.setBookmark(this.data).subscribe({
        next: () => {
        },
        error: (error) => {
          console.error('Error toggling bookmark:', error);
        },
        complete: () => {
          window.location.reload();
        }
      });
    }
  }

}

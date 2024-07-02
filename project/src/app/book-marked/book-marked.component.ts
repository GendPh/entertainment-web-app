import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '../model/movie.model';
import { MoviesService } from '../service/movies.service';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';
import { RecommendedComponent } from '../recommended/recommended.component';

@Component({
  selector: 'app-book-marked',
  standalone: true,
  imports: [CommonModule, LoaderComponent, RecommendedComponent],
  templateUrl: './book-marked.component.html',
  styles: ``
})
export class BookMarkedComponent implements OnInit, OnDestroy {
  // Will retain the movies fetched from the server and the state of the loading.
  public markedMovies: Movie[] = [];
  public markedMoviesLoaded: boolean = false;
  public markedSeries: Movie[] = [];
  public markedSeriesLoaded: boolean = false;

  // Inject the MoviesService to the constructor to fetch the movies from the server.
  constructor(private movieService: MoviesService) { }

  // Fetch the movies from the server and handle the response to update the state of the component and the view.
  ngOnInit(): void {
    this.getMarkedMovies();
    this.getMarkedSeries();
  }

  private getMarkedMovies(): void {
    this.movieService.getMarkedMovies().subscribe(
      {
        // Update the movies array with the response from the server.
        next: (movies) => {
          this.markedMovies = movies;

        },
        // Handle the error if the request fails.
        error: (error: Error) => {
          this.markedMovies = [];
        },
        // Update the state of the component to indicate that the movies are loaded.
        complete: () => {
          this.markedMoviesLoaded = true;
        }
      }
    )
  }
  private getMarkedSeries(): void {
    this.movieService.getMarkedMovies().subscribe(
      {
        // Update the movies array with the response from the server.
        next: (series) => {
          this.markedSeries = series;
        },
        // Handle the error if the request fails.
        error: (error: Error) => {
          this.markedSeries = [];
        },
        // Update the state of the component to indicate that the series are loaded.
        complete: () => {
          this.markedSeriesLoaded = true;
        }
      }
    )
  }

  // Clear the state of the component when the component is destroyed to avoid memory leaks and unexpected behavior.
  ngOnDestroy(): void {
    this.markedMovies = [];
    this.markedMoviesLoaded = false;
    this.markedSeries = [];
    this.markedSeriesLoaded = false;
  }
}


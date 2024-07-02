import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { Movie } from '../model/movie.model';
import { CommonModule } from '@angular/common';
import { RecommendedComponent } from '../recommended/recommended.component';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, RecommendedComponent, LoaderComponent],
  templateUrl: './movies.component.html',
  styles: ``
})
export class MoviesComponent implements OnInit, OnDestroy {
  // Will retain the movies fetched from the server and the state of the loading.
  public movies: Movie[] = [];
  public moviesLoaded: boolean = false;

  // Inject the MoviesService to the constructor to fetch the movies from the server.
  constructor(private movieService: MoviesService) { }

  // Load the movies when the component is initialized.
  ngOnInit(): void {
    this.loadMovies();
  }


  // Fetch the movies from the server and handle the response to update the state of the component and the view.
  private loadMovies(): void {
    this.movieService.getMovies().subscribe(
      {
        // Update the movies array with the response from the server.
        next: (movies) => {
          this.movies = movies;
        },
        // Handle the error if the request fails.
        error: (error: Error) => {
          this.movies = [];
        },
        // Update the state of the component to indicate that the movies are loaded.
        complete: () => {
          this.moviesLoaded = true;
        }
      }
    )
  }

  // Clear the movies array and update the state of the component to indicate that the movies are not loaded.
  ngOnDestroy(): void {
    this.movies = [];
    this.moviesLoaded = false;
  }
}

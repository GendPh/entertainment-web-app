import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrendingMovieComponent } from '../trending-movie/trending-movie.component';
import { MoviesService } from '../service/movies.service';
import { Movie } from '../model/movie.model';
import { CommonModule } from '@angular/common';
import { RecommendedComponent } from '../recommended/recommended.component';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [LoaderComponent, TrendingMovieComponent, RecommendedComponent, CommonModule],
  templateUrl: './trending.component.html',
  styles: ``
})
export class TrendingComponent implements OnInit, OnDestroy {
  // Keep track of the trending movies and recommended movies after they are loaded from the service and displayed in the view.
  trendingInfo: Movie[] = [];
  trendingLoaded: boolean = false;
  recommendedInfo: Movie[] = [];
  recommendLoaded: boolean = false;

  // Inject the MoviesService into the component.
  constructor(private moviesService: MoviesService) { }

  // Load the trending and recommended movies when the component is initialized.
  ngOnInit(): void {
    this.LoadTrending();
    this.LoadRecommended();
  }

  // Load the trending movies from the service.
  private LoadTrending(): void {
    this.moviesService.getTrendingMovies().subscribe(
      {
        // Assign the trending movies to the trendingInfo property.
        next: (movies: Movie[]) => {
          this.trendingInfo = movies;
        },
        // If there is an error, set the trendingInfo property to an empty array.
        error: (error: Error) => {
          this.trendingInfo = [];
        },
        // Set the trendingLoaded property to true when the observable completes.
        complete: () => {
          this.trendingLoaded = true;
        },
      }
    );
  }

  // Load the recommended movies from the service.
  private LoadRecommended(): void {
    this.moviesService.getAll().subscribe(
      {
        // Assign the recommended movies to the recommendedInfo property.
        next: (movies: Movie[]) => {
          this.recommendedInfo = movies;
        },
        // If there is an error, set the recommendedInfo property to an empty array.
        error: (error: Error) => {
          this.recommendedInfo = [];
        },
        // Set the recommendLoaded property to true when the observable completes.
        complete: () => {
          this.recommendLoaded = true;
        }
      }
    );
  }

  // Clear the trendingInfo and recommendedInfo properties when the component is destroyed.
  ngOnDestroy(): void {
    this.trendingInfo = [];
    this.recommendedInfo = [];
    this.trendingLoaded = false;
    this.recommendLoaded = false;
  }
}

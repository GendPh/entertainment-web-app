import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrendingMovieComponent } from '../trending-movie/trending-movie.component';
import { MoviesService } from '../service/movies.service';
import { Movie } from '../model/movie.model';
import { Subscription } from 'rxjs';
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
  trendingInfo: Movie[] = [];
  trendingLoaded: boolean = false;

  recommendedInfo: Movie[] = [];
  recommendLoaded: boolean = false;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.LoadTrending();
    this.LoadRecommended();
  }

  private LoadTrending(): void {
    this.moviesService.getTrendingMovies().subscribe(
      {
        next: (movies: Movie[]) => {
          this.trendingInfo = movies;
          this.trendingLoaded = true;
        },
        error: (error: Error) => {
        }
      }
    );
  }

  private LoadRecommended(): void {
    this.moviesService.getAll().subscribe(
      {
        next: (movies: Movie[]) => {
          this.recommendedInfo = movies;
          this.recommendLoaded = true;
        },
        error: (error: Error) => {
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.trendingInfo = [];
    this.recommendedInfo = [];
    this.trendingLoaded = false;
    this.recommendLoaded = false;
  }
}

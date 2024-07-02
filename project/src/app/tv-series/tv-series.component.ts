import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '../model/movie.model';
import { MoviesService } from '../service/movies.service';
import { LoaderComponent } from '../loader/loader.component';
import { RecommendedComponent } from '../recommended/recommended.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tv-series',
  standalone: true,
  imports: [LoaderComponent, RecommendedComponent, CommonModule],
  templateUrl: './tv-series.component.html',
  styles: ``
})
export class TvSeriesComponent implements OnInit, OnDestroy {
  // Will retain the tv-series fetched from the server and the state of the loading.
  public tvSeries: Movie[] = [];
  public tvSeriesLoaded: boolean = false;

  // Inject the MoviesService to the constructor to fetch the tv-series from the server.
  constructor(private movieService: MoviesService) { }

  // Load the tv-series when the component is initialized.
  ngOnInit(): void {
    this.loadTvSeries();
  }

  private loadTvSeries(): void {
    // Fetch the tv-series from the server and handle the response to update the state of the component and the view.
    this.movieService.getTvSeries().subscribe(
      {
        // Update the tv-series array with the response from the server.
        next: (tvSeries) => {
          this.tvSeries = tvSeries;
        },
        // Handle the error if the request fails.
        error: (error: Error) => {
          this.tvSeries = [];
        },
        // Update the state of the component to indicate that the tv-series are loaded.
        complete: () => {
          this.tvSeriesLoaded = true;
        }
      }
    )
  }

  // Clear the tv-series array and update the state of the component to indicate that the tv-series are not loaded.
  ngOnDestroy(): void {
    this.tvSeries = [];
    this.tvSeriesLoaded = false;
  }
}

import { Injectable, signal } from '@angular/core';
import { Movie } from '../model/movie.model';
import { MoviesService } from './movies.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public searchResults = signal<Movie[] | null>(null);
  public searchValue = signal<string | null>(null);
  public searchLoading = signal<boolean>(true);
  constructor(private movieService: MoviesService) { }

  public search(searchValue: string) {
    this.searchLoading.update(() => true);
    
    const search = searchValue.trim();

    if (search === '') {
      this.searchResults.update(() => null);
    } else {
      this.searchValue.update(() => search);

      this.movieService.getByName(search).subscribe(
        {
          next: (movies) => {
            this.searchResults.update(() => movies);
          },
          error: (error) => {
            this.searchResults.update(() => []);

          }, complete: () => {
            this.searchLoading.update(() => false);
          }
        }
      );
    }
  }

  public clearSearch() {
    this.searchValue.update(() => null);
    this.searchResults.update(() => null);
  }
}



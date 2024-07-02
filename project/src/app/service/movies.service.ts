import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  // The url to fetch the movies.
  private url: string = "https://json-server-deploy-kk18.onrender.com/movies";

  // Inject the HttpClient service to the constructor to make requests to the server API.
  constructor(private http: HttpClient) { }

  // Get all the movies and tv-series from the server.
  getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url);
  }

  // Get the trending movies and tv-series from the server.
  getTrendingMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url + "?isTrending=true");
  }

  // Get only the movies from the server.
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url + "?category=Movie");
  }

  // Get only the tv-series from the server.
  getTvSeries(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url + "?category_like=Series");
  }

  // Get only the marked movies from the server.
  getMarkedMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url + "?isBookmarked=true");
  }

  // Get only the marked tv-series from the server.
  getMarkedTvSeries(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url + "?isBookmarked=true");
  }
}

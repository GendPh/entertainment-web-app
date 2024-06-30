import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private url: string = "https://json-server-deploy-kk18.onrender.com/movies";

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {

    return this.http.get<Movie[]>(this.url);

  }
}

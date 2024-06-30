import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoviesService } from './service/movies.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'project';

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
  }
}

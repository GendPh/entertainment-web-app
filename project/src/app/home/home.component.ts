import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../search/search.component';
import { SearchResultsComponent } from '../search-results/search-results.component';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../service/movies.service';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SearchComponent, SearchResultsComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

  constructor(public searchService: SearchService) { }

}

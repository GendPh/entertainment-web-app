import { Component } from '@angular/core';
import { SearchService } from '../service/search.service';
import { RecommendedComponent } from '../recommended/recommended.component';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [RecommendedComponent, LoaderComponent, CommonModule],
  templateUrl: './search-results.component.html',
  styles: ``
})
export class SearchResultsComponent {

  constructor(public searchService: SearchService) {
  }


}

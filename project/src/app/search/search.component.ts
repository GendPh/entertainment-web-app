import { Component } from '@angular/core';
import { SearchService } from '../service/search.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styles: ``
})
export class SearchComponent {

  searchValue: string = '';

  constructor(private searchService: SearchService) { }

  search() {
    this.searchService.search(this.searchValue);
  }
}

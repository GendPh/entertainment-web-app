import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SearchService } from '../service/search.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  constructor(
    private searchService: SearchService,
    private authService: AuthService) { }

  clearSearch() {
    this.searchService.clearSearch();
  }
  logout() {
    this.authService.logUserOut();
  }
}

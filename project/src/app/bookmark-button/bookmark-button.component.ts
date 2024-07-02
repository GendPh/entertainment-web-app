import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bookmark-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bookmark-button.component.html',
  styles: ``
})
export class BookmarkButtonComponent {

  @Input("GetTitle") title: string | undefined;
  @Input('CheckMarked') isBookmarked: boolean | undefined;

  public toggleBookmark(): void {
    this.isBookmarked = !this.isBookmarked;
  }

}

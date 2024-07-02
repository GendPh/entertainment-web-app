import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bookmark-button.component.html',
  styles: ``
})
export class BookmarkButtonComponent /* implements OnInit */ {
  // The title of the movie and checks if its marked.
  @Input("GetTitle") title: string | undefined;
  @Input('CheckMarked') isBookmarked: boolean | undefined;


  // ngOnInit(): void {
  //   console.log(this.title + " " + this.isBookmarked);
  // }

  // This method will handle the service to toggle the state of the bookmark. At the moment only changes the static state of the button.
  public toggleBookmark(): void {
    this.isBookmarked = !this.isBookmarked;
  }

}

import { Component, Input } from '@angular/core';
import { Details } from '../model/movie.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styles: ``
})
export class DetailsComponent {
  @Input("GetDetails") details: Details | undefined;
}

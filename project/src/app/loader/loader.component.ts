import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit } from '@angular/core';
import { bouncyArc, hourglass, helix, leapfrog, mirage, pinwheel } from 'ldrs'

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoaderComponent implements OnInit {

  @Input("GetContainer") LoaderContainer: number = 0;

  color: string = "white";
  speed: number = 1.65;

  ngOnInit(): void {
    bouncyArc.register();
    hourglass.register();
    helix.register();
    leapfrog.register();
    mirage.register();
    pinwheel.register();
  }
}


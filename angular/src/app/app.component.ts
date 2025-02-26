import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollHeadlineComponent } from "./scroll-headline/scroll-headline.component";

@Component({
  selector: 'app-root',
  imports: [ScrollHeadlineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}

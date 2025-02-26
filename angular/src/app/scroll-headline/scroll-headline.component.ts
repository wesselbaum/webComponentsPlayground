import { Component, HostBinding } from '@angular/core';



@Component({
  selector: 'app-scroll-headline',
  imports: [],
  templateUrl: './scroll-headline.component.html',
  styleUrl: './scroll-headline.component.css'
})
export class ScrollHeadlineComponent {
  @HostBinding('@state')
  state: 'opened' | 'closed' = 'closed';
}

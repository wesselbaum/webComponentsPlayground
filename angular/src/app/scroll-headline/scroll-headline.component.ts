import {Component, HostBinding, input, OnInit, ViewEncapsulation} from '@angular/core';



@Component({
  selector: 'scroll-headline',
  imports: [],
  templateUrl: './scroll-headline.component.html',
  styleUrl: './scroll-headline.component.css',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ScrollHeadlineComponent implements OnInit {
  ngOnInit(): void {
      console.log('id', this.id());
  }
  @HostBinding('@state')
  state: 'opened' | 'closed' = 'closed';

  id = input.required()
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollHeadlineComponent } from './scroll-headline.component';

describe('ScrollHeadlineComponent', () => {
  let component: ScrollHeadlineComponent;
  let fixture: ComponentFixture<ScrollHeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollHeadlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

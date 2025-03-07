import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancingCalculatorComponent } from './financing-calculator.component';

describe('FinancingCalculatorComponent', () => {
  let component: FinancingCalculatorComponent;
  let fixture: ComponentFixture<FinancingCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancingCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancingCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

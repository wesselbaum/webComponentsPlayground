import {Component, HostBinding, input, model} from '@angular/core';

@Component({
  selector: 'app-financing-calculator',
  imports: [],
  templateUrl: './financing-calculator.component.html',
  styleUrl: './financing-calculator.component.css'
})
export class FinancingCalculatorComponent {
  @HostBinding('@state')
  state: 'opened' | 'closed' = 'closed';

  durationMonths = model<number>(2);
  price = model(100);

  increaseDuration() {
    this.durationMonths.set(this.durationMonths()+1);
  }

  decreaseDuration() {
    this.durationMonths.set(this.durationMonths()-1);
  }
}

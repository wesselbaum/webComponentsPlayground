import {Component, h, Prop} from "@stencil/core";

@Component({
  tag: "financing-calculator",
  styleUrl: "financing-calculator.css",
  shadow: true
})
export class FinancingCalculatorComponent {
  @Prop() durationMonths: number = 2;
  @Prop() price: number = 100;

  increaseDuration() {
    this.durationMonths++;
  }

  decreaseDuration() {
    this.durationMonths--;
  }

  render() {
    return <div class="wrapper">
      <p>In {this.durationMonths} Monaten bei einer monatlicher Rate von {(this.price / this.durationMonths).toFixed(2)} EUR finanzieren. <button onClick={() => this.decreaseDuration()}>kürzer</button><button onClick={() => this.increaseDuration()}>länger</button></p></div>;
  }
}

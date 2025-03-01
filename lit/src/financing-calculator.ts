import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('financing-calculator')
export class FinancingCalculator extends LitElement {
    // Define scoped styles right with your component, in plain CSS
    static styles = css`
        .wrapper, p {display: inline-block; margin: 0}
        .wrapper { background-color: deepskyblue; padding: 10px; border-radius: 5px; font-size: 50%; font-weight: 400 }
  `;

    // Declare reactive properties
    @property()
    durationMonths: number = 2;
    @property()
    price: number = 0;

    render() {
        return html`
            <div class="wrapper">
                <p>In ${this.durationMonths} Monaten bei einer monatlicher Rate von ${(this.price / this.durationMonths).toFixed(2)} EUR finanzieren. <button @click="${this._decreaseDuration}">kürzer</button><button @click="${this._increaseDuration}">länger</button></p>
            </div>
        `;
    }

    private _increaseDuration() {
        this.durationMonths++;
    }

    private _decreaseDuration() {
        this.durationMonths--;
    }
}
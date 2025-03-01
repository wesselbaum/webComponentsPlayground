class FinancingCalculator extends HTMLElement {

    constructor() {
        super();
        this.price = "0";
        this.durationMonths = "2";
        this.increaseButton;
        this.decreaseButton;
        this.shadow;
    }

    static get observedAttributes() {
        return ['price', 'durationMonths'];
    }

    attributeChangedCallback(property, oldValue, newValue) {
        console.log(property);
        
        if(oldValue === newValue) return;
        this[property] = newValue
    }

    increasedDuration() {
        this.durationMonths ++;
        this.render();
    }

    decreasedDuration() {
        this.durationMonths --;
        this.render();
    }

    connectedCallback() {
        this.shadow = this.attachShadow({ mode: 'open' });       
        this.render();
    }

    render() {
        this.shadow.innerHTML = `
        <style>
            .wrapper, p {display: inline-block; margin: 0}
            .wrapper { background-color: deepskyblue; padding: 10px; border-radius: 5px; font-size: 50%; font-weight: 400 }
        </style>
        <div class="wrapper">
            <p>In ${this.durationMonths} Monaten bei einer monatlicher Rate von ${(this.price / this.durationMonths).toFixed(2)} EUR finanzieren. <button id="decreaseBtn">kürzer</button><button id="increaseBtn">länger</button></p>
        </div>
        `;

        this.increaseButton = this.shadowRoot.querySelector('#increaseBtn');
        this.decreaseButton = this.shadowRoot.querySelector('#decreaseBtn');
        this.increaseButton.addEventListener('click', this.increasedDuration.bind(this));
        this.decreaseButton.addEventListener('click', this.decreasedDuration.bind(this));
    }
}

customElements.define('financing-calculator', FinancingCalculator);
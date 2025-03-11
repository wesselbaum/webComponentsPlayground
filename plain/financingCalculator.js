class FinancingCalculator extends HTMLElement {
// [wc] => Standard Web Components API
// [cus] => Selbst geschriebene Funktionen
// definieren aller Variablen für die WC
constructor() {
    super();
    this.price = "0";
    this.durationmonths = "2";
    this.increaseButton;
    this.decreaseButton;
    this.shadow;
}

// [wc] Definition der "veränderbaren" Attribute
static get observedAttributes() {
    return ['price', 'durationmonths'];
}

// [wc] Reagieren auf Änderungen von Attributen
attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
    this.render();
}

// [wc] Komponente wurde mit dem DOM verbunden
connectedCallback() {
    this.shadow = this.attachShadow({mode: 'open'});
    this.render();
}

// [wc] Komponente wurde aus dem DOM entfernt
disconnectedCallback() {
    this.increaseButton.removeEventListener('click', this.increasedDuration);
    this.decreaseButton.removeEventListener('click', this.decreasedDuration);
}

// [cus] Aktualisieren des Attributes an der WC
updateDurationAttribute = () => {
    const calculatorWC = document.querySelector('financing-calculator');
    calculatorWC.setAttribute('durationmonths', this.durationmonths);
}

// [cus] Erhöhung der Dauer
increasedDuration() {
    this.durationmonths++;
    this.updateDurationAttribute();
}

// [cus] Verringerung der Dauer
decreasedDuration() {
    this.durationmonths--;
    this.updateDurationAttribute();
}

// [cus] Reagieren auf Änderungen und erneutes Rendering der Komponente inkl. Un- und Registrierung von Event Listener
render() {
    if (this.increaseButton && this.decreaseButton) {
        this.increaseButton.removeEventListener('click', this.increasedDuration);
        this.decreaseButton.removeEventListener('click', this.decreasedDuration);
    }
    this.shadow.innerHTML = `
    <style>
        .wrapper, p {display: inline-block; margin: 0}
        .wrapper { background-color: deepskyblue; padding: 10px; border-radius: 5px; font-size: 50%; font-weight: 400 }
    </style>
    <div class="wrapper">
        <p>In ${this.durationmonths} Monaten bei einer monatlicher Rate von ${(this.price / this.durationmonths).toFixed(2)} EUR finanzieren. <button id="decreaseBtn">kürzer</button><button id="increaseBtn">länger</button></p>
    </div>
    `;
    this.increaseButton = this.shadowRoot.querySelector('#increaseBtn');
    this.decreaseButton = this.shadowRoot.querySelector('#decreaseBtn');
    this.increaseButton.addEventListener('click', this.increasedDuration.bind(this));
    this.decreaseButton.addEventListener('click', this.decreasedDuration.bind(this));
}
}

customElements.define('financing-calculator', FinancingCalculator);
import ScrollHeadline from './scroll-headline.ce.vue'
import FinancingCalculator from './financing-calculator.ce.vue'
import {defineCustomElement} from "vue";

const scrollHeadline = defineCustomElement(ScrollHeadline, {});
const financingCalculator = defineCustomElement(FinancingCalculator, {});

customElements.define('scroll-headline', scrollHeadline);
customElements.define('financing-calculator', financingCalculator);

import {FinancingCalculatorComponent, ScrollHeadlineComponent} from "./web-component";

if (!customElements.get('scroll-headline')) { customElements.define('scroll-headline', ScrollHeadlineComponent); }
if (!customElements.get('financing-calculator')) { customElements.define('financing-calculator', FinancingCalculatorComponent); }


// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

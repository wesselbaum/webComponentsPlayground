import { ScrollHeadline } from "./components/ScrollHeadline/ScrollHeadline.tsx";
import { FinancingCalculator } from "./components/FinancingCalculator/FinancingCalculator.tsx";
import r2wc from "@r2wc/react-to-web-component";

const ScrollHeadlineApp = r2wc(ScrollHeadline, {
  shadow: "open",
  props: { id: "string" },
});

const FinancingCalculatorApp = r2wc(FinancingCalculator, {
  shadow: "open",
  props: { durationMonths: "number", price: "number" },
});

if (!customElements.get("scroll-headline")) {
  customElements.define("scroll-headline", ScrollHeadlineApp);
}
if (!customElements.get("financing-calculator")) {
  customElements.define("financing-calculator", FinancingCalculatorApp);
}

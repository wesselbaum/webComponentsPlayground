import ReactDOM from "react-dom/client";
import {ScrollHeadline} from "./components/ScrollHeadline/ScrollHeadline";
import {FinancingCalculator} from "./components/FinancingCalculator/FinancingCalculator.tsx";

export const normalizeAttribute = (attribute: string) => {
    return attribute.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
};

class ScrollHeadlineComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        const props = this.getPropsFromAttributes();
        const root = ReactDOM.createRoot(this.shadowRoot as ShadowRoot);
        // @ts-expect-error
        root.render(<ScrollHeadline {...props}/>);
    }

    private getPropsFromAttributes<T>(): T {
        const props: Record<string, string> = {};

        for (let index = 0; index < this.attributes.length; index++) {
            const attribute = this.attributes[index];
            props[normalizeAttribute(attribute.name)] = attribute.value;
        }

        return props as T;
    }
}
class FinancingCalculatorComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        const props = this.getPropsFromAttributes();
        const root = ReactDOM.createRoot(this.shadowRoot as ShadowRoot);
        // @ts-expect-error
        root.render(<FinancingCalculator {...props}/>);
    }

    private getPropsFromAttributes<T>(): T {
        const props: Record<string, string> = {};

        for (let index = 0; index < this.attributes.length; index++) {
            const attribute = this.attributes[index];
            props[normalizeAttribute(attribute.name)] = attribute.value;
        }

        return props as T;
    }
}

export {
    ScrollHeadlineComponent,
    FinancingCalculatorComponent
}


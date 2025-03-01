import {c, css, Props, useProp, useState} from "atomico";

function useCounter(prop) {
    const [value, setValue] = useProp(prop);
    return {
        value,
        increment: () => setValue((value) => value + 1),
        decrement: () => setValue((value) => value - 1),
    };
}

function financingCalculator({price}: Props<typeof financingCalculator>) {
    const counter = useCounter("durationMonths");
    return (
        <host shadowDom>
            <div class="wrapper">
                <p>In {counter.value} Monaten bei einer monatlicher Rate von {(price / counter.value).toFixed(2)} EUR
                    finanzieren.
                    <button onclick={counter.decrement}>kürzer</button>
                    <button onclick={counter.increment}>länger</button>
                </p>
            </div>

        </host>
    )
}

financingCalculator.props = {
    durationMonths: {
        type: Number,
        value: 2
    },
    price: {
        type: Number,
        value: 200
    }
}

financingCalculator.styles = css`
    .wrapper, p {
        display: inline-block;
        margin: 0
    }

    .wrapper {
        background-color: deepskyblue;
        padding: 10px;
        border-radius: 5px;
        font-size: 50%;
        font-weight: 400
    }

`

export const FinancingCalculator = c(financingCalculator);
customElements.define('financing-calculator', FinancingCalculator);
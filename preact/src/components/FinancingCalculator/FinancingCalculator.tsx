import css from './FinancingCalculator.css?inline';
import {useState} from "react";

export const FinancingCalculator = ({durationMonths = 2, price = 100}) => {
    const [duration, setDuration] = useState(durationMonths);

    function decreaseDuration() {
        setDuration(duration - 1);
    }

    function increaseDuration() {
        setDuration(duration + 1);
    }


    return (
        <>
            <style>
                {css}
            </style>
            <div className="wrapper">
                <p>In {duration} Monaten bei einer monatlicher Rate
                    von {(price / duration).toFixed(2)} EUR finanzieren. <button
                        onClick={() => decreaseDuration()}>kürzer</button>
                    <button onClick={() => increaseDuration()}>länger</button>
                </p>
            </div>
        </>
    );
}
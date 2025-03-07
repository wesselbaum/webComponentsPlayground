import styles from './FinancingCalculator.css?inline';
import {useState} from "react";

type ScrollHeadlineProps = {
    durationMonths: number;
    price: number;
}

export const FinancingCalculator = ({durationMonths, price}: ScrollHeadlineProps) => {

    console.log(durationMonths, price);
    const [duration, setDuration] = useState(durationMonths ?? 2);

    const decreaseDuration = () => {
        setDuration(duration - 1);
    }

    const increaseDuration = () => {
        setDuration(duration + 1);
    }

    return (
        <>
            <style>
                {styles}
            </style>
            <div className="wrapper">
                <p>In {duration} Monaten bei einer monatlicher Rate
                    von {(price / duration).toFixed(2)} EUR finanzieren. <button
                        onClick={() => decreaseDuration()}>kürzer</button>
                    <button onClick={() => increaseDuration()}>länger</button>
                </p>
            </div>
        </>
    )
}
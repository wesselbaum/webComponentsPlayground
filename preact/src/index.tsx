import './style.css';
import register from 'preact-custom-element';
import {ScrollHeadline} from "./components/ScrollHeadline/ScrollHeadline";
import {FinancingCalculator} from "./components/FinancingCalculator/FinancingCalculator";

register(ScrollHeadline, 'scroll-headline', ["id"], { shadow: true });
register(FinancingCalculator, 'financing-calculator', ["durationMonths", "price"], { shadow: true });

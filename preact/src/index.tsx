import './style.css';
import register from 'preact-custom-element';
import {ScrollHeadline} from "./components/ScrollHeadline";



register(ScrollHeadline, 'scroll-headline', ["id"], { shadow: true });

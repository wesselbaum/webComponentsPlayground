
import ScrollHeadlineComponent from "./web-component";

if (!customElements.get('scroll-headline')) { customElements.define('scroll-headline', ScrollHeadlineComponent); }


// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { ScrollHeadlineComponent } from './app/scroll-headline/scroll-headline.component';

(async () => {

  const app = await createApplication({
    providers: [
      /* your global providers here */
    ],
  });

  const scrollHeadlineComponent = createCustomElement(ScrollHeadlineComponent, {
    injector: app.injector,
  });

  customElements.define('scroll-headline', scrollHeadlineComponent);

})();
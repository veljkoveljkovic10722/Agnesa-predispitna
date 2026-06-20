import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideNgxScrollAnimations } from 'ngx-scroll-animations';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideNgxScrollAnimations({
      speed: 200,
      animationName: 'fade-in-up',
      once: true,
      easing: 'ease-out',
    }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    
  ]
};

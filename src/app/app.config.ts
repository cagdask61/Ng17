import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import APP_ROUTES from './app.routes';


const APP_CONFIG: ApplicationConfig = {
  providers: [
    provideRouter(APP_ROUTES, withViewTransitions()),
  ]
};


export default APP_CONFIG;
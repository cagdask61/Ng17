import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import APP_ROUTES from './app.routes';


const APP_CONFIG: ApplicationConfig = {
  providers: [
    provideRouter(APP_ROUTES)
  ]
};


export default APP_CONFIG;
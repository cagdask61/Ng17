import { Routes } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: '', loadComponent: () => import('./components/home/home.component') },
    { path: 'if', loadComponent: () => import('./components/if/if.component') },
    { path: 'for', loadComponent: () => import('./components/for/for.component') },
    { path: 'defer', loadComponent: () => import('./components/defer/defer.component') },
    { path: 'examples', loadComponent: () => import('./components/examples/examples.component') },
];


export default APP_ROUTES;
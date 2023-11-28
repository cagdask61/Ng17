import { Routes } from "@angular/router";

const EXAMPLES_ROUTES: Routes = [
    { path: '', loadComponent: () => import('./photos/photos.component') },
    { path: 'detail/:id', loadComponent: () => import('./photo-detail/photo-detail.component') },
];

export default EXAMPLES_ROUTES;
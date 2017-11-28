import { provideRouter, RouterConfig } from '@angular/router';
import { homeComponent } from './home.component';
import { aboutComponent } from './about.component';


const routes: RouterConfig = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'about', redirectTo: 'about' }
];

export const myRouterProvider = [
    provideRouter(routes)
];
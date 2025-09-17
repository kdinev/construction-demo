import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './home/home';

export const routes: Route[] = [
  { path: 'home', component: 'app-home', name: 'Home' },
  { path: '', component: 'app-home', name: 'Home' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];

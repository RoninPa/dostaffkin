import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'order',
    component: Order
  },
  {
    path: 'track',
    component: Track
  },
  {
    path: '**',
    redirectTo: ''
  }
];

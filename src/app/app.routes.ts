import { PageNotFoundComponent } from './shared/error/page-not-found/page-not-found.component';
import { Routes } from '@angular/router';


export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'subject', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

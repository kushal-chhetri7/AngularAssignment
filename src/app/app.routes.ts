import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ApiDataComponent } from './api-data/api-data';
import { FeedbackFormComponent } from './feedback-form/feedback-form';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'api-data', component: ApiDataComponent },
  { path: 'feedback-form', component: FeedbackFormComponent },
  { path: '**', redirectTo: '' }
];

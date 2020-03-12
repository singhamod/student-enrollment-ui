import { SubjectDetailsComponent } from './subject-details/subject-details.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { Routes } from '@angular/router';
import { ValidSubjectGuard } from './shared/guards/valid-subject-guard';
import { SubjectComponent } from './subject.component';

export const SUBJECT_ROUTES: Routes = [
  {
    path: 'subject',
    component: SubjectComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: SubjectListComponent },
      { path: ':id/details', component: SubjectDetailsComponent, canActivate: [ValidSubjectGuard] }
    ]
  }
];
